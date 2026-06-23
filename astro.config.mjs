// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: set this to your final URL so sitemap + canonical links are correct.
  //  - User/org page  (repo named `<username>.github.io`): 'https://<username>.github.io'  + leave `base` unset
  //  - Project page    (any other repo name):                'https://<username>.github.io' + base: '/<repo-name>'
  site: 'https://caboose1984.github.io',
  // base: '/portfolio',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});
