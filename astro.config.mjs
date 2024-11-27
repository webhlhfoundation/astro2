// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  //output: 'server',
  output: 'hybrid',

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  site: "https://astro2-ahd.pages.dev/",
  integrations: [preact()],
});