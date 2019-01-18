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
const OneChart = (r) => require.ensure([], () => r(require('@views/OneChart')), 'OneChart');
const PieChart = (r) => require.ensure([], () => r(require('@views/PieChart')), 'PieChart');
const LineChart = (r) => require.ensure([], () => r(require('@views/LineChart')), 'LineChart');
const ColumnarChart = (r) => require.ensure([], () => r(require('@views/ColumnarChart')), 'ColumnarChart');
const TwoChart = (r) => require.ensure([], () => r(require('@views/TwoChart')), 'TwoChart');
const RingChart = (r) => require.ensure([], () => r(require('@views/RingChart')), 'RingChart');

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
          name: 'table1信息',
          component: onepage,
        },
        {
          path: 'two-page',
          name: 'table2信息',
          component: twopage,
        },
        {
          path: 'three-page',
          name: 'table3信息',
          component: ThreePage,
        },
        {
          path: 'four_table',
          name: 'table4信息',
          component: FourTable,
        },
        {
          path: 'one_chart',
          name: '图形信息',
          component: OneChart,
        },
        {
          path: 'two_chart',
          name: '图形信息',
          component: TwoChart,
        },
        {
          path: 'pie_chart',
          name: '饼状图',
          component: PieChart,
        },
        {
          path: 'line_chart',
          name: '折线图',
          component: LineChart,
        },
        {
          path: 'columnar_chart',
          name: '柱状图',
          component: ColumnarChart,
        },
        {
          path: 'ring_chart',
          name: '环形图',
          component: RingChart,
        },
      ],
    },
  ],
});
