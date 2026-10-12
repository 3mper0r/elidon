import type { NextConfig } from "next";
import { defaultLocale } from "./src/lib/i18n/locales";

const nextConfig: NextConfig = {
  redirects() {
    return [{ source: "/", destination: `/${defaultLocale}`, permanent: true }];
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      // Only global Tailwind input needs this loader. Applying it to CSS Modules
      // renames their output to .module.css.css and loses the scoped exports.
      "globals.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
