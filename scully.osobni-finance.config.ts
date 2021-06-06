import { ScullyConfig } from '@scullyio/scully';
require('@notiz/scully-plugin-lazy-images');

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "osobni-finance",
  outDir: './static-ready',
  defaultPostRenderers: ['lazyImages'],
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};