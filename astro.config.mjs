import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind(), react()],

  redirects: {
    '/noticias': '/noticias/page/1',
    '/home': '/',
    '/noticias/admin' : 'https://app.nocodb.com/#/nc/form/d6dc6d04-54a0-401e-a474-7228951f81f1'
  },

  adapter: netlify()
});