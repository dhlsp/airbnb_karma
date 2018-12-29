<template>
  <div>
    <el-form :inline="true" :model="formData" @submit.native.prevent>
      <el-form-item label="">
        <date-week :startTime.sync="formData.start_time" :endTime.sync="formData.end_time"></date-week>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" icon="el-icon-search" size="small" @click="search">{{$t('查询')}}</el-button>
      </el-form-item>
    </el-form>
    <tabs v-model="formData.audit_status" type="paySelect" @search="search"></tabs>
    <el-table v-loading="loadTableData" :data="tableData" border show-summary>
      <el-table-column prop="name" :label="$t('门店名')" min-width="300" header-align="center" align="center" ></el-table-column>
      <el-table-column prop="" :label="$t(audit_status_text)" min-width="600" header-align="center" align="center">
        <el-table-column prop="amount" :label="$t('笔数')" min-width="300" header-align="center" align="center" :key="Math.random()" v-if="formData.audit_status == ''"></el-table-column>
        <el-table-column prop="amount10" :label="$t('收款')" min-width="300" header-align="center" align="center" :key="Math.random()">
          <el-table-column prop="amount1" :label="$t('笔数')" min-width="100" header-align="center" align="center" v-if="formData.audit_status !== ''"></el-table-column>
          <el-table-column prop="amount2" :label="$t('交易金额')" min-width="100" header-align="center" align="center" v-if="formData.audit_status !== ''"></el-table-column>
          <el-table-column prop="amount3" :label="$t('实收金额')" min-width="100" header-align="center" align="center" v-if="formData.audit_status !== ''"></el-table-column>
        </el-table-column>
        <el-table-column prop="amount5" :label="$t('退款')" min-width="300" header-align="center" align="center" :key="Math.random()">
          <el-table-column prop="amount1" :label="$t('笔数')" min-width="100" header-align="center" align="center" v-if="formData.audit_status !== ''"></el-table-column>
          <el-table-column prop="amount2" :label="$t('交易金额')" min-width="100" header-align="center" align="center" v-if="formData.audit_status !== ''"></el-table-column>
          <el-table-column prop="amount3" :label="$t('实退金额')" min-width="100" header-align="center" align="center" v-if="formData.audit_status !== ''"></el-table-column>
        </el-table-column>
        <el-table-column prop="" :label="$t('小计')" min-width="300" header-align="center" align="center" v-if="formData.audit_status !== ''">
          <el-table-column prop="amount2" :label="$t('笔数')" min-width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="amount1" :label="$t('交易金额')" min-width="100" header-align="center" align="center"></el-table-column>
          <el-table-column prop="amount3" :label="$t('实收金额')" min-width="100" header-align="center" align="center"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
    <!-- <m-pagination ref="page" :total="total" @handleFn="handleFn"></m-pagination> -->
  </div>
</template>

<script>
import dateWeek from './components/dateWeek';

export default {
  name: 'DaySettlement',
  data() {
    return {
      loadTableData: false,
      tableData: [{
        amount: 88,
        amount5: 99,
        amount10: 100,
        name: '10',
        amount1: 10,
        amount2: 10,
        amount3: 5,
      }, {
        amount: 188,
        amount5: 199,
        amount10: 1000,
        name: '张飞',
        amount1: 50,
        amount2: 20,
        amount3: 5,
      }, {
        amount: 100,
        amount5: 200,
        amount10: 300,
        name: '赵云',
        amount1: 30,
        amount2: 40,
        amount3: 5,
      }],
      // tableData: [],
      formData: {
        page: 1,
        page_size: 10,
        start_time: '',
        end_time: '',
        audit_status: '',
      },
      total: 0,
      audit_status_text: '全部',
    };
  },
  watch: {
    'formData.audit_status': {
      handler(val) {
        let txt = {
          '': '全部',
          '1': '微信',
          '2': '支付宝',
          '3': '银联支付',
        };
        this.audit_status_text = txt[val];
      },
      deep: true,
    },
  },
  created() {
    this.getTableData();
    console.log(this.formData.audit_status);
  },
  methods: {
    search() {
      // this.$refs.page.setData(1);
    },
    getTableData() {
      this.loadTableData = true;
      this.loadTableData = false;
      // console.log(this.formData.audit_status);
      // this.$api(this.formData,true)
      //   .then((data) => {
      //     this.loadTableData = false;
      //     this.tableData = data.data || [];
      //     this.total = data.total;
      //   })
      //   .catch(() => {
      //     this.tableData = [];
      //     this.loadTableData = false;
      //   });
    },
    // handleFn(obj) {
    //   Object.assign(this.formData, obj);
    //   this.getTableData();
    // },
  },
  components: {
    dateWeek,
  },
};
</script>
