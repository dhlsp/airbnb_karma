import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@views/login/index';

Vue.use(Router);

const login = (r) => require.ensure([], () => r(require('@views/login')), 'login');

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
  ],
});
