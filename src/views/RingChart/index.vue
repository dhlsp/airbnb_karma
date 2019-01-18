<template>
  <div>
    <el-row style="min-height: 300px;">
      <ve-ring v-show="mercPoolData.rows.length > 0" :title="poolTitle" :legend="pieLegend" :data="mercPoolData" :settings="mercPoolSettings" width="800px" height="400px" class="echarts"></ve-ring>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RingChart',
  data() {
    return {
      // 图例位置设置
      pieLegend: {
        // type: 'scroll',
        orient: 'vertical',
        top: 25,
        right: 0,
        bottom: 20,
      },
      mercPoolData: {
        columns: ['商品', '交易数量'],
        rows: [
          { '商品': '短袖', '交易数量': 1141 },
          { '商品': '休闲裤', '交易数量': 1499 },
          { '商品': '连衣裙', '交易数量': 2260 },
          { '商品': '外套', '交易数量': 1170 },
          { '商品': '羽绒服', '交易数量': 970 },
          { '商品': '长袖', '交易数量': 1450 },
        ],
      },
      poolTitle: {
        text: '商品',
        x: 'center',
      },
      mercPoolSettings: {
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
    };
  },
};
</script>

<style lang="scss" scoped>
.content-title {
  text-align: center;
}
.echarts {
  margin: 0 auto;
}
</style>
