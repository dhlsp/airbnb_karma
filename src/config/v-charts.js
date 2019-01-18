import Vue from 'vue';
import VeLine from 'v-charts/lib/line.common';
import VeFunnel from 'v-charts/lib/funnel.common';
import Histogram from 'v-charts/lib/histogram.common';
import Pie from 'v-charts/lib/pie.common';
import Ring from 'v-charts/lib/ring.common';
import 'echarts/lib/component/title';

Vue.component(VeLine.name, VeLine); // 折线图
Vue.component(VeFunnel.name, VeFunnel); // 漏斗图
Vue.component(Histogram.name, Histogram); // 柱状图
Vue.component(Pie.name, Pie); // 饼图
Vue.component(Ring.name, Ring); // 环形图
