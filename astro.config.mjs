// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hikes-digital.github.io',
  base: '/homepage',
  vite: {
    plugins: [tailwindcss()]
  }
});