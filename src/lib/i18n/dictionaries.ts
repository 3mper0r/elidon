import { notFound } from "next/navigation";
import { defaultLocale, isLocale, type Locale } from "./locales";
import type { Dictionary } from "./types";

const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.default),
  de: () => import("./dictionaries/de").then((module) => module.default),
};

export async function getLocale(locale?: string | null): Promise<Locale> {
  const currentLocale = locale ?? defaultLocale;
  if (!isLocale(currentLocale)) notFound();
  return currentLocale;
}

export async function getDictionary(locale?: string | null): Promise<Dictionary> {
  return dictionaries[await getLocale(locale)]();
}
