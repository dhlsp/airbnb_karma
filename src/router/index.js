import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const login = (r) => require.ensure([], () => r(require('@views/login')), 'login');
const layout = (r) => require.ensure([], () => r(require('@views/layout')), 'layout');
const homepage = (r) => require.ensure([], () => r(require('@views/HomePage')), 'HomePage');
const FixQRCode = (r) => require.ensure([], () => r(require('@views/FixQRCode')), 'FixQRCode');
// table列表
const TableOne = (r) => require.ensure([], () => r(require('@views/TableOne')), 'TableOne');
const TableTwo = (r) => require.ensure([], () => r(require('@views/TableTwo')), 'TableTwo');
const TableThree = (r) => require.ensure([], () => r(require('@views/TableThree')), 'TableThree');
const TableFour = (r) => require.ensure([], () => r(require('@views/TableFour')), 'TableFour');
const TableFive = (r) => require.ensure([], () => r(require('@views/TableFive')), 'TableFive');
const TablePage = (r) => require.ensure([], () => r(require('@views/TablePage')), 'TablePage');
// v-chart图表
const ChartOne = (r) => require.ensure([], () => r(require('@views/ChartOne')), 'ChartOne');
const ChartPie = (r) => require.ensure([], () => r(require('@views/ChartPie')), 'ChartPie');
const ChartLine = (r) => require.ensure([], () => r(require('@views/ChartLine')), 'ChartLine');
const ChartColumnar = (r) => require.ensure([], () => r(require('@views/ChartColumnar')), 'ChartColumnar');
const ChartTwo = (r) => require.ensure([], () => r(require('@views/ChartTwo')), 'ChartTwo');
const ChartRing = (r) => require.ensure([], () => r(require('@views/ChartRing')), 'ChartRing');
const ChartHot = (r) => require.ensure([], () => r(require('@views/ChartHot')), 'ChartHot');
const ChartPool = (r) => require.ensure([], () => r(require('@views/ChartPool')), 'ChartPool');
const ChartAnalysis = (r) => require.ensure([], () => r(require('@views/ChartAnalysis')), 'ChartAnalysis');
// form表单
const FormOne = (r) => require.ensure([], () => r(require('@views/FormOne')), 'FormOne');
const FormValidation = (r) => require.ensure([], () => r(require('@views/FormValidation')), 'FormValidation');
const FormCron = (r) => require.ensure([], () => r(require('@views/FormCron')), 'FormCron');
const FormSetConfig = (r) => require.ensure([], () => r(require('@views/FormSetConfig')), 'FormSetConfig');
const FormQrcode = (r) => require.ensure([], () => r(require('@views/FormQrcode')), 'FormQrcode');
// 评价信息
const MessageCheck = (r) => require.ensure([], () => r(require('@views/MessageCheck')), 'MessageCheck');
const MessageTabs = (r) => require.ensure([], () => r(require('@views/MessageTabs')), 'MessageTabs');
const DialogDrag = (r) => require.ensure([], () => r(require('@views/DialogDrag')), 'DialogDrag');
const MessageMoney = (r) => require.ensure([], () => r(require('@views/MessageMoney')), 'MessageMoney');
const TimeLine = (r) => require.ensure([], () => r(require('@views/TimeLine')), 'TimeLine');
// Tree树状图
const TreeControls = (r) => require.ensure([], () => r(require('@views/TreeControls')), 'TreeControls');
// 错误处理
const Error404 = (r) => require.ensure([], () => r(require('@views/Error404')), 'Error404');
const AlertWarning = (r) => require.ensure([], () => r(require('@views/AlertWarning')), 'AlertWarning');

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
          path: 'fix_qr_code',
          name: '生成二维码',
          component: FixQRCode,
        },
        {
          path: 'table_one',
          name: '列表移动列',
          component: TableOne,
        },
        {
          path: 'table_two',
          name: '列表添加列',
          component: TableTwo,
        },
        {
          path: 'table_three',
          name: '列表编辑列',
          component: TableThree,
        },
        {
          path: 'table_four',
          name: '列表合计列',
          component: TableFour,
        },
        {
          path: 'table_five',
          name: '列表合并',
          component: TableFive,
        },
        {
          path: 'table_page',
          name: '列表页码',
          component: TablePage,
        },
        {
          path: 'chart_one',
          name: '图形一',
          component: ChartOne,
        },
        {
          path: 'chart_two',
          name: '图形二',
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
        {
          path: 'chart_pool',
          name: '图表池',
          component: ChartPool,
        },
        {
          path: 'chart_analysis',
          name: '图表统计',
          component: ChartAnalysis,
        },
        {
          path: 'form_one',
          name: '表单一',
          component: FormOne,
        },
        {
          path: 'form_validation',
          name: '表单验证',
          component: FormValidation,
        },
        {
          path: 'form_cron',
          name: '表单Cron(定时策略)',
          component: FormCron,
        },
        {
          path: 'form_set_config',
          name: '时间配置',
          component: FormSetConfig,
        },
        {
          path: 'form_qrcode',
          name: '生成二维码',
          component: FormQrcode,
        },
        {
          path: 'message_check',
          name: '信息查看',
          component: MessageCheck,
        },
        {
          path: 'message_tabs',
          name: '消息查看',
          component: MessageTabs,
        },
        {
          path: 'dialog_drag',
          name: '信息拖拽',
          component: DialogDrag,
        },
        {
          path: 'message_money',
          name: '钱包信息',
          component: MessageMoney,
        },
        {
          path: 'tree_controls',
          name: '树形控件',
          component: TreeControls,
        },
        {
          path: 'error_404',
          name: '404页面',
          component: Error404,
        },
        {
          path: 'alert_warning',
          name: '提示',
          component: AlertWarning,
        },
        {
          path: 'time_line',
          name: '钱包时间线',
          component: TimeLine,
        },
      ],
    },
  ],
});
