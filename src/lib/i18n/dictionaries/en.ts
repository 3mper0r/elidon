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
  }
} satisfies Dictionary;

export default dictionary;
