# Cloudflare Pages deployment

## Publish the preview

1. Sign in to Cloudflare and open **Workers & Pages**.
2. Create a **Pages** project, choose **Import an existing Git repository**, and
   connect `3mper0r/elidon`. Grant access to this repository only.
3. Set the production branch to `main` and use these build settings:
   - Framework: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Output directory: `out`
   - Root directory: repository root (leave blank)
   - Node version: `22` (also specified in `.node-version`)
4. Deploy and check the generated `*.pages.dev` URL before changing DNS.

No API keys, database, paid Workers plan, or runtime environment variables are
required. Source PDFs and `private-documents` must remain excluded from Git and
must never be copied to `public` or `out`.

## Validate the build

Run `npm ci`, `npm run lint`, `npm run typecheck`, then `npm run build`.
The build must succeed and create `out/en.html`, `out/de.html`, and the case-study
pages under `out/en/work` and `out/de/work`. Serve the output using a static server
with clean URL support; `next start` is not used with static export.

Check both languages, case-study navigation, language switching, mobile menu,
email and LinkedIn links, and an unknown URL returning 404. The root redirects to
`/en` through Cloudflare's `_redirects`; `index.html` is a fallback for other hosts.
Images are served as static assets without the Next.js image optimization server.

## Connect elidon.de after preview verification

Cloudflare Pages requires the apex domain `elidon.de` to use Cloudflare nameservers.
The domain can remain registered and renewed at IONOS.

1. Export or record the existing IONOS DNS zone before changing nameservers.
2. Add `elidon.de` as a Cloudflare zone on the Free plan.
3. Compare the imported records against IONOS. Preserve mail-related MX records,
   SPF/DKIM/DMARC TXT records, mail/autodiscover CNAME records, and verification
   records. Mail-related hostnames must be DNS-only (not proxied).
4. Review DNSSEC status before a nameserver change. Follow the provider migration
   instructions if a DS record is active.
5. Use the exact two nameservers assigned by Cloudflare in IONOS's nameserver
   settings. Do not transfer or cancel the domain or mail contract.
6. Once the Cloudflare zone is active, open the Pages project's **Custom domains**,
   add `elidon.de`, and complete its DNS/HTTPS activation. Add `www.elidon.de` if
   desired through that same screen, following the provided record instructions.
7. Verify HTTPS, both languages, and inbound/outbound email for `info@elidon.de`.

Do not guess mail targets, nameserver names, or the Pages CNAME target: these come
from the account's existing DNS and the deployed project.

References:
- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
