import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@views/login/index';

Vue.use(Router);

const login = (r) => require.ensure([], () => r(require('@views/login')), 'login');
const daysettlement = (r) => require.ensure([], () => r(require('@views/DaySettlement')), 'daysettlement');
const test = (r) => require.ensure([], () => r(require('@views/test')), 'test');

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
      path: '/day_settlement',
      name: 'daysettlement',
      component: daysettlement,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
  ],
});
