// @ts-check
import { defineConfig } from 'astro/config';

import purgecss from 'astro-purgecss';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [purgecss()],
  output: 'static',
  adapter: vercel()
});