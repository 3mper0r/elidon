import type { Locale } from "@/lib/i18n/locales";

export type ChallengeCategory = "running" | "cycling" | "swimming" | "outdoor" | "strength";
export type ChallengeSeries = "canal";

type Episode = {
  number: number;
  title: string;
  category: ChallengeCategory;
  series?: ChallengeSeries;
  description: Record<Locale, string>;
  image: string;
  imagePosition?: string;
  url: string;
};

// Covers combine original reel imagery, a licensed Promenade photo, and
// temporary generated illustrations. See docs/challenges-artwork.md for credits.
// Editorial copy remains provisional until the final descriptions are supplied.
export const challengeEpisodes: Episode[] = [
  {
    number: 6,
    title: "Altstadt Sprint",
    category: "running",
    description: {
      en: "A sprint through the old town.",
      de: "Ein Sprint durch die Altstadt.",
    },
    image: "/images/challenges/promenade.webp",
    url: "https://www.instagram.com/reel/DfNRaS5qwBy/",
  },
  {
    number: 5,
    title: "Tour de Promenade",
    category: "running",
    description: {
      en: "A running challenge along the Promenade.",
      de: "Eine Laufchallenge entlang der Promenade.",
    },
    image: "/images/challenges/promenade-actual.webp",
    imagePosition: "center 65%",
    url: "https://www.instagram.com/reel/DepSPFyKwfa/",
  },
  {
    number: 4,
    title: "Beast Sprung",
    category: "outdoor",
    series: "canal",
    description: {
      en: "Beast Sprung — the fourth challenge in the series.",
      de: "Beast Sprung – die vierte Challenge der Serie.",
    },
    image: "/images/challenges/beast-sprung-bridge.webp",
    imagePosition: "center bottom",
    url: "https://www.instagram.com/reel/DdhBeFTKwNV/",
  },
  {
    number: 3,
    title: "Der Sprung",
    category: "outdoor",
    series: "canal",
    description: {
      en: "Der Sprung — the third challenge in the series.",
      de: "Der Sprung – die dritte Challenge der Serie.",
    },
    image: "/images/challenges/canal.webp",
    url: "https://www.instagram.com/reel/Dc8_bojqfCl/",
  },
  {
    number: 2,
    title: "Der Klimmzug",
    category: "strength",
    series: "canal",
    description: {
      en: "Pull-ups on the bridge.",
      de: "Klimmzüge an der Brücke.",
    },
    image: "/images/challenges/der-klimmzug-bridge.webp",
    imagePosition: "center 30%",
    url: "https://www.instagram.com/reel/DcrGG50KPyS/",
  },
  {
    number: 1,
    title: "Das Schwimmen",
    category: "swimming",
    series: "canal",
    description: {
      en: "The swimming challenge that started the series.",
      de: "Die Schwimm-Challenge zum Auftakt der Serie.",
    },
    image: "/images/challenges/swimming.webp",
    url: "https://www.instagram.com/reel/DcY-reYq2BL/",
  },
];
