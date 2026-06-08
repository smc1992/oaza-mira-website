import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

const SESSION_COOKIE_NAME = "oaza_mira_edit_session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

// Helper to sign the session timestamp using KEYSTATIC_SECRET
function generateSessionValue(): string {
  const secret = process.env.KEYSTATIC_SECRET || "default_editor_secret";
  const timestamp = Date.now().toString();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(timestamp)
    .digest("hex");
  return `${timestamp}:${signature}`;
}

// Helper to verify the session value
export function verifySession(sessionVal: string | undefined): boolean {
  if (!sessionVal) return false;
  
  const [timestampStr, signature] = sessionVal.split(":");
  if (!timestampStr || !signature) return false;
  
  // Re-generate signature and check match
  const secret = process.env.KEYSTATIC_SECRET || "default_editor_secret";
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(timestampStr)
    .digest("hex");
    
  if (signature !== expectedSignature) return false;
  
  // Check if session has expired (7 days)
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp) || Date.now() - timestamp > SESSION_MAX_AGE * 1000) {
    return false;
  }
  
  return true;
}

// GET /api/edit/auth - Check current session status
export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  const isValid = verifySession(sessionCookie?.value);
  
  return NextResponse.json({ authenticated: isValid });
}

// POST /api/edit/auth - Perform login or logout
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, password } = body;
    const cookieStore = await cookies();

    // 1. Handle Logout
    if (action === "logout") {
      cookieStore.set(SESSION_COOKIE_NAME, "", {
        path: "/",
        maxAge: 0,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return NextResponse.json({ success: true, authenticated: false });
    }

    // 2. Handle Login
    const editorPassword = process.env.VISUAL_EDITOR_PASSWORD;
    if (!editorPassword) {
      return NextResponse.json(
        { error: "Visual Editor password is not configured on the server." },
        { status: 500 }
      );
    }

    if (password !== editorPassword) {
      return NextResponse.json(
        { error: "Incorrect password. Please try again." },
        { status: 401 }
      );
    }

    // Set secure session cookie
    const sessionValue = generateSessionValue();
    cookieStore.set(SESSION_COOKIE_NAME, sessionValue, {
      path: "/",
      maxAge: SESSION_MAX_AGE,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return NextResponse.json({ success: true, authenticated: true });
  } catch (error) {
    console.error("Auth API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
