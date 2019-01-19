import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = (r) => require.ensure([], () => r(require('@views/login')), 'login');
const layout = (r) => require.ensure([], () => r(require('@views/layout')), 'layout');
const homepage = (r) => require.ensure([], () => r(require('@views/HomePage')), 'HomePage');
const TableOne = (r) => require.ensure([], () => r(require('@views/TableOne')), 'TableOne');
const TableTwo = (r) => require.ensure([], () => r(require('@views/TableTwo')), 'TableTwo');
const TableThree = (r) => require.ensure([], () => r(require('@views/TableThree')), 'TableThree');
const TableFour = (r) => require.ensure([], () => r(require('@views/TableFour')), 'TableFour');
const ChartOne = (r) => require.ensure([], () => r(require('@views/ChartOne')), 'ChartOne');
const ChartPie = (r) => require.ensure([], () => r(require('@views/ChartPie')), 'ChartPie');
const ChartLine = (r) => require.ensure([], () => r(require('@views/ChartLine')), 'ChartLine');
const ChartColumnar = (r) => require.ensure([], () => r(require('@views/ChartColumnar')), 'ChartColumnar');
const ChartTwo = (r) => require.ensure([], () => r(require('@views/ChartTwo')), 'ChartTwo');
const ChartRing = (r) => require.ensure([], () => r(require('@views/ChartRing')), 'ChartRing');
const ChartHot = (r) => require.ensure([], () => r(require('@views/ChartHot')), 'ChartHot');

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
          path: 'table_one',
          name: 'table1信息',
          component: TableOne,
        },
        {
          path: 'table_two',
          name: 'table2信息',
          component: TableTwo,
        },
        {
          path: 'table_three',
          name: 'table3信息',
          component: TableThree,
        },
        {
          path: 'table_four',
          name: 'table4信息',
          component: TableFour,
        },
        {
          path: 'chart_one',
          name: '图形信息',
          component: ChartOne,
        },
        {
          path: 'chart_two',
          name: '图形信息',
          component: ChartTwo,
        },
        {
          path: 'chart_pie',
          name: '饼状图',
          component: ChartPie,
        },
        {
          path: 'chart_line',
          name: '折线图',
          component: ChartLine,
        },
        {
          path: 'chart_columnar',
          name: '柱状图',
          component: ChartColumnar,
        },
        {
          path: 'chart_ring',
          name: '环形图',
          component: ChartRing,
        },
        {
          path: 'chart_hot',
          name: '热力图',
          component: ChartHot,
        },
      ],
    },
  ],
});
