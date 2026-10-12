export type EditorialMedia = {
  variant: "project" | "fitness" | "creative";
  label: string;
  caption: string;
  image?: { src: `/${string}`; alt: string };
};

export type PillarPreviewContent = {
  eyebrow: string;
  heading: string;
  description: string;
  link: string;
  media: EditorialMedia;
};

export type HomepageContent = {
  hero: {
    eyebrow: string;
    heading: [string, string];
    introduction: string;
    primaryLink: string;
    secondaryLink: string;
    scrollLink: string;
  };
  engineering: {
    eyebrow: string;
    heading: string;
    introduction: string;
    link: string;
    details: { title: string; description: string; items: string[] }[];
    projectsHeading: string;
    projectStatus: string;
    projects: { id: string; title: string; description: string; media: EditorialMedia }[];
  };
  beyond: { eyebrow: string; heading: string; introduction: string };
  fitness: PillarPreviewContent;
  creative: PillarPreviewContent;
  contact: { eyebrow: string; heading: string; description: string; link: string };
};
