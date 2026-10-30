import type { Locale } from "@/lib/i18n/locales";

export const pillarKeys = ["engineering", "fitness", "creative"] as const;
export type PillarKey = (typeof pillarKeys)[number];

type PillarMedia = {
  image?: {
    src: `/images/${string}`;
    alt: Record<Locale, string>;
  };
};

// Add local images and both translated alt texts here when real assets are ready.
export const pillarMedia: Record<PillarKey, PillarMedia> = {
  engineering: {},
  fitness: {
    image: {
      src: "/images/fitness-training.png",
      alt: {
        en: "Athlete standing beside a loaded barbell in a gym.",
        de: "Sportler neben einer beladenen Langhantel im Fitnessstudio.",
      },
    },
  },
  creative: {},
};
