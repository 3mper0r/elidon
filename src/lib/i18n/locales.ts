export const locales = ["en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export const pageKeys = ["home", "engineering", "fitness", "creative", "about", "contact"] as const;
export type PageKey = (typeof pageKeys)[number];

export function localizedPath(locale: Locale, page: PageKey = "home") {
  return `/${locale}${page === "home" ? "" : `/${page}`}`;
}
