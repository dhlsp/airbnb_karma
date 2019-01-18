<template>
  <div>
    <el-row style="min-height: 300px;">
      <ve-histogram v-show="mercPoolData.rows.length > 0" :title="poolTitle" :legend="pieLegend" :data="mercPoolData" :settings="mercPoolSettings" width="800px" height="400px" class="echarts"></ve-histogram>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ColumnarChart',
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
        columns: ['商品', '交易数量', '交易金额', '退款金额', '退款笔数'],
        rows: [
          { '商品': '短袖', '交易数量': 1141, '交易金额': 500, '退款金额': 470, '退款笔数': 605 },
          { '商品': '休闲裤', '交易数量': 1499, '交易金额': 600, '退款金额': 490, '退款笔数': 208 },
          { '商品': '连衣裙', '交易数量': 1260, '交易金额': 550, '退款金额': 480, '退款笔数': 260 },
          { '商品': '外套', '交易数量': 1170, '交易金额': 650, '退款金额': 480, '退款笔数': 280 },
          { '商品': '羽绒服', '交易数量': 970, '交易金额': 780, '退款金额': 460, '退款笔数': 250 },
          { '商品': '长袖', '交易数量': 1450, '交易金额': 950, '退款金额': 430, '退款笔数': 850 },
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
              return params.data;
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
