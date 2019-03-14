<template>
  <el-row>
    <el-row class="panel-group">
      <!-- <blue-loading v-show="load" w="50px" h="50px"></blue-loading> -->
      <el-row class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="balance" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">{{$t('钱包余额')}}</div>
            <div class="card-panel-num">{{formWatle.balance}} {{$t('元')}}</div>
          </div>
        </div>
      </el-row>
      <el-row class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="freeze" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">{{$t('冻结金额')}}</div>
            <div class="card-panel-num">{{formWatle.frozen_amount}} {{$t('元')}}</div>
          </div>
        </div>
      </el-row>
      <el-row class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-inflows—money">
            <svg-icon icon-class="outflow" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">{{$t('流出金额')}}</div>
            <div class="transaction">
              {{$t('金额')}}:
              {{formWatle.out_amount}} {{$t('元')}}
            </div>
            <div class="transaction">
              {{$t('笔数')}}:
              {{formWatle.out_num}} {{$t('笔')}}
            </div>
          </div>
        </div>
      </el-row>
      <el-row class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <svg-icon icon-class="inflow" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">{{$t('流入金额')}}</div>
            <div class="transaction">
              {{$t('金额')}}:
              {{formWatle.enter_amount}} {{$t('元')}}
            </div>
            <div class="transaction">
              {{$t('笔数')}}:
              {{formWatle.enter_num}} {{$t('笔')}}
            </div>
          </div>
        </div>
      </el-row>
      <el-row class="card-panel-col">
        <div class='card-panel'>
          <div class="card-panel-icon-wrapper icon-unpaid-money">
            <svg-icon icon-class="receivable" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">{{$t('应收金额')}}</div>
            <div class="card-panel-num">{{formWatle.owed_amount}} {{$t('元')}}</div>
          </div>
        </div>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'MessageMoney',
  data() {
    return {
      formWatle: {
        balance: '100',
        enter_amount: '100',
        enter_num: '10',
        out_amount: '10',
        out_num: '10',
        frozen_amount: '10',
        owed_amount: '10',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  text-align: center;
  display: flex;
  justify-content: space-around;
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
      .icon-money {
        background: #36daf7;
      }
      .icon-unpaid-money {
        background: #31f500;
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
    .icon-money {
      color: #36daf7;
    }
    .icon-unpaid-money {
      color: #31f500;
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
        font-size: 17px;
      }
    }
  }
}
</style>
