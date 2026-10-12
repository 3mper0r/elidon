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

- `src/app/[lang]`: locale root layout and six explicit placeholder routes.
- `src/components`: shared layout, navigation, and placeholder components.
- `src/lib/i18n`: supported locales, typed dictionaries, and page metadata.
- `src/content`: reserved for future portfolio content.

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
The homepage remains a minimal placeholder; portfolio content and business
features are intentionally deferred.
