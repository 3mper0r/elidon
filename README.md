# elidon.de

Portfolio-first foundation using Next.js 16.4 App Router, React 19.3,
strict TypeScript, and Tailwind CSS 4. No additional dependencies.

## Development and checks

```sh
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

`next/font/google` downloads Geist during the build and self-hosts it at runtime.
The build therefore needs access to Google Fonts; visitors make no font requests
to Google.

## Structure

- `src/app/[lang]`: locale root layout, the editorial homepage, and five placeholder routes.
- `src/components`: shared layout, navigation, and placeholder components.
- `src/lib/i18n`: supported locales, typed dictionaries, and page metadata.
- `src/content`: typed bilingual homepage content and replaceable media definitions.

English is the default: `/` permanently redirects to `/en`. Both `/en` and `/de`
provide home, engineering, fitness, creative, about, and contact pages. Unsupported
locales and unknown pages return 404. Navigation retains the locale; switching
languages retains the page path. Locale root layouts set the HTML language.

Dictionaries load only on the server through the Next.js `next/root-params` API.
Both dictionaries satisfy the same type, so missing translation keys fail type
checking. To add a page, add its key, translations, explicit route, and metadata.
Each page declares its canonical URL, language alternatives, and localized Open
Graph metadata using `https://elidon.de` as the production base URL.

The header, footer, and pages are Server Components. Only interactive navigation
and the pathname-aware language switcher are Client Components. Mobile navigation
uses a button with an accessible name, expanded state, and controlled list.

Design tokens live in `src/app/globals.css`. The layout provides responsive
containers, visible keyboard focus, a skip link, and a single main landmark.
The homepage provides a typography-first hero, engineering experience and expertise slots,
featured project slots, fitness and creative previews, and a contact section.
Professional details remain explicitly labeled placeholders. Business features
are deferred.

## Replacing homepage content

Edit `src/content/homepage/en.ts` and `de.ts`; both satisfy `HomepageContent`.
The hero uses two translated headline lines and deliberately has no portrait.
Replace experience, expertise, and project placeholders with verified details.
For each media slot, add a local asset under `public/` and set
`image: { src: "/images/training.jpg", alt: "Descriptive translated alt text" }`.
Update the caption too. The reusable media component uses `next/image`, fixed
aspect ratios and responsive sizes. Captions sit beneath the image frame in normal
flow, so they cannot overlap surrounding page sections.

Editorial components and their directly imported CSS Module live in
`src/components/editorial`. Tailwind, palette tokens, and site-wide accessibility
styles remain in `src/app/globals.css`. The headline uses `clamp()`; experience
and projects form two columns from 768px, and Fitness/Creative use alternating
text/media layouts. All content stays in document flow, with no fixed section
heights. Small hover transitions and smooth anchor scrolling run only with
`prefers-reduced-motion: no-preference`; there are no scroll-reveal animations. Mobile navigation supports
Escape to close and return focus to the menu button.
