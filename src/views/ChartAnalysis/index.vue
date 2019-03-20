<template>
  <div>
    <!-- <el-form :model="form" :inline="true">
      <el-form-item>
        <scroll-request-select
          v-model="form.merc_no"
          apiMethod="merchant_selectMerchant"
          :otherParams="mercSelectParams"
          idKey="merc_no"
          nameKey="merc_name">
        </scroll-request-select>
      </el-form-item>
      <el-form-item>
        <date-range :startTime.sync="form.start_time" :endTime.sync="form.end_time"></date-range>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="search">{{$t('查询')}}</el-button>
      </el-form-item>
    </el-form> -->
    <el-row style="display: flex; justify-content: space-around;">
      <el-card class="box-card">
        <el-progress type="circle" :percentage="successRatio" :stroke-width="20"></el-progress>
        <div class="radio-title">
          {{$t('成功率')}}
        </div>
      </el-card>
      <el-card class="box-card">
        <el-progress type="circle" :percentage="failureRatio" :stroke-width="20" color="#f56c6c"></el-progress>
        <div class="radio-title">
          {{$t('失败率')}}
        </div>
      </el-card>
      <el-card class="box-card">
        <el-progress type="circle" :percentage="undoneRatio" :stroke-width="20" color="#67c23a"></el-progress>
        <div class="radio-title">
          {{$t('未支付率')}}
        </div>
      </el-card>
    </el-row>
    <el-row style="min-height: 300px; margin-top: 10px;">
      <!-- <blue-loading v-show="load" w="50px" h="50px"></blue-loading> -->
      <ve-histogram :extend="hisExtends" :data="histogramData" width="1000px" height="500px" class="echarts"></ve-histogram>
      <!-- <no-data v-show="histogramData.rows.length === 0"></no-data> -->
    </el-row>
  </div>
</template>

<script>
// import numeral from 'numeral';
// import data from '@views/TransactionDetails/components/data';

// const findOrderStatus = (n) => {
//   n = '' + n;
//   for (let item of data.payStatusSelect) {
//     if (item.id === n) {
//       return item.name;
//     }
//   }
//   return '无';
// };

export default {
  name: 'ChartAnalysis',
  data() {
    return {
      load: false,
      successRatio: 10.8,
      failureRatio: 20,
      undoneRatio: 50,
      // mercSelectParams: {
      //   account_uid: this.$store.getters.userInfo.account_uid,
      //   audit_status: '1',
      // },
      form: {
        merc_no: '',
        start_time: '',
        end_time: '',
      },
      histogramData: {
        columns: ['状态', '金额', '笔数'],
        rows: [
          { '状态': '审核', '金额': 100, '笔数': 785 },
          { '状态': '待审核', '金额': 800, '笔数': 820 },
          { '状态': '已审核', '金额': 600, '笔数': 544 },
          { '状态': '代支付', '金额': 500, '笔数': 500 },
          { '状态': '已支付', '金额': 200, '笔数': 300 },
          { '状态': '代付', '金额': 300, '笔数': 200 },
          { '状态': '已取消', '金额': 700, '笔数': 600 },
          { '状态': '已审核待支付', '金额': 10, '笔数': 50 },
          { '状态': '已审核已支付', '金额': 100, '笔数': 500 },
          { '状态': '已审核已取消', '金额': 50, '笔数': 100 },
        ],
      },
      hisExtends: {
        xAxis(v) {
          v.forEach((item, index) => {
            if (index === 0) {
              Object.assign(item, {
                axisLabel: {
                  rotate: 30,
                  interval: 0,
                },
              });
            }
          });
          return v;
        },
        // series(v) {
        //   Object.assign(v[0], {
        //     itemStyle: {
        //       normal: {
        //         label: {
        //           show: true,
        //           position: 'top',
        //           textStyle: {
        //             color: 'black',
        //             fontSize: 12,
        //           },
        //         },
        //       },
        //     },
        //   });
        //   Object.assign(v[1], {
        //     itemStyle: {
        //       normal: {
        //         label: {
        //           show: true,
        //           position: 'top',
        //           textStyle: {
        //             color: 'black',
        //             fontSize: 12,
        //           },
        //         },
        //       },
        //     },
        //   });
        //   return v;
        // },
      },
    };
  },
  created() {
    // this.search();
  },
  methods: {
    search() {
      // if (this.load) {
      //   return;
      // }
      // this.load = true;
      // this.$api.statistics_getStatRatio(this.form)
      //   .then((data) => {
      //     this.load = false;
      //     if (data.data) {
      //       data = data.data;
      //       this.successRatio = numeral(data.success_ratio || 0).multiply(100).value();
      //       this.failureRatio = numeral(data.failure_ratio || 0).multiply(100).value();
      //       this.undoneRatio = numeral(data.undone_ratio || 0).multiply(100).value();
      //       let dataList = data.data_list || [];
      //       dataList.forEach((item) => {
      //         item.order_status = parseInt(item.order_status, 10);
      //         item.amount = numeral(item.amount || 0).divide(100).value();
      //       });
      //       let allData = [];
      //       for (let i = 0; i < 14; i++) {
      //         if (i !== 3) {
      //           let dataItem = dataList.find((a) => a.order_status === i);
      //           let amount = dataItem ? dataItem.amount : 0;
      //           let bill_count = dataItem ? dataItem.bill_count : 0;
      //           allData.push({
      //             '金额': amount || 0,
      //             '笔数': bill_count || 0,
      //             '状态': findOrderStatus(i),
      //           });
      //         }
      //       }
      //       console.log(allData);
      //       this.histogramData.rows = allData;
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.load = false;
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  margin: 0 auto;
}
.box-card {
  padding: 5px 12px 0;
}
.radio-title {
  margin-top: 10px;
  text-align: center;
}
</style>
