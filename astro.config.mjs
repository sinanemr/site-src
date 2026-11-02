import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // Set this to your GitHub Pages address, e.g. 'https://<your-username>.github.io'
  site: process.env.SITE_URL || 'https://example.github.io',
  integrations: [mdx(), sitemap(), tailwind()]
});
