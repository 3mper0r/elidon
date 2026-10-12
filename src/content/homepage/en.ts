import type { HomepageContent } from "./types";

const homepage = {
  "hero": {
    "eyebrow": "Elidon / Software engineer",
    "heading": [
      "Engineering first.",
      "More beyond."
    ],
    "introduction": "An experienced software engineer with a creative perspective and an athletic mindset. A personal space for the work — and the life around it.",
    "primaryLink": "Explore engineering",
    "secondaryLink": "About me",
    "scrollLink": "Discover the work"
  },
  "engineering": {
    "eyebrow": "01 / Professional focus",
    "heading": "Engineering,\nwith perspective.",
    "introduction": "Professional experience, technical expertise, and selected work. A closer look at the engineering behind the portfolio.",
    "link": "More on engineering",
    "details": [
      {
        "title": "Professional experience",
        "description": "Experience placeholder — add verified roles, organisations, and dates.",
        "items": [
          "Role & organisation to be added",
          "Responsibilities & scope to be added"
        ]
      },
      {
        "title": "Technical expertise",
        "description": "Expertise placeholder — add the technologies and disciplines used in practice.",
        "items": [
          "Core technologies to be added",
          "Engineering strengths to be added"
        ]
      }
    ],
    "projectsHeading": "Selected projects",
    "projectStatus": "Portfolio placeholders / details to follow",
    "projects": [
      {
        "id": "01",
        "title": "Featured project 01",
        "description": "Project placeholder — add the problem, your contribution, and a verified outcome.",
        "media": {
          "variant": "project",
          "label": "Project image placeholder",
          "caption": "01 / Project visual to be added"
        }
      },
      {
        "id": "02",
        "title": "Featured project 02",
        "description": "Project placeholder — add the context, technical decisions, and a verified outcome.",
        "media": {
          "variant": "project",
          "label": "Project image placeholder",
          "caption": "02 / Project visual to be added"
        }
      }
    ]
  },
  "beyond": {
    "eyebrow": "02 / Beyond the work",
    "heading": "A wider perspective.",
    "introduction": "Movement and creative exploration. Two personal pillars alongside engineering."
  },
  "fitness": {
    "eyebrow": "Movement / Discipline",
    "heading": "Fitness",
    "description": "An athletic mindset. A space for training, movement, and the discipline of showing up.",
    "link": "Explore fitness",
    "media": {
      "variant": "fitness",
      "label": "Fitness image placeholder",
      "caption": "Training & movement / image to be added"
    }
  },
  "creative": {
    "eyebrow": "Exploration / Expression",
    "heading": "Creative",
    "description": "Room to experiment. A space for visual ideas, creative practice, and personal expression.",
    "link": "Explore creative",
    "media": {
      "variant": "creative",
      "label": "Creative image placeholder",
      "caption": "Creative work / image to be added"
    }
  },
  "contact": {
    "eyebrow": "03 / Get in touch",
    "heading": "Start a conversation.",
    "description": "For conversations about engineering, ideas, and the work ahead.",
    "link": "Contact me"
  }
} satisfies HomepageContent;

export default homepage;
