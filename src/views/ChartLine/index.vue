<template>
  <div>
    <el-row style="min-height: 300px;">
      <ve-line v-show="mercPoolAmount.rows.length > 0" :title="moneyTitle" :legend="pieLegend" :extend="moneyExtend" :data="mercPoolAmount" :grid="mercMoneyGrid" width="800px" height="400px" class="echarts"></ve-line>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'ChartLine',
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
      mercPoolAmount: {
        columns: ['时间', '交易金额', '交易笔数', '退款金额', '退款笔数', '剩余数量', '交易数量', '进货金额'],
        rows: [
          { '时间': '2010', '交易金额': 2200, '交易笔数': 785, '退款金额': 400, '退款笔数': 20, '剩余数量': 100, '交易数量': 5050, '进货金额': 1200 },
          { '时间': '2011', '交易金额': 2500, '交易笔数': 820, '退款金额': 800, '退款笔数': 50, '剩余数量': 200, '交易数量': 2300, '进货金额': 5000 },
          { '时间': '2012', '交易金额': 2600, '交易笔数': 544, '退款金额': 500, '退款笔数': 60, '剩余数量': 500, '交易数量': 2500, '进货金额': 5500 },
          { '时间': '2013', '交易金额': 2780, '交易笔数': 590, '退款金额': 440, '退款笔数': 70, '剩余数量': 800, '交易数量': 2500, '进货金额': 5600 },
          { '时间': '2014', '交易金额': 1200, '交易笔数': 250, '退款金额': 570, '退款笔数': 55, '剩余数量': 100, '交易数量': 2800, '进货金额': 2000 },
          { '时间': '2015', '交易金额': 1222, '交易笔数': 500, '退款金额': 880, '退款笔数': 66, '剩余数量': 600, '交易数量': 2300, '进货金额': 2200 },
          { '时间': '2016', '交易金额': 1283, '交易笔数': 450, '退款金额': 680, '退款笔数': 88, '剩余数量': 700, '交易数量': 2500, '进货金额': 2800 },
          { '时间': '2017', '交易金额': 1314, '交易笔数': 600, '退款金额': 440, '退款笔数': 99, '剩余数量': 100, '交易数量': 1200, '进货金额': 2090 },
          { '时间': '2018', '交易金额': 2314, '交易笔数': 800, '退款金额': 550, '退款笔数': 10, '剩余数量': 200, '交易数量': 5200, '进货金额': 6200 },
          { '时间': '2019', '交易金额': 4560, '交易笔数': 862, '退款金额': 400, '退款笔数': 10, '剩余数量': 50, '交易数量': 1200, '进货金额': 8200 },
        ],
      },
      mercMoneyGrid: {
        right: '100px',
      },
      moneyTitle: {
        text: '交易',
        x: 'center',
      },
      extend: {
        series: {
          areaStyle: {
            normal: {
              // colorstr() {
              //   let rgb = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
              //   console.log(rgb, rgb);
              //   return rgb;
              // },
              // area: true,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                // color: 'rgb(64, 158, 255)',
                // color: 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')', // 随机生成颜色
              }, {
                offset: 1,
                color: 'rgb(255, 255, 255)',
              }]),
            },
          },
          label: {
            normal: {
              show: true,
            },
          },
        },
      },
      moneyExtend: {
        series(v) {
          for (let n = 0; n < v.length; n++) {
            // let y = n + 1, u = n + 2, v = n + 3;
            // let R = y + 1.14 * v;
            // let G = y - 0.394 * u - 0.581 * v;
            // let B = y + 2.028 * u;
            // if (R < 0) {
            //   R = 0;
            // }
            // if (G < 0) {
            //   G = 0;
            // }
            // if (B < 0) {
            //   B = 0;
            // }
            // if (R > 255) {
            //   R = 255;
            // }
            // if (G > 255) {
            //   G = 255;
            // }
            // if (B > 255) {
            //   B = 255;
            // }
            // let rgb = 'rgb(' + R + ',' + G + ',' + B + ')';
            // console.log('rgb', rgb);

            let colorStr = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
            let Str = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
            console.log(colorStr);
            Object.assign(v[n] || {}, {
              areaStyle: {
                normal: {
                  // area: true,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    // color: 'rgb(64, 158, 255)',
                    // color: 'rgb(' + Math.floor(Math.random(n) * 255) + ',' + Math.floor(Math.random(n) * 255) + ',' + Math.floor(Math.random(n) * 255) + ')',
                    color: Str,
                  }, {
                    offset: 1,
                    color: 'rgb(255, 255, 255)',
                  }]),
                },
              },
              itemStyle: {
                normal: {
                  color: Str,
                  // color: 'rgb(64, 158, 255)',
                  // color: 'rgb(' + Math.floor(Math.random(n) * 255) + ',' + Math.floor(Math.random(n) * 255) + ',' + Math.floor(Math.random(n) * 255) + ')',
                },
              },
              markPoint: {
                data: [
                  { type: 'max', name: '最大值' },
                  { type: 'min', name: '最小值' },
                ],
              },
            });
          }
          return v;
        },
      },

      // moneyExtend: {
      //   series(v) {
      //     Object.assign(v[0] || {}, { // 判断是否v为空null、undefined
      //       areaStyle: {
      //         normal: {
      //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: 'rgb(64, 158, 255)',
      //           }, {
      //             offset: 1,
      //             color: 'rgb(255, 255, 255)',
      //           }]),
      //         },
      //       },
      //       itemStyle: {
      //         normal: {
      //           color: 'rgb(64, 158, 255)',
      //         },
      //       },
      //       markPoint: {
      //         data: [
      //           { type: 'max', name: '最大值' },
      //           { type: 'min', name: '最小值' },
      //         ],
      //       },
      //     });
      //     Object.assign(v[1], {
      //       areaStyle: {
      //         normal: {
      //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: 'rgb(252, 48, 48)',
      //           }, {
      //             offset: 1,
      //             color: 'rgb(255, 255, 255)',
      //           }]),
      //         },
      //       },
      //       itemStyle: {
      //         normal: {
      //           color: 'rgb(252, 48, 48)',
      //         },
      //       },
      //       markPoint: {
      //         data: [
      //           { type: 'max', name: '最大值' },
      //           { type: 'min', name: '最小值' },
      //         ],
      //       },
      //     });
      //     Object.assign(v[2], {
      //       areaStyle: {
      //         normal: {
      //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: 'rgb(252, 50, 160)',
      //           }, {
      //             offset: 1,
      //             color: 'rgb(255, 255, 255)',
      //           }]),
      //         },
      //       },
      //       itemStyle: {
      //         normal: {
      //           color: 'rgb(252, 50, 160)',
      //         },
      //       },
      //       markPoint: {
      //         data: [
      //           { type: 'max', name: '最大值' },
      //           { type: 'min', name: '最小值' },
      //         ],
      //       },
      //     });
      //     Object.assign(v[3], {
      //       areaStyle: {
      //         normal: {
      //           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: 'rgb(252, 125, 66)',
      //           }, {
      //             offset: 1,
      //             color: 'rgb(255, 255, 255)',
      //           }]),
      //         },
      //       },
      //       itemStyle: {
      //         normal: {
      //           color: 'rgb(252, 125, 66)',
      //         },
      //       },
      //       markPoint: {
      //         data: [
      //           { type: 'max', name: '最大值' },
      //           { type: 'min', name: '最小值' },
      //         ],
      //       },
      //     });
      //     return v;
      //   },
      // },
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
