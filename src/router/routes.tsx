const routes = [
  {
    path: '/index',
    component: '@/pages/layout',
    routes: [
      {
        path: '/index',
        title: 'index',
        component: '@/pages/layout/layout',
      },
    ],
  },
  {
    path: '/demo',
    component: '@/pages/demo',
    routes: [
      {
        path: '/demo',
        title: 'demo',
        component: '@/pages/demo/index',
      },
    ],
  },
  {
    exact: true,
    path: '/',
    redirect: '/index',
  },
]

export default routes;