import { defineConfig } from 'astro/config';

// Site 100% estático: rápido, bom para SEO e barato de hospedar.
export default defineConfig({
  server: { host: true },
});
