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
    '/documents': '/documents/page/1',
    '/documents/admin': 'https://app.nocodb.com/#/nc/form/f34205b4-9dc1-4692-b68e-9d426f93a4f6',
    '/events': '/events/page/1',
    '/events/admin': 'https://app.nocodb.com/#/nc/form/3970ed65-4126-4333-b64d-28470c7c33dd',

  },

  adapter: netlify()
});