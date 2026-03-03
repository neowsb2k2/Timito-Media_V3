import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://timito-media.at',
  output: 'static',
  adapter: netlify(),
  integrations: [sitemap(), react(), markdoc(), keystatic()],
  build: {
    inlineStylesheets: 'auto',
  },
});
