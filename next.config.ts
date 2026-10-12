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
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
