# Portfolio content

`homepage/en.ts` and `homepage/de.ts` hold the typed portfolio content for both locales.
Update both files together. All unverified professional details are explicitly labeled placeholders.

The homepage follows Hero → Selected Work → Engineering Expertise → Professional
Experience → About / Engineering Approach → Contact. Navigation targets localized
homepage sections, including from case-study and legacy routes.

Selected Work currently contains two case-study slots. Add a third entry to the
`work.projects` array in both locales when ready. Each entry supplies a stable slug,
problem description, role, technical context, outcomes, and media. Its detail page
is rendered at `/[lang]/work/[slug]`; unknown slugs return 404. Replace placeholder
copy with verified work, trade-offs, and outcomes. Remove the detail page's `noindex`
metadata when the case studies are ready to publish.

Each media definition accepts a local image with translated alt text:

```ts
image: { src: "/images/project-dashboard.jpg", alt: "Project dashboard showing the main workflow" }
```

Store images under `public/images`. Without an image, the existing media component
renders a clearly labeled abstract placeholder. No project imagery is fabricated.

Expertise, career roles/dates/responsibilities, and the personal engineering approach
still need verified content. The Contact route remains a placeholder until professional
contact details are supplied. Interface translations and SEO summaries live in
`src/lib/i18n`.

The legacy Fitness and Creative routes, pillar component, content, and assets are
retained for reuse. They are absent from homepage/navigation; legacy Fitness and
Creative pages are marked `noindex`. Existing Engineering and About routes remain
available for incoming links.
