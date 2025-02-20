import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [react(), tailwind()],

  redirects: {
    '/news': '/news/page/1',
    '/home': '/',
    '/news/admin' : 'https://app.nocodb.com/#/nc/form/d6dc6d04-54a0-401e-a474-7228951f81f1',
    'documents': '/documents/page/1',
    '/events': '/events/page/1',
  },

  adapter: netlify()
});