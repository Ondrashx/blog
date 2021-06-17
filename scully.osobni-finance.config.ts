import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
require('@notiz/scully-plugin-lazy-images');
const {DisableAngular} = require('scully-plugin-disable-angular');
const {timeToRead, timeToReadOptions} = require('scully-plugin-time-to-read');
//import { getDelayAngularPlugin } from '@flowaccount/scully-plugin-angular-delay';

setPluginConfig(timeToRead, {
  path: '/blog/',
} as timeToReadOptions);


setPluginConfig(DisableAngular, 'postProcessByHtml', {
  ignoreRoutes: [
    '/financni-kalkulacky', 
  ]
});

const postRenderers = [
  DisableAngular,
  'lazyImages',
  // getDelayAngularPlugin({
  //   routesBlacklist: [
  //     { route: '/financni-kalkulacky', removeAngular: false },
  //     // { route: '/functions', removeAngular: true }
  //   ],
  //   delayMilliseconds: 1500
  // })
];


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "osobni-finance",
  outDir: './static-ready',
  defaultPostRenderers: postRenderers,
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};


