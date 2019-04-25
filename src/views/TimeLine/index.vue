<template>
  <div>
    <!-- <blue-loading v-show="loading" w="50px" h="50px"></blue-loading> -->
    <el-row class="panel-group">
      <el-row class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="receipt" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">今日交易总额(元)</div>
            <div class="card-panel-num">
              ￥ {{form.amount}}
            </div>
          </div>
        </div>
      </el-row>
      <el-row class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-freeze-people">
            <svg-icon icon-class="refund" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">今日交易总额(笔)</div>
            <div class="card-panel-num">
              {{form.bill_count}}
            </div>
          </div>
        </div>
      </el-row>
      <el-row class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="numberofTransactions" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">今日手续费(元)</div>
            <div class="card-panel-num">
              ￥ {{form.fee}}
            </div>
          </div>
        </div>
      </el-row>
    </el-row>

    <div class="products" style="border-color: #00CC0C;">
      <div class="product-img">
        <img src="../../assets/imgs/wx.png" alt="微信" width="80" height="80">
      </div>
      <div class="product-total">
        <label>交易总额(元): </label>
        ￥ {{weChatform.amount}}
      </div>
      <div class="product-bill">
        <label>交易笔数(笔): </label>
        {{weChatform.bill_count}}
      </div>
      <div class="product-fee">
        <label>手续费(元): </label>
        ￥ {{weChatform.fee}}
      </div>
    </div>
    <div class="products" style="border-color: #1296DB;">
      <div class="product-img">
        <img src="../../assets/imgs/zfb.png" alt="支付宝" width="80" height="80">
      </div>
      <div class="product-total">
        <label>交易总额(元): </label>
        ￥ {{payform.amount}}
      </div>
      <div class="product-bill">
        <label>交易笔数(笔): </label>
        {{payform.bill_count}}
      </div>
      <div class="product-fee">
        <label>手续费(元): </label>
        ￥ {{payform.fee}}
      </div>
    </div>

    <!-- <div v-for="(item, index) in form.data_list" :key="index" class="products" :style="{
      'border-color': item.product_type === 1 ? '#00CC0C' : '#1296DB',
    }">
      <div class="product-img">
        <img v-if="item.product_type === 1" src="../../assets/imgs/wx.png" alt="微信" width="80" height="80">
        <img v-else-if="item.product_type === 2" src="../../assets/imgs/zfb.png" alt="支付宝" width="80" height="80">
      </div>
      <div class="product-total">
        <label>交易总额(元): </label>
        ￥ {{item.amount}}
      </div>
      <div class="product-bill">
        <label>交易笔数(笔): </label>
        {{item.bill_count}}
      </div>
      <div class="product-fee">
        <label>手续费(元): </label>
        ￥ {{item.fee}}
      </div>
    </div> -->
  </div>
</template>

<script>
// import numeral from 'numeral';

export default {
  name: 'MyHome',
  data() {
    return {
      loading: false,
      form: {
        amount: '0.00',
        bill_count: '0',
        fee: '0.00',
        // data_list: [
        //   {
        //     product_type: 1,
        //     amount: '0.00',
        //     bill_count: '0',
        //     fee: '0.00',
        //   },
        //   {
        //     product_type: 2,
        //     amount: '0.00',
        //     bill_count: '0',
        //     fee: '0.00',
        //   },
        // ],
      },
      weChatform: {
        amount: '0.00',
        bill_count: '0',
        fee: '0.00',
      },
      payform: {
        amount: '0.00',
        bill_count: '0',
        fee: '0.00',
      },
    };
  },
  created() {
    // this.getAllData();
    // this.getWeChatData();
    // this.getPayData();
  },
  methods: {
    getAllData() {
      // this.loading = true;
      // let params = {
      //   pay_type: '0',
      // };
      // this.$api.stat_queryMercBill(params)
      //   .then((data) => {
      //     this.loading = false;
      //     data = data.data;
      //     if (data) {
      //       this.form.amount = numeral(data.amount || 0).format('0,0.00');
      //       this.form.bill_count = numeral(data.bill_count || 0).format('0,0');
      //       this.form.fee = numeral(data.fee || 0).format('0,0.00');
      //       // let dataList = data.data_list || [];
      //       // dataList.forEach((item) => {
      //       //   if (item.product_type) {
      //       //     let oldItem = this.form.data_list[item.product_type - 1];
      //       //     if (oldItem) {
      //       //       oldItem.product_type = parseInt(item.product_type, 10);
      //       //       oldItem.amount = numeral(item.amount || 0).format('0,0.00');
      //       //       oldItem.bill_count = numeral(item.bill_count || 0).format('0,0');
      //       //       oldItem.fee = numeral(item.fee || 0).format('0,0.00');
      //       //     }
      //       //   }
      //       // });
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.loading = false;
      //     this.$message.error((this.err.msg));
      //   });
    },

    getWeChatData() {
      // let params = {
      //   pay_type: '1',
      // };
      // this.$api.stat_queryMercBill(params)
      //   .then((data) => {
      //     data = data.data;
      //     if (data) {
      //       this.weChatform.amount = numeral(data.amount || 0).format('0,0.00');
      //       this.weChatform.bill_count = numeral(data.bill_count || 0).format('0,0');
      //       this.weChatform.fee = numeral(data.fee || 0).format('0,0.00');
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.$message.error((this.err.msg));
      //   });
    },

    getPayData() {
      // let params = {
      //   pay_type: '2',
      // };
      // this.$api.stat_queryMercBill(params)
      //   .then((data) => {
      //     data = data.data;
      //     if (data) {
      //       this.payform.amount = numeral(data.amount || 0).format('0,0.00');
      //       this.payform.bill_count = numeral(data.bill_count || 0).format('0,0');
      //       this.payform.fee = numeral(data.fee || 0).format('0,0.00');
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     this.$message.error((this.err.msg));
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  .card-panel-col {
    display: inline-block;
    width: 300px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.5);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-freeze-people{
        background: #ff0062;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-inflows—money {
        background: #f4516c;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-freeze-people{
      color: #089afc;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-inflows—money {
      color: #f4516c;
    }
    .card-panel-icon-wrapper {
      margin: 14px 0 14px 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      flex: 1;
      text-align: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 18px;
      }
    }
  }
}
.products {
  display: table;
  table-layout: fixed;
  width: 1000px;
  height: 100px;
  margin: 50px auto 0 auto;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  & > div {
    display: table-cell;
    vertical-align: middle;
    width: 25%;
  }
  .product-img{
    text-align: center;
  }
  .product-total,
  .product-bill,
  .product-fee {
    text-align: left;
  }
}
</style>
