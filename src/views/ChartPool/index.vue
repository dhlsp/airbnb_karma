<template>
  <div>
    <el-row style="min-height: 300px;">
      <ve-pie v-show="mercPoolData.rows.length > 0" :title="poolTitle" :legend="pieLegend" :data="mercPoolData" :settings="mercPoolSettings" :extend="mercPoolExtend" width="800px" height="400px" class="echarts"></ve-pie>
    </el-row>

    <el-row>
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane :label="$t('支付金额')" name="payAmount">
          <el-row style="min-height: 300px;">
            <!-- <blue-loading v-show="mercLoading" w="50px" h="50px"></blue-loading> -->
            <ve-line v-show="mercMoneyData.rows.length > 0" :title="mercTitle" :legend="mercMoneyLegend" :data="mercMoneyData" :grid="mercMoneyGrid" width="1000px" height="500px" class="echarts"></ve-line>
            <!-- <no-data v-show="mercMoneyData.rows.length === 0"></no-data> -->
          </el-row>
        </el-tab-pane>
        <el-tab-pane :label="$t('支付笔数')" name="payFrequency">
          <el-row style="min-height: 300px;">
            <!-- <blue-loading v-show="mercLoading" w="50px" h="50px"></blue-loading> -->
            <ve-line v-show="mercCountData.rows.length > 0" :title="mercCountTitle" :legend="mercCountLegend" :data="mercCountData" :grid="mercMoneyGrid" width="1000px" height="500px" class="echarts"></ve-line>
            <!-- <no-data v-show="mercCountData.rows.length === 0"></no-data> -->
          </el-row>
        </el-tab-pane>
        <el-tab-pane :label="$t('退款金额')" name="refundAmount">
          <el-row style="min-height: 300px;">
            <!-- <blue-loading v-show="mercLoading" w="50px" h="50px"></blue-loading> -->
            <ve-line v-show="mercRefMoneyData.rows.length > 0" :title="mercRefMoneytitle" :legend="mercRefMoneyLegend" :data="mercRefMoneyData" :grid="mercMoneyGrid" width="1000px" height="500px" class="echarts"></ve-line>
            <!-- <no-data v-show="mercRefMoneyData.rows.length === 0"></no-data> -->
          </el-row>
        </el-tab-pane>
        <el-tab-pane :label="$t('退款笔数')" name="refundFrequency">
          <el-row style="min-height: 300px;">
            <!-- <blue-loading v-show="mercLoading" w="50px" h="50px"></blue-loading> -->
            <ve-line v-show="mercRefCountData.rows.length > 0" :title="mercRefCountTitle" :legend="mercRefCountLegend" :data="mercRefCountData" :grid="mercMoneyGrid" width="1000px" height="500px" class="echarts"></ve-line>
            <!-- <no-data v-show="mercRefCountData.rows.length === 0"></no-data> -->
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ChartPool',
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
            show: false,
            formatter(params) {
              return params.name + ' ' + params.percent + '%';
            },
          },
        },
      },
      mercPoolExtend: {
        series(v) {
          for (let n = 0; n < v.length; n++) {
            Object.assign(v[n] || {}, {
              avoidLabelOverlap: true,
              radius: '70%',
              center: ['40%', '50%'],
            });
          }
          return v;
        },
      },

      // tab键
      activeName: 'payAmount',
      mercTitle: {
        text: '商户支付金额',
        x: 'center',
      },
      mercMoneyGrid: {
        right: '260px',
      },
      mercMoneyData: {
        columns: ['日期', '微信', '支付宝', '广州银行', '工商银行', '建设银行', '广发银行', '合利宝', '银联', '农行', '邮政'],
        rows: [
          { '日期': '2010', '微信': 785, '支付宝': 800, '广州银行': 600, '工商银行': 500, '建设银行': 900, '广发银行': 605, '合利宝': 900, '银联': 850, '农行': 750, '邮政': 680 },
          { '日期': '2011', '微信': 800, '支付宝': 1000, '广州银行': 500, '工商银行': 800, '建设银行': 800, '广发银行': 500, '合利宝': 700, '银联': 580, '农行': 756, '邮政': 650 },
          { '日期': '2012', '微信': 900, '支付宝': 600, '广州银行': 680, '工商银行': 900, '建设银行': 780, '广发银行': 800, '合利宝': 800, '银联': 600, '农行': 800, '邮政': 800 },
          { '日期': '2013', '微信': 600, '支付宝': 700, '广州银行': 700, '工商银行': 800, '建设银行': 880, '广发银行': 600, '合利宝': 600, '银联': 870, '农行': 900, '邮政': 900 },
          { '日期': '2014', '微信': 500, '支付宝': 900, '广州银行': 800, '工商银行': 700, '建设银行': 850, '广发银行': 750, '合利宝': 500, '银联': 900, '农行': 800, '邮政': 780 },
          { '日期': '2015', '微信': 580, '支付宝': 800, '广州银行': 900, '工商银行': 805, '建设银行': 930, '广发银行': 880, '合利宝': 807, '银联': 780, '农行': 805, '邮政': 890 },
          { '日期': '2016', '微信': 900, '支付宝': 600, '广州银行': 500, '工商银行': 600, '建设银行': 400, '广发银行': 900, '合利宝': 850, '银联': 500, '农行': 970, '邮政': 770 },
          { '日期': '2017', '微信': 400, '支付宝': 400, '广州银行': 800, '工商银行': 500, '建设银行': 800, '广发银行': 560, '合利宝': 500, '银联': 600, '农行': 850, '邮政': 680 },
          { '日期': '2018', '微信': 700, '支付宝': 500, '广州银行': 500, '工商银行': 850, '建设银行': 325, '广发银行': 530, '合利宝': 980, '银联': 890, '农行': 680, '邮政': 880 },
          { '日期': '2019', '微信': 900, '支付宝': 850, '广州银行': 600, '工商银行': 680, '建设银行': 900, '广发银行': 800, '合利宝': 405, '银联': 800, '农行': 708, '邮政': 830 },
        ],
      },
      mercMoneyLegend: {
        type: 'scroll',
        orient: 'vertical',
        scrollDataIndex: 1,
        top: 30,
        right: 0,
        bottom: 30,
        // data: ['微信', '支付宝', '广州银行', '工商银行', '建设银行', '广发银行', '合利宝', '银联', '农行', '邮政'],
        // selected: {},
      },
      mercCountTitle: {
        text: '商户支付笔数',
        x: 'center',
      },
      mercCountData: {
        // columns: ['日期', '商户名', '交易笔数'],
        columns: ['日期', '微信', '支付宝', '广州银行', '工商银行', '建设银行', '广发银行', '合利宝', '银联', '农行', '邮政'],
        rows: [
          { '日期': '2010', '微信': 785, '支付宝': 800, '广州银行': 600, '工商银行': 500, '建设银行': 900, '广发银行': 605, '合利宝': 900, '银联': 850, '农行': 750, '邮政': 680 },
          { '日期': '2011', '微信': 800, '支付宝': 1000, '广州银行': 500, '工商银行': 800, '建设银行': 800, '广发银行': 500, '合利宝': 700, '银联': 580, '农行': 756, '邮政': 650 },
          { '日期': '2012', '微信': 900, '支付宝': 600, '广州银行': 680, '工商银行': 900, '建设银行': 780, '广发银行': 800, '合利宝': 800, '银联': 600, '农行': 800, '邮政': 800 },
          { '日期': '2013', '微信': 600, '支付宝': 700, '广州银行': 700, '工商银行': 800, '建设银行': 880, '广发银行': 600, '合利宝': 600, '银联': 870, '农行': 900, '邮政': 900 },
          { '日期': '2014', '微信': 500, '支付宝': 900, '广州银行': 800, '工商银行': 700, '建设银行': 850, '广发银行': 750, '合利宝': 500, '银联': 900, '农行': 800, '邮政': 780 },
          { '日期': '2015', '微信': 580, '支付宝': 800, '广州银行': 900, '工商银行': 805, '建设银行': 930, '广发银行': 880, '合利宝': 807, '银联': 780, '农行': 805, '邮政': 890 },
          { '日期': '2016', '微信': 900, '支付宝': 600, '广州银行': 500, '工商银行': 600, '建设银行': 400, '广发银行': 900, '合利宝': 850, '银联': 500, '农行': 970, '邮政': 770 },
          { '日期': '2017', '微信': 400, '支付宝': 400, '广州银行': 800, '工商银行': 500, '建设银行': 800, '广发银行': 560, '合利宝': 500, '银联': 600, '农行': 850, '邮政': 680 },
          { '日期': '2018', '微信': 700, '支付宝': 500, '广州银行': 500, '工商银行': 850, '建设银行': 325, '广发银行': 530, '合利宝': 980, '银联': 890, '农行': 680, '邮政': 880 },
          { '日期': '2019', '微信': 900, '支付宝': 850, '广州银行': 600, '工商银行': 680, '建设银行': 900, '广发银行': 800, '合利宝': 405, '银联': 800, '农行': 708, '邮政': 830 },
        ],
      },
      mercCountLegend: {
        type: 'scroll',
        orient: 'vertical',
        scrollDataIndex: 1,
        top: 30,
        right: 0,
        bottom: 30,
        // data: [],
        // selected: {},
      },
      mercRefMoneytitle: {
        text: '商户退款金额',
        x: 'center',
      },
      mercRefMoneyData: {
        // columns: ['日期'],
        // rows: [],
        columns: ['日期', '微信', '支付宝', '广州银行', '工商银行', '建设银行', '广发银行', '合利宝', '银联', '农行', '邮政'],
        rows: [
          { '日期': '2010', '微信': 785, '支付宝': 800, '广州银行': 600, '工商银行': 500, '建设银行': 900, '广发银行': 605, '合利宝': 900, '银联': 850, '农行': 750, '邮政': 680 },
          { '日期': '2011', '微信': 800, '支付宝': 1000, '广州银行': 500, '工商银行': 800, '建设银行': 800, '广发银行': 500, '合利宝': 700, '银联': 580, '农行': 756, '邮政': 650 },
          { '日期': '2012', '微信': 900, '支付宝': 600, '广州银行': 680, '工商银行': 900, '建设银行': 780, '广发银行': 800, '合利宝': 800, '银联': 600, '农行': 800, '邮政': 800 },
          { '日期': '2013', '微信': 600, '支付宝': 700, '广州银行': 700, '工商银行': 800, '建设银行': 880, '广发银行': 600, '合利宝': 600, '银联': 870, '农行': 900, '邮政': 900 },
          { '日期': '2014', '微信': 500, '支付宝': 900, '广州银行': 800, '工商银行': 700, '建设银行': 850, '广发银行': 750, '合利宝': 500, '银联': 900, '农行': 800, '邮政': 780 },
          { '日期': '2015', '微信': 580, '支付宝': 800, '广州银行': 900, '工商银行': 805, '建设银行': 930, '广发银行': 880, '合利宝': 807, '银联': 780, '农行': 805, '邮政': 890 },
          { '日期': '2016', '微信': 900, '支付宝': 600, '广州银行': 500, '工商银行': 600, '建设银行': 400, '广发银行': 900, '合利宝': 850, '银联': 500, '农行': 970, '邮政': 770 },
          { '日期': '2017', '微信': 400, '支付宝': 400, '广州银行': 800, '工商银行': 500, '建设银行': 800, '广发银行': 560, '合利宝': 500, '银联': 600, '农行': 850, '邮政': 680 },
          { '日期': '2018', '微信': 700, '支付宝': 500, '广州银行': 500, '工商银行': 850, '建设银行': 325, '广发银行': 530, '合利宝': 980, '银联': 890, '农行': 680, '邮政': 880 },
          { '日期': '2019', '微信': 900, '支付宝': 850, '广州银行': 600, '工商银行': 680, '建设银行': 900, '广发银行': 800, '合利宝': 405, '银联': 800, '农行': 708, '邮政': 830 },
        ],
      },
      mercRefMoneyLegend: {
        type: 'scroll',
        orient: 'vertical',
        scrollDataIndex: 1,
        top: 30,
        right: 0,
        bottom: 30,
        // data: [],
        // selected: {},
      },
      mercRefCountTitle: {
        text: '商户退款笔数',
        x: 'center',
      },
      mercRefCountData: {
        // columns: ['日期'],
        // rows: [],
        columns: ['日期', '微信', '支付宝', '广州银行', '工商银行', '建设银行', '广发银行', '合利宝', '银联', '农行', '邮政'],
        rows: [
          { '日期': '2010', '微信': 785, '支付宝': 800, '广州银行': 600, '工商银行': 500, '建设银行': 900, '广发银行': 605, '合利宝': 900, '银联': 850, '农行': 750, '邮政': 680 },
          { '日期': '2011', '微信': 800, '支付宝': 1000, '广州银行': 500, '工商银行': 800, '建设银行': 800, '广发银行': 500, '合利宝': 700, '银联': 580, '农行': 756, '邮政': 650 },
          { '日期': '2012', '微信': 900, '支付宝': 600, '广州银行': 680, '工商银行': 900, '建设银行': 780, '广发银行': 800, '合利宝': 800, '银联': 600, '农行': 800, '邮政': 800 },
          { '日期': '2013', '微信': 600, '支付宝': 700, '广州银行': 700, '工商银行': 800, '建设银行': 880, '广发银行': 600, '合利宝': 600, '银联': 870, '农行': 900, '邮政': 900 },
          { '日期': '2014', '微信': 500, '支付宝': 900, '广州银行': 800, '工商银行': 700, '建设银行': 850, '广发银行': 750, '合利宝': 500, '银联': 900, '农行': 800, '邮政': 780 },
          { '日期': '2015', '微信': 580, '支付宝': 800, '广州银行': 900, '工商银行': 805, '建设银行': 930, '广发银行': 880, '合利宝': 807, '银联': 780, '农行': 805, '邮政': 890 },
          { '日期': '2016', '微信': 900, '支付宝': 600, '广州银行': 500, '工商银行': 600, '建设银行': 400, '广发银行': 900, '合利宝': 850, '银联': 500, '农行': 970, '邮政': 770 },
          { '日期': '2017', '微信': 400, '支付宝': 400, '广州银行': 800, '工商银行': 500, '建设银行': 800, '广发银行': 560, '合利宝': 500, '银联': 600, '农行': 850, '邮政': 680 },
          { '日期': '2018', '微信': 700, '支付宝': 500, '广州银行': 500, '工商银行': 850, '建设银行': 325, '广发银行': 530, '合利宝': 980, '银联': 890, '农行': 680, '邮政': 880 },
          { '日期': '2019', '微信': 900, '支付宝': 850, '广州银行': 600, '工商银行': 680, '建设银行': 900, '广发银行': 800, '合利宝': 405, '银联': 800, '农行': 708, '邮政': 830 },
        ],
      },
      mercRefCountLegend: {
        type: 'scroll',
        orient: 'vertical',
        scrollDataIndex: 1,
        top: 30,
        right: 0,
        bottom: 30,
        // data: [],
        // selected: {},
      },
    };
  },
  methods: {
    // getMercPool() {
    //   if (this.mercPoolLoading) {
    //     return;
    //   }
    //   this.mercPoolLoading = true;
    //   this.$api.stat_getMercpool({}, true)
    //     .then((data) => {
    //       this.mercPoolLoading = false;
    //       data = data.data;
    //       if (data) {
    //         let rows = [];
    //         let nameCache = {};
    //         data.forEach((item) => {
    //           item.amount /= 100;
    //           if (!nameCache.hasOwnProperty(item.mechant_pool_name)) {
    //             rows.push({
    //               '商户池': item.mechant_pool_name,
    //               '商户数': parseFloat(item.stat_count),
    //             });
    //             nameCache[item.mechant_pool_name] = rows.length - 1;
    //           } else {
    //             let idx = nameCache[item.mechant_pool_name];
    //             rows[idx]['商户数'] += parseFloat(item.stat_count);
    //           }
    //         });
    //         this.mercPoolData.rows = rows;
    //         this.mercPoolPieLegend.data = rows.map((item) => item['商户池']);
    //         for (let i = 0, len = this.mercPoolPieLegend.data.length; i < len; i++) {
    //           let mechant_pool_name = this.mercPoolPieLegend.data[i];
    //           this.mercPoolPieLegend.selected[mechant_pool_name] = i < 10;
    //         }
    //       } else {
    //         this.mercPoolData.rows = [];
    //         this.mercPoolPieLegend.data = [];
    //         this.mercPoolPieLegend.selected = {};
    //       }
    //     })
    //     .catch((err) => {
    //       this.mercPoolLoading = false;
    //       this.$message.error(this.$t(err.msg));
    //     });
    // },

    // queryMoney() {
    //   if (this.moneyStartTime === '' || this.moneyEndTime === '') {
    //     this.$message.error(this.$t('请选择时间范围'));
    //     return;
    //   }
    //   if (this.mercLoading) {
    //     return;
    //   }
    //   this.mercLoading = true;
    //   let params = {
    //     product_type: '',
    //     start_time: this.moneyStartTime + ' 00:00:01',
    //     end_time: this.moneyEndTime + ' 23:59:59',
    //     merc_no: '',
    //     agenty_no: '',
    //     merc_pool_no: '',
    //   };
    //   this.mercMoneyData.columns = ['日期'];
    //   this.mercCountData.columns = ['日期'];
    //   this.mercRefMoneyData.columns = ['日期'];
    //   this.mercRefCountData.columns = ['日期'];
    //   this.$api.stat_getMercpoolBill(params, true)
    //     .then((data) => {
    //       this.mercLoading = false;
    //       data = data.data;
    //       if (data) {
    //         let amountName = [];
    //         data.forEach((item) => {
    //           let merc_pool_name = item.merc_pool_name;
    //           if (merc_pool_name) {
    //             amountName.push(merc_pool_name);
    //           }
    //         });
    //         amountName = new Set(amountName);
    //         amountName = [...amountName];
    //         let mercParams = {};
    //         let moneyRet = [];
    //         let numRet = [];
    //         let reMoneyRet = [];
    //         let reNumRet = [];
    //         for (let name of amountName) {
    //           mercParams[name] = '0';
    //           this.mercMoneyData.columns.push(name);
    //           this.mercCountData.columns.push(name);
    //           this.mercRefMoneyData.columns.push(name);
    //           this.mercRefCountData.columns.push(name);
    //         }
    //         this.mercMoneyLegend.data = this.mercMoneyData.columns;
    //         this.mercCountLegend.data = this.mercCountData.columns;
    //         this.mercRefMoneyLegend.data = this.mercRefMoneyData.columns;
    //         this.mercRefCountLegend.data = this.mercRefCountData.columns;
    //         for (let i = 1, len = this.mercMoneyData.columns.length; i < len; i++) {
    //           this.mercMoneyLegend.selected[this.mercMoneyData.columns[i]] = i < 6;
    //           this.mercCountLegend.selected[this.mercCountData.columns[i]] = i < 6;
    //           this.mercRefMoneyLegend.selected[this.mercRefMoneyData.columns[i]] = i < 6;
    //           this.mercRefCountLegend.selected[this.mercRefCountData.columns[i]] = i < 6;
    //         }
    //         let timeRet = util.timeRangeAllDate(params.start_time, params.end_time);
    //         timeRet.dateStrs.forEach((dateStr) => {
    //           moneyRet.push({
    //             '日期': dateStr,
    //             ...mercParams,
    //           });
    //           numRet.push({
    //             '日期': dateStr,
    //             ...mercParams,
    //           });
    //           reMoneyRet.push({
    //             '日期': dateStr,
    //             ...mercParams,
    //           });
    //           reNumRet.push({
    //             '日期': dateStr,
    //             ...mercParams,
    //           });
    //         });
    //         data.forEach((item) => {
    //           let merc_pool_name = item.merc_pool_name;
    //           let idx = timeRet.dateMap[item.trade_time];
    //           moneyRet[idx][merc_pool_name] = item.amount / 100;
    //           numRet[idx][merc_pool_name] = item.bill_count;
    //           reMoneyRet[idx][merc_pool_name] = item.ref_bill_amount / 100;
    //           reNumRet[idx][merc_pool_name] = item.ref_bill_count;
    //         });
    //         params = null;
    //         timeRet = null;
    //         this.mercMoneyData.rows = moneyRet;
    //         this.mercCountData.rows = numRet;
    //         this.mercRefMoneyData.rows = reMoneyRet;
    //         this.mercRefCountData.rows = reNumRet;
    //       } else {
    //         this.mercMoneyData.rows = [];
    //         this.mercCountData.rows = [];
    //         this.mercRefMoneyData.rows = [];
    //         this.mercRefCountData.rows = [];
    //         this.mercMoneyLegend.data = [];
    //         this.mercCountLegend.data = [];
    //         this.mercRefMoneyLegend.data = [];
    //         this.mercRefCountLegend.data = [];
    //         this.mercMoneyLegend.selected = {};
    //         this.mercCountLegend.selected = {};
    //         this.mercRefMoneyLegend.selected = {};
    //         this.mercRefCountLegend.selected = {};
    //       }
    //     }).catch((err) => {
    //       console.log(err);
    //       this.mercLoading = false;
    //       this.$message.error(this.$t(err.msg));
    //     });
    // },
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
