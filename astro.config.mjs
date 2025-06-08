// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://j329nish.github.io',
  // base: 'Portfolio',
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});