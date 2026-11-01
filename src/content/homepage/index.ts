import { getLocale } from "@/lib/i18n/dictionaries";
import type { HomepageContent } from "./types";

const content = {
  en: () => import("./en").then((module) => module.default),
  de: () => import("./de").then((module) => module.default),
};

export async function getHomepageContent(localeOverride?: string | null): Promise<HomepageContent> {
  return content[await getLocale(localeOverride)]();
}
