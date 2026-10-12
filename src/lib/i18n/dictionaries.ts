import { lang } from "next/root-params";
import { notFound } from "next/navigation";
import { isLocale } from "./locales";
import type { Dictionary } from "./types";

const dictionaries = {
  en: () => import("./dictionaries/en").then((module) => module.default),
  de: () => import("./dictionaries/de").then((module) => module.default),
};

export async function getLocale() {
  const locale = await lang();
  if (!isLocale(locale)) notFound();
  return locale;
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]();
}
