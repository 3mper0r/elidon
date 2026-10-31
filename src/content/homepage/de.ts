import type { HomepageContent } from "./types";

const homepage = {
  "hero": {
    "eyebrow": "Softwareentwickler",
    "heading": [
      "Ich entwickle Produkte mit echter ",
      "Wirkung."
    ],
    "introduction": "Ich konzipiere und entwickle moderne Webanwendungen mit Fokus auf Produktwert, Performance und eine überzeugende Nutzererfahrung.",
    "primaryLink": "Meine Arbeit ansehen",
    "secondaryLink": "Über mich",
    "scrollLink": "Projekte entdecken"
  },
  "work": {
    "eyebrow": "01 / Projekte",
    "heading": "Verschiedene Bereiche.\nEin Fokus auf Lösungen.",
    "introduction": "Meine Projekterfahrung umfasst digitalen Handel, Bildung, Unternehmenssoftware, technische Umgebungen und Websites. In diesen Bereichen habe ich gearbeitet.",
    "status": "Eine ausgewählte Fallstudie und weitere Erfahrungsbereiche",
    "detailLink": "Fallstudie ansehen",
    "backLink": "Zurück zu den Projekten",
    "roleLabel": "Beitrag",
    "technologyLabel": "Kontext & Technologien",
    "outcomeLabel": "Ergebnisse",
    "projects": [
      {
        "id": "01",
        "slug": "cloud-pdm-platform",
        "title": "Cloud-PDM-Plattform",
        "description": "Von komplexer CAD-Infrastruktur zu einem geführten Self-Service-SaaS-Erlebnis.",
        "role": "Technische Leitung · Fullstack-Entwicklung",
        "technologies": "React · Next.js · TypeScript · Tailwind CSS · Zustand · Node.js · AWS Amplify · Lambda · API Gateway · DynamoDB · SES · Cognito · NextAuth · Stripe",
        "caseStudy": [
          {
            "heading": "Die Herausforderung",
            "body": "Engineering-Unternehmen benötigten einen geführten Weg, um cloudbasierte Autodesk-Vault-Infrastruktur für CAD-Dateien, Baugruppen, Zeichnungen und Revisionen zu konfigurieren und zu abonnieren. Die Herausforderung bestand darin, komplexe Einrichtungs- und Abonnementprozesse in ein Self-Service-SaaS-Erlebnis zu übersetzen."
          },
          {
            "heading": "Mein Beitrag",
            "body": "Ich leitete die technische Entwicklung, traf zentrale Architekturentscheidungen und implementierte wesentliche Teile von Frontend, Backend-Integrationen, Authentifizierung, Preisberechnung und Zahlungsabwicklung."
          },
          {
            "heading": "Umgesetzte Systeme",
            "body": "Ein mehrstufiger Konfigurationsassistent mit bedingten Eingaben, Validierung, Datei-Uploads und Fortschrittsanzeige. Dynamische Preise verbanden Tarifauswahl, nutzungsbasierte Konfiguration, Steuerberechnung und Checkout-Status. Cognito-Authentifizierung und Stripe deckten Identität, Zahlungseinrichtung, Abonnements und Abrechnungsmetadaten ab. Die Cloud-Integrationen umfassten AWS-Dienste, DynamoDB und transaktionale E-Mails."
          },
          {
            "heading": "Architektur",
            "body": "Die Oberfläche mit Next.js, React und TypeScript greift auf authentifizierte API-Routen für Validierung, Geschäftsregeln und Integrationen zu. Cognito und NextAuth unterstützen Identität und Sitzungen; Stripe unterstützt Steuern und Abonnements; AWS-APIs und Lambda verbinden Cloud-Workflows mit DynamoDB und SES. Dies ist eine vereinfachte konzeptionelle Darstellung, kein vollständiges Infrastrukturverzeichnis."
          },
          {
            "heading": "Technische Entscheidungen",
            "body": "Ein gemeinsames typisiertes Zustandsmodell hielt Assistenteneingaben und Preise über voneinander abhängige Schritte hinweg konsistent. Sensible Zahlungs-, Authentifizierungs- und Integrationsvorgänge blieben hinter authentifizierten serverseitigen Endpunkten. Validierung, Ladezustände, Upload-Fortschritt und Dienstfehler wurden als zentrale Bestandteile der Customer Journey behandelt."
          }
        ]
      },
      {
        "id": "02",
        "title": "Commerce- & Lernplattformen",
        "slug": "e-commerce-learning",
        "description": "Erfahrung mit E-Commerce- und E-Learning-Plattformen.",
        "role": "Projekterfahrung",
        "technologies": "E-Commerce · E-Learning"
      },
      {
        "id": "03",
        "title": "Unternehmenssoftware & Dashboards",
        "slug": "business-systems",
        "description": "Erfahrung mit ERP-Systemen und Dashboards für Unternehmen.",
        "role": "Projekterfahrung",
        "technologies": "ERP · Dashboards"
      },
      {
        "id": "04",
        "title": "3D & technische Umgebungen",
        "slug": "3d-cad-cam-bim",
        "description": "Erfahrung mit 3D-Projekten sowie in CAD-, CAM- und BIM-Umgebungen.",
        "role": "Projekterfahrung",
        "technologies": "3D · CAD · CAM · BIM"
      },
      {
        "id": "05",
        "title": "Websites & Branding",
        "slug": "websites-branding",
        "description": "Erfahrung mit privaten Websites und Branding-Projekten.",
        "role": "Projekterfahrung",
        "technologies": "Private Websites · Branding"
      }
    ]
  },
  "expertise": {
    "eyebrow": "02 / Technische Expertise",
    "heading": "Technische Tiefe.\nKlare Prioritäten.",
    "introduction": "Mein Werkzeugkasten umfasst Benutzeroberflächen, Backend-Entwicklung, Cloud-Dienste und Datenbanken.",
    "details": [
      {
        "title": "Fullstack-Entwicklung",
        "items": [
          "React & Next.js",
          "Node.js & Python"
        ]
      },
      {
        "title": "Cloud & Daten",
        "items": [
          "AWS",
          "SQL & NoSQL"
        ]
      }
    ]
  },
  "experience": {
    "eyebrow": "03 / Berufliche Erfahrung",
    "heading": "Erfahrung,\nvon Oberfläche bis Infrastruktur.",
    "introduction": "Mein Hintergrund verbindet Fullstack-Produktentwicklung, freiberufliche Projekte, Frontend-Entwicklung und IT-Management.",
    "entries": [
      {
        "title": "Fullstack-Entwickler · Cloud-SaaS",
        "period": "Jan. 2024 – heute",
        "description": "Technische Leitung einer Cloud-Plattform für Engineering-Unternehmen, die mit Autodesk Vault in CAD-, CAM- und BIM-Umgebungen arbeiten.",
        "items": [
          "Einen modularen Konfigurationsassistenten entwickelt und tabellenbasierte Preisformeln in Anwendungslogik übersetzt.",
          "Stripe-Zahlungen, Authentifizierung, transaktionale E-Mails und die Speicherung von Bestellungen integriert.",
          "Mehrsprachige Navigation und Routing mit React, Next.js, TypeScript und AWS-Diensten umgesetzt."
        ]
      },
      {
        "title": "Freiberuflicher Fullstack-Entwickler",
        "period": "Jan. 2022 – Dez. 2023",
        "description": "Digitale Lösungen für kleine und mittlere Unternehmen entwickelt, darunter Landingpages, E-Commerce, Dashboards und Fertigungssoftware.",
        "items": [
          "An einer Fertigungsplattform mit ERP-, CRM-, CAD- und 3D-Funktionen mitgearbeitet.",
          "Drag-and-drop-Produktionsplanung und 3D-Produktvisualisierung entwickelt.",
          "Mit React, Next.js, Node.js, Express, Babylon.js und MongoDB gearbeitet."
        ]
      },
      {
        "title": "Frontend-Entwickler · E-Learning",
        "period": "Juni 2020 – Dez. 2021",
        "description": "Eine albanischsprachige E-Learning-Plattform für Ingenieurwesen und technische Bildung entwickelt.",
        "items": [
          "Dashboards für Lernende und Lehrende sowie Funktionen zur Kursinteraktion entwickelt.",
          "React-Klassenkomponenten in funktionale Komponenten überführt."
        ]
      },
      {
        "title": "IT-Manager · Produkt & Systeme",
        "period": "Juli 2017 – Dez. 2019",
        "description": "Interne Softwareinitiativen und Systemmanagement in einem Beratungsunternehmen geleitet.",
        "items": [
          "Die Entwicklung interner ERP-Software für Betriebsabläufe und Kundenkommunikation geleitet.",
          "Datensysteme, Analytics-Pipelines und Cloud-Infrastruktur betreut."
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "04 / Über mich",
    "heading": "Digitale Lösungen.\nFür Unternehmen entwickelt.",
    "introduction": "Ich bin Fullstack-Entwickler mit Sitz in Deutschland und bringe über sieben Jahre Erfahrung mit SaaS, Unternehmenssoftware und E-Commerce mit. Ich habe einen Bachelorabschluss in Software Design / Informatik. Ich übersetze geschäftliche Herausforderungen gern in digitale Lösungen und verbinde durchdachte Oberflächen mit Backend-Systemen und Cloud-Diensten.",
    "availability": "Ich bin offen für Festanstellungen, freiberufliche Projekte und Kooperationen — von konkreten Herausforderungen bis zur gemeinsamen Entwicklung ambitionierter Produkte.",
    "technologyLabel": "Technologien, mit denen ich arbeite"
  },
  "contact": {
    "eyebrow": "05 / Kontakt",
    "heading": "Eine Herausforderung?\nEntwickeln wir die Lösung.",
    "description": "Du suchst einen Fullstack-Entwickler für dein Team oder dein nächstes Projekt? Ich bin in Deutschland ansässig und offen für Festanstellungen, freiberufliche Arbeit und Kooperationen. Schreib mir, was du vorhast.",
    "link": "E-Mail schreiben",
    "email": "info@elidon.de"
  }
} satisfies HomepageContent;

export default homepage;
