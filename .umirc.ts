// import { IConfig } from 'umi-types';

// // ref: https://umijs.org/config/
// const config: IConfig =  {
//   treeShaking: true,
//   routes: [
//     {
//       path: '/',
//       component: '../layouts/index',
//       routes: [
//         { path: '/', component: '../pages/index' }
//       ]
//     }
//   ],
//   plugins: [
//     // ref: https://umijs.org/plugin/umi-plugin-react.html
//     ['umi-plugin-react', {
//       antd: true,
//       dva: true,
//       dynamicImport: false,
//       title: 'MJ-blog',
//       dll: false,
      
//       routes: {
//         exclude: [
//           /models\//,
//           /services\//,
//           /model\.(t|j)sx?$/,
//           /service\.(t|j)sx?$/,
//           /components\//,
//         ],
//       },
//     }],
//   ],
// }

// export default config;

import { defineConfig } from 'umi';
import Routes from './src/router/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/',
  dva: { skipModelValidate: true, lazyLoad: true, disableModelsReExport: true },
  history: { type: 'hash' },
  routes: Routes,
  // routes: [{ path: '/', component: '@/pages/layout', routes: [] }],
  title: 'MJ-blog',
  fastRefresh: {},

  proxy: {
    '/proxy': {
      target: 'http://localhost:8080', // 代理的真实请求地址
      pathRewrite: { '^/proxy': '' },
      changeOrigin: true,
    },
  },
});
