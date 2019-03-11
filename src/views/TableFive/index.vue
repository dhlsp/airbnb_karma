<template>
  <div>
    <el-row style="min-height: 300px;">
      <ve-ring v-show="mercPoolData.rows.length > 0" :title="poolTitle" :legend="pieLegend" :data="mercPoolData" :settings="mercPoolSettings" width="800px" height="400px" class="echarts"></ve-ring>
    </el-row>
    <el-row>
      <el-col>
        账户总余额（元）：0
      </el-col>
    </el-row>
    <el-row>
      <table style="margin: 0 0 10px 0;">
        <tr>
          <td class="table-header"></td>
          <td class="table-header">{{$t('账户号')}}</td>
          <td class="table-header">{{$t('状态')}}</td>
          <td class="table-header">{{$t('可用余额（元）')}}</td>
          <td class="table-operate">{{$t('操作')}}</td>
        </tr>
        <tr>
          <td class="table-num">基本支付账户</td>
          <td class="table-header">{{form.modulars[0].cost}}</td>
          <td class="table-header">{{form.modulars[0].unit}}{{$t('元')}}</td>
          <td class="table-header">{{form.modulars[0].metering}}{{$t('元')}}</td>
          <td class="table-operate">
            <el-button size="small" type="text" @click="rechargeOne(0)">{{$t('充值')}}</el-button>
            <el-button size="small" type="text" @click="cashOne(0)">{{$t('取现')}}</el-button>
            <el-button size="small" type="text" @click="transferOne(0)">{{$t('转账')}}</el-button>
          </td>
        </tr>
        <tr>
          <td class="table-num">冻结过渡账户</td>
          <td class="table-header">{{form.modulars[1].cost}}</td>
          <td class="table-header">{{form.modulars[1].unit}}{{$t('元')}}</td>
          <td class="table-header">{{form.modulars[1].metering}}{{$t('元')}}</td>
          <td class="table-operate">
            <el-button size="small" type="text">{{$t('不可操作')}}</el-button>
          </td>
        </tr>
        <tr>
          <td class="table-num">手续费专户</td>
          <td class="table-header">{{form.modulars[2].cost}}</td>
          <td class="table-header">{{form.modulars[2].unit}}{{$t('元')}}</td>
          <td class="table-header">{{form.modulars[2].metering}}{{$t('元')}}</td>
          <td class="table-operate">
            <el-button size="small" type="text" @click="rechargeTwo(2)">{{$t('充值')}}</el-button>
            <el-button size="small" type="text" @click="cashTwo(2)">{{$t('取现')}}</el-button>
            <el-button size="small" type="text" @click="transferTwo(2)">{{$t('转账')}}</el-button>
          </td>
        </tr>
      </table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TableFive',
  data() {
    return {
      form: {
        modulars: [
          {
            cost: '1231',
            unit: '820',
            metering: '98',
          }, {
            cost: '8745',
            unit: '542',
            metering: '78',
          }, {
            cost: '4804',
            unit: '254',
            metering: '55',
          },
        ],
      },
      // 图例位置设置
      pieLegend: {
        // type: 'scroll',
        orient: 'vertical',
        top: 25,
        right: 0,
        bottom: 20,
        textStyle: {
          fontSize: 20,
        },
        // formatter: '{name} {}',
        formatter(params) {
          console.log(params);
          console.log(params.name);
          return params.name + ' ' + params.percent + '%';
        },
      },
      mercPoolData: {
        columns: ['商品', '交易数量'],
        rows: [
          { '商品': '短袖', '交易数量': '1141' },
          { '商品': '休闲裤', '交易数量': '1499' },
        ],
      },
      poolTitle: {
        text: '商品',
        x: 'center',
      },
      mercPoolSettings: {
        // radius: 100,
        left: 0,
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            // position: 'center',
            // formatter: '{b} : {c} ({d}%)',
            // formatter(params) {
            //   return params.name + ' ' + params.percent + '%';
            // },
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
        },
      },
    };
  },
  methods: {
    rechargeOne() {
      console.log('rechargeOne：this.form.modulars[0]', this.form.modulars[0]);
    },
    cashOne() {
      console.log('cashOne：this.form.modulars[0]', this.form.modulars[0]);
    },
    transferOne() {
      console.log('transferOne：this.form.modulars[0]', this.form.modulars[0]);
    },
    rechargeTwo() {
      console.log('rechargeTwo:this.form.modulars[2]', this.form.modulars[2]);
    },
    cashTwo() {
      console.log('cashTwo:this.form.modulars[2]', this.form.modulars[2]);
    },
    transferTwo() {
      console.log('transferTwo:this.form.modulars[2]', this.form.modulars[2]);
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  margin: 0 auto;
}
table {
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
  font-size: 14px;
}
td {
  border: 1px solid #ccc;
  padding: 6px 10px;
}
.table-num,
.table-header,
.table-operate {
  text-align: center;
}
.table-num {
  width: 10%;
}
.table-header {
  vertical-align: top;
  width: 20%;
}
.table-operate {
  width: 20%;
}
</style>
