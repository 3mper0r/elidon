import type { Dictionary } from "../types";

const dictionary = {
  "navigation": {
    "home": "Home",
    "engineering": "Engineering",
    "fitness": "Fitness",
    "creative": "Creative",
    "about": "About",
    "contact": "Contact"
  },
  "accessibility": {
    "navigation": "Main navigation",
    "language": "Select language",
    "menu": "Menu",
    "skipToContent": "Skip to content"
  },
  "footer": "Engineering. Movement. Expression.",
  "pages": {
    "home": {
      "heading": "Elidon",
      "description": "Software engineer with a creative perspective and an athletic mindset."
    },
    "engineering": {
      "heading": "Engineering",
      "description": "Software engineering, selected projects, and technical experience."
    },
    "fitness": {
      "heading": "Fitness",
      "description": "Movement, discipline, and an active life."
    },
    "creative": {
      "heading": "Creative",
      "description": "Creative exploration and personal expression."
    },
    "about": {
      "heading": "About",
      "description": "The person behind the engineering, movement, and creative work."
    },
    "contact": {
      "heading": "Contact",
      "description": "A place for future conversations and professional enquiries."
    }
  },
  "threePillars": {
    "eyebrow": "02 / Three pillars",
    "heading": "Work. Movement. Expression.",
    "description": "Engineering at the core. Fitness and creative exploration alongside it. Three perspectives, one personal approach.",
    "cards": {
      "engineering": {
        "title": "Engineering",
        "description": "Professional experience, technical perspective, and selected software projects.",
        "link": "Explore engineering",
        "mediaLabel": "Engineering image placeholder"
      },
      "fitness": {
        "title": "Fitness",
        "description": "Training, movement, and the discipline of showing up.",
        "link": "Explore fitness",
        "mediaLabel": "Fitness image placeholder"
      },
      "creative": {
        "title": "Creative",
        "description": "Visual ideas, creative practice, and room to experiment.",
        "link": "Explore creative",
        "mediaLabel": "Creative image placeholder"
      }
    }
  }
} satisfies Dictionary;

export default dictionary;
