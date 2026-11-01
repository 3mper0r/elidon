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

// Cover images and editorial copy remain placeholders until the original
// episode covers and final descriptions are supplied.
export const challengeEpisodes: Episode[] = [
  {
    number: 5,
    title: { en: "Tour de Promenade", de: "Tour de Promenade" },
    category: "running",
    description: {
      en: "A running challenge around Münster's iconic Promenade.",
      de: "Eine Laufchallenge rund um Münsters bekannte Promenade.",
    },
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85",
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
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=85",
    url: "https://www.instagram.com/reel/DdhBeFTKwNV/",
  },
  {
    number: 3,
    title: { en: "Swimming Challenge", de: "Schwimmchallenge" },
    category: "swimming",
    description: {
      en: "Endurance in the water and a new personal test.",
      de: "Ausdauer im Wasser und eine neue persönliche Herausforderung.",
    },
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=85",
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
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1000&q=85",
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
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1000&q=85",
    url: "https://www.instagram.com/reel/DcY-reYq2BL/",
  },
];
