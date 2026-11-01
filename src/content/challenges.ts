import type { Locale } from "@/lib/i18n/locales";

export type ChallengeCategory = "running" | "cycling" | "swimming" | "outdoor";

type Episode = {
  number: number;
  title: Record<Locale, string>;
  category: ChallengeCategory;
  description: Record<Locale, string>;
  image: string;
  url: string;
};

// Generated illustrations are temporary covers, not photographs from the reels.
// Editorial copy remains provisional until the final descriptions are supplied.
export const challengeEpisodes: Episode[] = [
  {
    number: 5,
    title: { en: "Tour de Promenade", de: "Tour de Promenade" },
    category: "running",
    description: {
      en: "A running challenge around Münster's iconic Promenade.",
      de: "Eine Laufchallenge rund um Münsters bekannte Promenade.",
    },
    image: "/images/challenges/promenade.webp",
    url: "https://www.instagram.com/reel/DepSPFyKwfa/",
  },
  {
    number: 4,
    title: { en: "Kanal Challenge", de: "Kanal Challenge" },
    category: "running",
    description: {
      en: "A long-distance run alongside the canal.",
      de: "Ein Langstreckenlauf entlang des Kanals.",
    },
    image: "/images/challenges/canal.webp",
    url: "https://www.instagram.com/reel/DdhBeFTKwNV/",
  },
  {
    number: 3,
    title: { en: "Swimming Challenge", de: "Schwimm-Challenge" },
    category: "swimming",
    description: {
      en: "Endurance in the water and a new personal test.",
      de: "Ausdauer im Wasser und eine neue persönliche Herausforderung.",
    },
    image: "/images/challenges/swimming.webp",
    url: "https://www.instagram.com/reel/Dc8_bojqfCl/",
  },
  {
    number: 2,
    title: { en: "MTB Challenge", de: "MTB Challenge" },
    category: "cycling",
    description: {
      en: "Forest trails, technical riding and elevation.",
      de: "Waldwege, anspruchsvolle Trails und Höhenmeter.",
    },
    image: "/images/challenges/cycling.webp",
    url: "https://www.instagram.com/reel/DcrGG50KPyS/",
  },
  {
    number: 1,
    title: { en: "Running Challenge", de: "Laufchallenge" },
    category: "running",
    description: {
      en: "The beginning of a personal endurance series.",
      de: "Der Auftakt einer persönlichen Ausdauerserie.",
    },
    image: "/images/challenges/running.webp",
    url: "https://www.instagram.com/reel/DcY-reYq2BL/",
  },
];
