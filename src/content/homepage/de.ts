import type { HomepageContent } from "./types";

const homepage = {
  "hero": {
    "eyebrow": "Elidon / Softwareentwickler",
    "heading": [
      "Engineering zuerst.",
      "Mehr dahinter."
    ],
    "introduction": "Erfahrener Softwareentwickler mit kreativer Perspektive und sportlicher Einstellung. Ein persönlicher Raum für die Arbeit — und das Leben drumherum.",
    "primaryLink": "Engineering entdecken",
    "secondaryLink": "Über mich",
    "scrollLink": "Die Arbeit entdecken"
  },
  "engineering": {
    "eyebrow": "01 / Beruflicher Fokus",
    "heading": "Engineering\nmit Perspektive.",
    "introduction": "Berufliche Erfahrung, technische Expertise und ausgewählte Arbeiten. Ein Einblick in das Engineering hinter dem Portfolio.",
    "link": "Mehr über Engineering",
    "details": [
      {
        "title": "Berufliche Erfahrung",
        "description": "Erfahrungs-Platzhalter — bestätigte Positionen, Unternehmen und Zeiträume ergänzen.",
        "items": [
          "Position & Unternehmen folgen",
          "Verantwortung & Aufgaben folgen"
        ]
      },
      {
        "title": "Technische Expertise",
        "description": "Expertise-Platzhalter — tatsächlich eingesetzte Technologien und Fachgebiete ergänzen.",
        "items": [
          "Zentrale Technologien folgen",
          "Technische Schwerpunkte folgen"
        ]
      }
    ],
    "projectsHeading": "Ausgewählte Projekte",
    "projectStatus": "Portfolio-Platzhalter / Details folgen",
    "projects": [
      {
        "id": "01",
        "title": "Ausgewähltes Projekt 01",
        "description": "Projekt-Platzhalter — die Aufgabe, den eigenen Beitrag und ein belegbares Ergebnis ergänzen.",
        "media": {
          "variant": "project",
          "label": "Projektbild-Platzhalter",
          "caption": "01 / Projektbild folgt"
        }
      },
      {
        "id": "02",
        "title": "Ausgewähltes Projekt 02",
        "description": "Projekt-Platzhalter — den Kontext, technische Entscheidungen und ein belegbares Ergebnis ergänzen.",
        "media": {
          "variant": "project",
          "label": "Projektbild-Platzhalter",
          "caption": "02 / Projektbild folgt"
        }
      }
    ]
  },
  "contact": {
    "eyebrow": "03 / Kontakt",
    "heading": "Ins Gespräch kommen.",
    "description": "Für Gespräche über Engineering, Ideen und die nächsten Schritte.",
    "link": "Kontakt aufnehmen"
  }
} satisfies HomepageContent;

export default homepage;
