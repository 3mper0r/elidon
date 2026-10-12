import type { PageKey } from "./locales";

export type Dictionary = {
  navigation: Record<PageKey, string>;
  accessibility: {
    navigation: string;
    language: string;
    menu: string;
    skipToContent: string;
  };
  footer: string;
  pages: Record<PageKey, { heading: string; description: string }>;
};
