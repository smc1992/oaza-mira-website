import { MetadataRoute } from "next";

const locales = ["en", "de", "hr"] as const;
const baseUrl = "https://oaza-mira.app";

const paths = [
  "",
  "/about",
  "/how-it-works",
  "/families",
  "/providers",
  "/business",
  "/institutions",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
  "/imprint",
  "/refund-policy",
  "/account-deletion-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${path}`;
      
      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = `${baseUrl}/${altLocale}${path}`;
      }

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1.0 : path === "/contact" ? 0.8 : 0.6,
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
