// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://05blue04.github.io', // update with your GitHub username
  vite: {
    plugins: [tailwindcss()],
  },
});
