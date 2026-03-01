import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://timito-media.at',
  output: 'static',
  adapter: netlify(),
  integrations: [sitemap(), react()],
  build: {
    inlineStylesheets: 'auto',
  },
});
