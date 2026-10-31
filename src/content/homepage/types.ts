export type EditorialMedia = {
  variant: "project";
  label: string;
  caption: string;
  image?: { src: `/${string}`; alt: string };
};

type ContentSection = { eyebrow: string; heading: string; introduction: string };
export type HomepageContent = {
  hero: { eyebrow: string; heading: [string, string]; introduction: string; primaryLink: string; secondaryLink: string; scrollLink: string };
  work: ContentSection & {
    status: string;
    detailLink: string;
    backLink: string;
    roleLabel: string;
    technologyLabel: string;
    outcomeLabel: string;
    projects: { id: string; slug: string; title: string; description: string; role: string; technologies: string; outcome?: string; media?: EditorialMedia; caseStudy?: { heading: string; body: string }[] }[];
  };
  expertise: ContentSection & { details: { title: string; items: string[] }[] };
  experience: ContentSection & { entries: { title: string; period?: string; description: string; items: string[] }[] };
  about: ContentSection & { availability: string; technologyLabel: string };
  contact: { eyebrow: string; heading: string; description: string; link: string; email: string };
};
