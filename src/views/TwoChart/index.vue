<template>
  <el-row>
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="漏斗图" name="funnel">
        <!-- <date-range :startTime.sync="start_time" :endTime.sync="end_time"></date-range> -->
        <ve-funnel :legend="legend" :extend="funnelExtend" :data="funnelChartData" :settings="funnelChartSettings" height="400px" width="600px" :loading="funnelLoading" :data-empty="hasFunnelData" class="echarts"></ve-funnel>
      </el-tab-pane>
      <el-tab-pane label="活跃度" name="active">
        <!-- <date-range :startTime.sync="start_time" :endTime.sync="end_time"></date-range> -->
        <ve-pie :legend="legend" :data="activeData" :settings="activeSettings" width="500px" height="400px" class="echarts" :loading="activeLoading" :data-empty="hasActiveData"></ve-pie>
      </el-tab-pane>
      <el-tab-pane label="用户增长数" name="userGrowth">
        <!-- <date-range :startTime.sync="start_time" :endTime.sync="end_time"></date-range> -->
        <ve-line :legend="legend" :data="userGrowthData" :extend="userGrowthExtend" width="700px" height="400px" class="echarts" :loading="userGrowthLoading" :data-empty="hasUserGrowthData"></ve-line>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
export default {
  name: 'TwoChart',
  data() {
    return {
      activeName: 'funnel',
      legend: {
        // 图例位置设置
        top: 25,
      },
      start_time: '',
      end_time: '',
      // 漏斗图
      funnelLoading: false,
      hasFunnelData: false,
      funnelExtend: {
        series(v) {
          v.gap = 5;
          return v;
        },
      },
      funnelChartData: {
        columns: ['状态', '数值'],
        rows: [
          { '状态': '注册成功', '数值': 510 },
          { '状态': '审核成功', '数值': 300 },
          { '状态': '完成第一笔收款', '数值': 250 },
          { '状态': '完成7笔以上收款', '数值': 200 },
        ],
      },
      funnelChartSettings: {
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter(params) {
              return params.name + ' ' + params.percent + '%';
            },
          },
        },
      },
      // 饼图
      activeLoading: false,
      hasActiveData: false,
      activeData: {
        columns: ['名称', '用户数'],
        rows: [
          { '名称': '登陆用户数', '用户数': 230 },
          { '名称': '交易用户数', '用户数': 100 },
        ],
      },
      activeSettings: {
        radius: 100,
        label: {
          normal: {
            show: true,
            formatter(params) {
              return params.name + ' ' + params.percent + '%';
            },
          },
        },
      },
      // 用户增长数
      userGrowthLoading: false,
      hasUserGrowthData: false,
      userGrowthData: {
        columns: ['日期', '用户数', '新增注册用户数', '新增审核用户数'],
        rows: [
          { '日期': '2018.8.3', '用户数': 1393, '新增注册用户数': 100, '新增审核用户数': 100 },
          { '日期': '2018.8.2', '用户数': 1520, '新增注册用户数': 200, '新增审核用户数': 500 },
          { '日期': '2018.8.1', '用户数': 1870, '新增注册用户数': 500, '新增审核用户数': 1000 },
          { '日期': '2018.7.31', '用户数': 2000, '新增注册用户数': 1000, '新增审核用户数': 5000 },
          { '日期': '2018.7.30', '用户数': 5000, '新增注册用户数': 11000, '新增审核用户数': 40000 },
          { '日期': '2018.7.29', '用户数': 20000, '新增注册用户数': 50000, '新增审核用户数': 1000 },
        ],
      },
      userGrowthExtend: {
        series(v) {
          return v;
        },
      },
    };
  },
  created() {
    // this.funnelLoading = true;
    // window.setTimeout(() => {
    //   this.funnelLoading = false;
    //   this.hasFunnelData = true;
    // }, 10000);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.echarts {
  margin: 0 auto;
}
</style>
