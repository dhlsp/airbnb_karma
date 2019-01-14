import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = (r) => require.ensure([], () => r(require('@views/login')), 'login');
const layout = (r) => require.ensure([], () => r(require('@views/layout')), 'layout');
const homepage = (r) => require.ensure([], () => r(require('@views/HomePage')), 'HomePage');
const onepage = (r) => require.ensure([], () => r(require('@views/OnePage')), 'OnePage');
const twopage = (r) => require.ensure([], () => r(require('@views/TwoPage')), 'TwoPage');
const ThreePage = (r) => require.ensure([], () => r(require('@views/ThreePage')), 'ThreePage');
const FourTable = (r) => require.ensure([], () => r(require('@views/FourTable')), 'FourTable');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
      name: '首页',
      component: layout,
      children: [
        {
          path: 'home-page',
          name: '基础信息',
          component: homepage,
          meta: {
            keepAlive: true,
          },
        },
        {
          path: 'one-page',
          name: '基础yi信息',
          component: onepage,
        },
        {
          path: 'two-page',
          name: '基础2信息',
          component: twopage,
        },
        {
          path: 'three-page',
          name: '基础3信息',
          component: ThreePage,
        },
        {
          path: 'four_table',
          name: '基础4信息',
          component: FourTable,
        },
      ],
    },
  ],
});
