import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  output: "export",
  images: { unoptimized: true },
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
