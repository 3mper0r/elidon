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
    "eyebrow": "01 / Work",
    "heading": "Different domains.\nA focus on solutions.",
    "introduction": "My project experience spans digital commerce, education, business software, technical environments, and websites. Here are the areas I have worked in.",
    "status": "A selected case study and further areas of experience",
    "detailLink": "View case study",
    "backLink": "Back to work",
    "roleLabel": "Contribution",
    "technologyLabel": "Context & technologies",
    "outcomeLabel": "Outcomes",
    "projects": [
      {
        "id": "01",
        "slug": "cloud-pdm-platform",
        "title": "Cloud PDM Platform",
        "description": "From complex CAD infrastructure to a guided, self-service SaaS experience.",
        "role": "Technical lead · Full stack development",
        "technologies": "React · Next.js · TypeScript · Tailwind CSS · Zustand · Node.js · AWS Amplify · Lambda · API Gateway · DynamoDB · SES · Cognito · NextAuth · Stripe",
        "caseStudy": [
          {
            "heading": "The challenge",
            "body": "Engineering companies needed a guided way to configure and subscribe to cloud-hosted Autodesk Vault infrastructure for CAD files, assemblies, drawings, and revisions. The challenge was to turn complex setup and subscription processes into a self-service SaaS experience."
          },
          {
            "heading": "My contribution",
            "body": "I led technical development, defined key architecture decisions, and implemented core parts of the frontend, backend integrations, authentication, pricing, and payments."
          },
          {
            "heading": "Systems delivered",
            "body": "A multi-step configuration wizard with conditional inputs, validation, file uploads, and progress feedback. Dynamic pricing connected plan selection, usage-based configuration, tax calculation, and checkout state. Cognito authentication and Stripe handled identity, payment setup, subscriptions, and billing metadata. Cloud integrations included AWS services, DynamoDB persistence, and transactional email."
          },
          {
            "heading": "Architecture",
            "body": "The Next.js, React, and TypeScript interface connects to authenticated API routes for validation, business rules, and integration orchestration. Cognito and NextAuth support identity and sessions; Stripe supports tax and subscriptions; AWS APIs and Lambda connect cloud workflows with DynamoDB and SES. This is a simplified conceptual view, rather than a complete infrastructure inventory."
          },
          {
            "heading": "Engineering decisions",
            "body": "I used a shared typed state model to keep wizard inputs and pricing consistent across dependent steps. Sensitive payment, authentication, and integration operations stayed behind authenticated server-side endpoints. Validation, loading states, upload progress, and service errors were treated as core parts of the customer journey."
          }
        ]
      },
      {
        "id": "02",
        "title": "Commerce & learning platforms",
        "slug": "e-commerce-learning",
        "description": "Experience working on e-commerce and e-learning platforms.",
        "role": "Project experience",
        "technologies": "E-commerce · E-learning"
      },
      {
        "id": "03",
        "title": "Business systems & dashboards",
        "slug": "business-systems",
        "description": "Experience working on ERP systems and dashboards for companies.",
        "role": "Project experience",
        "technologies": "ERP · Dashboards"
      },
      {
        "id": "04",
        "title": "3D & technical environments",
        "slug": "3d-cad-cam-bim",
        "description": "Experience working on 3D projects and within CAD, CAM, and BIM environments.",
        "role": "Project experience",
        "technologies": "3D · CAD · CAM · BIM"
      },
      {
        "id": "05",
        "title": "Websites & branding",
        "slug": "websites-branding",
        "description": "Experience working on private websites and branding projects.",
        "role": "Project experience",
        "technologies": "Private websites · Branding"
      }
    ]
  },
  "expertise": {
    "eyebrow": "02 / Engineering expertise",
    "heading": "Technical depth.\nClear priorities.",
    "introduction": "My toolkit spans interfaces, backend development, cloud services, and databases.",
    "details": [
      {
        "title": "Full stack development",
        "items": [
          "React & Next.js",
          "Node.js & Python"
        ]
      },
      {
        "title": "Cloud & data",
        "items": [
          "AWS",
          "SQL & NoSQL"
        ]
      }
    ]
  },
  "experience": {
    "eyebrow": "03 / Professional experience",
    "heading": "Experience,\nfrom interface to infrastructure.",
    "introduction": "My background combines full stack product development, freelance projects, frontend engineering, and IT management.",
    "entries": [
      {
        "title": "Full Stack Developer · Cloud SaaS",
        "period": "Jan 2024 – Present",
        "description": "Technical lead on a cloud platform for engineering companies working with Autodesk Vault in CAD, CAM, and BIM environments.",
        "items": [
          "Built a modular configuration wizard and translated spreadsheet-based pricing formulas into application logic.",
          "Integrated Stripe payments, authentication, transactional email, and order persistence.",
          "Implemented multilingual navigation and routing with React, Next.js, TypeScript, and AWS services."
        ]
      },
      {
        "title": "Freelance Full Stack Developer",
        "period": "Jan 2022 – Dec 2023",
        "description": "Built digital solutions for small and medium-sized companies, including landing pages, e-commerce, dashboards, and manufacturing software.",
        "items": [
          "Contributed to a manufacturing platform combining ERP, CRM, CAD, and 3D features.",
          "Developed drag-and-drop production planning and 3D product visualization.",
          "Worked with React, Next.js, Node.js, Express, Babylon.js, and MongoDB."
        ]
      },
      {
        "title": "Frontend Developer · E-learning",
        "period": "Jun 2020 – Dec 2021",
        "description": "Developed an Albanian-language e-learning platform for engineering and technology education.",
        "items": [
          "Built student and teacher dashboards and course interaction features.",
          "Migrated React class components to functional components."
        ]
      },
      {
        "title": "IT Manager · Product & Systems",
        "period": "Jul 2017 – Dec 2019",
        "description": "Led internal software initiatives and systems management in a consulting environment.",
        "items": [
          "Led development of internal ERP software for operations and client communication.",
          "Managed data systems, analytics pipelines, and cloud infrastructure."
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "04 / About me",
    "heading": "Digital solutions.\nBuilt for business.",
    "introduction": "I’m a full stack developer based in Germany, with over seven years of experience across SaaS, enterprise software, and e-commerce. I hold a bachelor’s degree in Software Design / Computer Science. I enjoy turning business challenges into digital solutions, connecting thoughtful interfaces with backend systems and cloud services.",
    "availability": "I’m open to full-time roles, freelance projects, and collaborations — from solving a specific challenge to building an ambitious product together.",
    "technologyLabel": "Technologies I work with"
  },
  "contact": {
    "eyebrow": "05 / Get in touch",
    "heading": "Have a challenge?\nLet’s build the solution.",
    "description": "Looking for a full stack developer for your team or your next project? I’m based in Germany and open to roles, freelance work, and collaborations. Tell me what you have in mind.",
    "link": "Send me an email",
    "email": "info@elidon.de"
  }
} satisfies HomepageContent;

export default homepage;
