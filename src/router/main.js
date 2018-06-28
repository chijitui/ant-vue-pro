import Main from '@/views/Main';

export default [
  {
    path: '/dashboard',
    name: '_dashboard',
    title: '图表页',
    icon: 'dashboard',
    component: Main,
    children: [
    /* eslint-disable global-require */
      {
        path: 'analysis',
        name: '_dashboard_analysis',
        title: '分析页',
        icon: 'line-chart',
        meta: {
          father: '_dashboard',
        },
        component: resolve => require(['@/views/dashboard/Analysis'], resolve),
      },
      {
        path: 'monitor',
        name: '_dashboard_monitor',
        title: '监控页',
        icon: 'compass',
        meta: {
          father: '_dashboard',
        },
        component: resolve => require(['@/views/dashboard/Monitor'], resolve),
      },
      {
        path: 'workplace',
        name: '_dashboard_workplace',
        title: '工作台',
        icon: 'global',
        meta: {
          father: '_dashboard',
        },
        component: resolve => require(['@/views/dashboard/Workplace'], resolve),
      },
    /* eslint-disable global-require */
    ],
  },
];
