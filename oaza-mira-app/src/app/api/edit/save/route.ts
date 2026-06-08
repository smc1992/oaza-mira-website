import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import { verifySession } from "../auth/route";

const SESSION_COOKIE_NAME = "oaza_mira_edit_session";

export async function POST(request: Request) {
  try {
    // 1. Verify Authentication Session
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
    
    if (!verifySession(sessionCookie?.value)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse payload
    const body = await request.json();
    const { lang, updates } = body;

    if (!lang || !updates || typeof updates !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    if (!["de", "en", "hr"].includes(lang)) {
      return NextResponse.json({ error: "Unsupported locale" }, { status: 400 });
    }

    // 3. Process local save in development
    const isProd = process.env.NODE_ENV === "production";
    
    // Read current dictionary
    // We resolve the file path from the app root
    const filePath = path.join(process.cwd(), "src/dictionaries", `${lang}.json`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: `Translation file for ${lang} not found.` }, { status: 404 });
    }
    
    const fileContent = fs.readFileSync(filePath, "utf8");
    const dict = JSON.parse(fileContent);

    // Merge updates safely to prevent prototype pollution
    for (const [key, value] of Object.entries(updates)) {
      if (
        typeof value === "string" &&
        key !== "__proto__" &&
        key !== "constructor" &&
        key !== "prototype"
      ) {
        dict[key] = value;
      }
    }

    const updatedJSON = JSON.stringify(dict, null, 2);

    if (!isProd) {
      // Dev mode: save directly to disk
      fs.writeFileSync(filePath, updatedJSON, "utf8");
      console.log(`[Visual Editor] Saved ${Object.keys(updates).length} keys to local ${lang}.json`);
      return NextResponse.json({ success: true, mode: "local" });
    } else {
      // Production mode: Commit to GitHub via GitHub API
      const token = process.env.GITHUB_PAT;
      if (!token) {
        return NextResponse.json(
          { error: "GITHUB_PAT environment variable is not configured in production." },
          { status: 500 }
        );
      }

      const repo = "smc1992/oaza-mira-website";
      // Path inside the GitHub repo
      const githubPath = `oaza-mira-app/src/dictionaries/${lang}.json`;

      // 1. Fetch current file to get the latest Git SHA (required for updating)
      const getUrl = `https://api.github.com/repos/${repo}/contents/${githubPath}`;
      const getRes = await fetch(getUrl, {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Oaza-Mira-Visual-Editor",
        },
        cache: "no-store",
      });

      if (!getRes.ok) {
        const errText = await getRes.text();
        console.error("Failed to fetch SHA from GitHub:", errText);
        return NextResponse.json(
          { error: `Could not fetch file metadata from GitHub: ${getRes.statusText}` },
          { status: 502 }
        );
      }

      const fileData = await getRes.json();
      const sha = fileData.sha;

      // 2. Perform the PUT request to commit the updated file content
      const putRes = await fetch(getUrl, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
          "User-Agent": "Oaza-Mira-Visual-Editor",
        },
        body: JSON.stringify({
          message: `Translation update (${lang}) via Visual Editor`,
          content: Buffer.from(updatedJSON).toString("base64"),
          sha,
        }),
      });

      if (!putRes.ok) {
        const errText = await putRes.text();
        console.error("Failed to commit file to GitHub:", errText);
        return NextResponse.json(
          { error: `Could not commit changes to GitHub: ${putRes.statusText}` },
          { status: 502 }
        );
      }

      console.log(`[Visual Editor] Successfully committed translation updates to GitHub for ${lang}.json`);
      return NextResponse.json({ success: true, mode: "github" });
    }
  } catch (error) {
    console.error("Save API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
