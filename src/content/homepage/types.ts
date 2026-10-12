export type EditorialMedia = {
  variant: "project";
  label: string;
  caption: string;
  image?: { src: `/${string}`; alt: string };
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
  contact: { eyebrow: string; heading: string; description: string; link: string };
};
