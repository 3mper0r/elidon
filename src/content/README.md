# Portfolio content

`homepage/en.ts` and `homepage/de.ts` contain the typed portfolio content for both
languages. Update both together.

`challenges.ts` contains the gallery's authentic titles, bilingual descriptions,
Instagram links, and temporary cover images. Keep the German episode titles in
both languages. Episodes 1–6 are published; the Episode 7 card is the next teaser.
Episodes 1–4 form the confirmed "Kanal Series". Reel URLs 1–5 are preserved by
episode number from the original PR; episode 6 uses the supplied Altstadt Sprint
reel. Do not add challenges, sports, or descriptions beyond the supplied content.
Replace the temporary covers as each card is reviewed.

The homepage follows Hero → Work → Expertise → Experience → About → Contact.
Work presents an anonymized Cloud PDM Platform case study and four project domains.
Experience is grouped by domain without naming companies or dates. Do not add
responsibilities, employers, project-specific technologies, or measurable results
without confirmation. The PDM case study is based on the supplied technical
PDF; the original document is ignored by Git and must not be published.

Project pages are rendered at `/[lang]/work/[slug]`. Domain summaries remain
`noindex` and have no homepage detail links. The PDM case study has a detail link
and can be indexed. Unknown slugs return 404. Media and
outcomes are optional; summaries without real images do not render image slots.

Store real project imagery under `public/images`, with translated alt text:

```ts
image: { src: "/images/project-dashboard.jpg", alt: "Project dashboard showing the main workflow" }
```

About, expertise, and contact use the supplied profile, technologies, email, and
LinkedIn profile. Interface translations and SEO summaries live in `src/lib/i18n`.

Legacy Fitness and Creative routes and assets are retained for reuse, absent from
the homepage and navigation, and marked `noindex`.
