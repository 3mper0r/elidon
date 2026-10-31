import type { HomepageContent } from "./types";

const homepage = {
  "hero": {
    "eyebrow": "Software engineer",
    "heading": [
      "Building products that create real ",
      "impact."
    ],
    "introduction": "I design and build modern web applications with a focus on product value, performance and great user experience.",
    "primaryLink": "View My Work",
    "secondaryLink": "About Me",
    "scrollLink": "Explore the work"
  },
  "work": {
    "eyebrow": "01 / Selected work",
    "heading": "The work.\nThe decisions behind it.",
    "introduction": "Two case-study slots, ready for real engineering work. Project details and imagery will be added after verification.",
    "status": "Content placeholders / case studies to follow",
    "detailLink": "View case-study placeholder",
    "backLink": "Back to selected work",
    "roleLabel": "Role & contribution",
    "technologyLabel": "Technical context",
    "outcomeLabel": "Outcomes & trade-offs",
    "projects": [
      {
        "id": "01",
        "title": "Case study 01 / Placeholder",
        "description": "Project placeholder — add the problem, your contribution, and a verified outcome.",
        "media": {
          "variant": "project",
          "label": "Project image placeholder",
          "caption": "01 / Project visual to be added"
        },
        "slug": "case-study-01",
        "role": "Role & contribution — to be added",
        "technologies": "Stack & technical decisions — to be added",
        "outcome": "Verified outcomes & trade-offs — to be added"
      },
      {
        "id": "02",
        "title": "Case study 02 / Placeholder",
        "description": "Project placeholder — add the context, technical decisions, and a verified outcome.",
        "media": {
          "variant": "project",
          "label": "Project image placeholder",
          "caption": "02 / Project visual to be added"
        },
        "slug": "case-study-02",
        "role": "Role & contribution — to be added",
        "technologies": "Stack & technical decisions — to be added",
        "outcome": "Verified outcomes & trade-offs — to be added"
      }
    ]
  },
  "expertise": {
    "eyebrow": "02 / Engineering expertise",
    "heading": "Technical depth.\nClear priorities.",
    "introduction": "Expertise placeholder — verified disciplines, technologies, and practical examples will follow.",
    "details": [
      {
        "title": "Technical expertise",
        "description": "Expertise placeholder — add the technologies and disciplines used in practice.",
        "items": [
          "Core technologies to be added",
          "Engineering strengths to be added"
        ]
      }
    ]
  },
  "experience": {
    "eyebrow": "03 / Professional experience",
    "heading": "Experience,\nin context.",
    "introduction": "Career details will be added with verified roles, organisations, and dates.",
    "entries": [
      {
        "title": "Role & organisation / Placeholder",
        "period": "Dates to be added",
        "description": "Experience placeholder — add verified roles, organisations, and dates.",
        "items": [
          "Responsibilities & scope — to be added",
          "Verified contributions & outcomes — to be added"
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "04 / About & engineering approach",
    "heading": "How I approach\nthe work.",
    "introduction": "Approach placeholder — add a personal account of problem solving, technical trade-offs, collaboration, and software quality, supported by real examples."
  },
  "contact": {
    "eyebrow": "05 / Contact",
    "heading": "Let’s talk engineering.",
    "description": "For engineering roles, technical collaboration, and conversations with product teams.",
    "link": "Get in touch"
  }
} satisfies HomepageContent;

export default homepage;
