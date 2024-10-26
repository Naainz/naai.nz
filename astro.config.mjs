import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      'import.meta.env.CF_PAGES_BRANCH': JSON.stringify(process.env.CF_PAGES_BRANCH),
      'import.meta.env.CF_PAGES_COMMIT_SHA': JSON.stringify(process.env.CF_PAGES_COMMIT_SHA),
    },
  },
  markdown: {
    shikiConfig: { theme: "dark-plus" },
  },
  site: "https://naai.nz",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    solidJs(),
  ]
});
