# elidon.de

Portfolio-first foundation using Next.js 16.4 App Router, React 19.3,
strict TypeScript, and Tailwind CSS 4. No additional dependencies.

## Development and checks

```sh
npm run dev
npm run lint
npm run typecheck
npm run build
```

`next/font/google` downloads Geist during the build and self-hosts it at runtime.
The build therefore needs access to Google Fonts; visitors make no font requests
to Google.

## Hosting

The portfolio is configured for static export on Cloudflare. `npm run build`
produces the `out` directory, including both languages and all project pages.
`wrangler.jsonc` deploys only `out` to Workers Static Assets. The `/` redirect is handled by `public/_redirects`, with `public/index.html` as a
fallback. Use Node 22. `next start` is for server builds and is not used here.

See [DEPLOYMENT.md](DEPLOYMENT.md) for preview setup and the IONOS domain connection.
The DNS migration must preserve the existing email records.

## Structure

- `src/app/[lang]`: localized homepage, About, Contact, legacy pages, and project pages.
- `src/components`: responsive layout, hero illustration, navigation, technology icons.
- `src/lib/i18n`: typed English/German dictionaries, locale helpers, and metadata.
- `src/content`: bilingual portfolio content and anonymous project summaries.

Edit `src/content/homepage/en.ts` and `de.ts` together. Both satisfy
`HomepageContent`. The Cloud PDM case study is based on supplied project material;
other project areas are summaries without invented outcomes or client names.

Private source documents are excluded from Git. Never place CVs or certificates
in `public` or the exported `out` directory.
