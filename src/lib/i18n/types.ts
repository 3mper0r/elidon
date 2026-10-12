import type { PillarKey } from "@/content/pillars";
import type { PageKey } from "./locales";

export type Dictionary = {
  navigation: Record<PageKey, string>;
  accessibility: {
    navigation: string;
    language: string;
    menu: string;
    skipToContent: string;
  };
  threePillars: {
    eyebrow: string;
    heading: string;
    description: string;
    cards: Record<PillarKey, {
      title: string;
      description: string;
      link: string;
      mediaLabel: string;
    }>;
  };
  footer: string;
  pages: Record<PageKey, { heading: string; description: string }>;
};
