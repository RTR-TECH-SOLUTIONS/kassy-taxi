// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Producția: https://taxi-ludus.ro, în rădăcină (Enhance, publicat din GitHub, vezi DEPLOY.md).
// Demo-ul de pe https://demo.mrwebsites.ro/kassy-taxi/ se construiește cu SITE_BASE=/kassy-taxi (workflow-ul GitHub
// sau `npm run build:demo`); pe subfolder Layout-ul pune noindex. Linkurile interne trec prin u() din src/lib/cale.ts.
const env = /** @type {any} */ (globalThis).process?.env ?? {};
const base = env.SITE_BASE || env.PUBLIC_BASE || '/';
const site = env.SITE_URL || (base === '/' ? 'https://taxi-ludus.ro' : 'https://demo.mrwebsites.ro');

export default defineConfig({
  site,
  base,
  // 4400-4495 sunt ocupate parțial de alte demo-uri (4421, 4430, 4460, 4470...).
  server: { port: 4436, host: '127.0.0.1' },
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      // Paginile legale sunt pe noindex, deci nu intră nici în sitemap.
      filter: (page) => !/\/(politica-de-cookies|politica-de-confidentialitate|termeni-si-conditii)\/$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
