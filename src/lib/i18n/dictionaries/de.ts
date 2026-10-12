import type { Dictionary } from "../types";

const dictionary = {
  "navigation": {
    "home": "Start",
    "engineering": "Engineering",
    "fitness": "Fitness",
    "creative": "Kreatives",
    "about": "Über mich",
    "contact": "Kontakt"
  },
  "accessibility": {
    "navigation": "Hauptnavigation",
    "language": "Sprache wählen",
    "menu": "Menü",
    "skipToContent": "Zum Inhalt springen"
  },
  "footer": "Engineering. Bewegung. Ausdruck.",
  "pages": {
    "home": {
      "heading": "Elidon",
      "description": "Softwareentwickler mit kreativer Perspektive und sportlicher Einstellung."
    },
    "engineering": {
      "heading": "Engineering",
      "description": "Softwareentwicklung, ausgewählte Projekte und technische Erfahrung."
    },
    "fitness": {
      "heading": "Fitness",
      "description": "Bewegung, Disziplin und ein aktives Leben."
    },
    "creative": {
      "heading": "Kreatives",
      "description": "Kreative Entdeckungen und persönlicher Ausdruck."
    },
    "about": {
      "heading": "Über mich",
      "description": "Der Mensch hinter der Softwareentwicklung, dem Sport und der kreativen Arbeit."
    },
    "contact": {
      "heading": "Kontakt",
      "description": "Ein Ort für zukünftige Gespräche und berufliche Anfragen."
    }
  },
  "threePillars": {
    "eyebrow": "02 / Drei Säulen",
    "heading": "Arbeit. Bewegung. Ausdruck.",
    "description": "Engineering im Mittelpunkt. Fitness und kreative Entdeckungen ergänzen es. Drei Perspektiven, ein persönlicher Ansatz.",
    "cards": {
      "engineering": {
        "title": "Engineering",
        "description": "Berufliche Erfahrung, technische Perspektiven und ausgewählte Softwareprojekte.",
        "link": "Engineering entdecken",
        "mediaLabel": "Engineeringbild-Platzhalter"
      },
      "fitness": {
        "title": "Fitness",
        "description": "Training, Bewegung und die Disziplin, dranzubleiben.",
        "link": "Fitness entdecken",
        "mediaLabel": "Fitnessbild-Platzhalter"
      },
      "creative": {
        "title": "Kreatives",
        "description": "Visuelle Ideen, kreative Arbeit und Raum zum Experimentieren.",
        "link": "Kreatives entdecken",
        "mediaLabel": "Kreativbild-Platzhalter"
      }
    }
  }
} satisfies Dictionary;

export default dictionary;
