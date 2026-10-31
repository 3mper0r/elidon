# Cloudflare static hosting deployment

## Publish the preview (Workers Static Assets)

The existing Cloudflare project is a Worker named `elidon`. It serves only static
files from `out`, using `wrangler.jsonc`. No server-side Worker code, OpenNext
adapter, server bundle, or cache bindings are needed.

In the project's **Settings → Build**, connect `3mper0r/elidon` and set:

- Production branch: `main`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: repository root (leave blank)
- Node version: `22` (also specified in `.node-version`)

Retry deployment using the latest source commit. Wrangler reads the checked-in
configuration and uploads `out`, without the framework auto-setup that attempts
to migrate Next.js to OpenNext. Do not set the asset directory to `.next`.

Check the assigned `*.workers.dev` address before changing DNS. Static asset
requests are free under Cloudflare's static asset pricing. No database or runtime
environment variables are required. Keep all source PDFs and `private-documents`
out of Git and never copy them to `public` or `out`.

For an alternative Pages project, use the **Next.js (Static HTML Export)** preset,
`npm run build`, and output directory `out`; Pages does not use a deploy command.

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

Connecting the Worker to `elidon.de` requires an active Cloudflare DNS zone.
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
6. Once the Cloudflare zone is active, open the Worker's **Settings → Domains &
   Routes → Add → Custom Domain**, add `elidon.de`, and complete activation. Add
   `www.elidon.de` if desired through that same screen.
7. Verify HTTPS, both languages, and inbound/outbound email for `info@elidon.de`.

Do not guess mail targets, nameserver names, or hosting record targets: these come
from the account's existing DNS and the deployed project.

References:
- https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/
- https://developers.cloudflare.com/pages/configuration/custom-domains/

- https://developers.cloudflare.com/workers/static-assets/
- https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
