import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
//import { getTocPlugin, TocConfig } from 'scully-plugin-toc';
require('@notiz/scully-plugin-lazy-images');
const {DisableAngular} = require('scully-plugin-disable-angular');
const {timeToRead, timeToReadOptions} = require('scully-plugin-time-to-read');
import { getTocPlugin, TocConfig } from 'scully-plugin-toc';

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
  'toc'
  // getDelayAngularPlugin({
  //   routesBlacklist: [
  //     { route: '/financni-kalkulacky', removeAngular: false },
  //     // { route: '/functions', removeAngular: true }
  //   ],
  //   delayMilliseconds: 1500
  // })
];

const tocOptions: TocConfig = {
  blogAreaSelector: '.blog-content',
  insertSelector: '#toc',
  level: ['h2', 'h3'],
};
const TocPlugin = getTocPlugin();
setPluginConfig(TocPlugin, tocOptions);


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


