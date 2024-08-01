import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [svelte(), tailwind()],
  site: 'https://crisynr.github.io',
  base: '/hotel',
  outDir: 'public',
  publicDir: 'static',
});