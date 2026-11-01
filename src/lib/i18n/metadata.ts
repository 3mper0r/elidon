import type { Metadata } from "next";
import { getDictionary, getLocale } from "./dictionaries";
import { localizedPath, type PageKey } from "./locales";

export async function getPageMetadata(page: PageKey, localeOverride?: string | null): Promise<Metadata> {
  const locale = await getLocale(localeOverride);
  const dictionary = await getDictionary(locale);
  const { heading, description } = dictionary.pages[page];
  const title = page === "home"
    ? `Elidon | ${locale === "en" ? "Software Engineer" : "Softwareentwickler"}`
    : `${heading} | Elidon`;

  return {
    title,
    description,
    ...(page === "fitness" || page === "creative" ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical: localizedPath(locale, page),
      languages: {
        en: localizedPath("en", page),
        de: localizedPath("de", page),
        "x-default": localizedPath("en", page),
      },
    },
    openGraph: {
      title,
      description,
      siteName: "Elidon",
      type: "website",
      url: localizedPath(locale, page),
      locale: locale === "en" ? "en_US" : "de_DE",
      alternateLocale: locale === "en" ? "de_DE" : "en_US",
    },
  };
}
