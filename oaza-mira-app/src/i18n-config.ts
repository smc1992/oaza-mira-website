export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "hr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
