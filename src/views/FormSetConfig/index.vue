<template>
  <el-row>
    <el-row>
      <el-date-picker size="small" v-model="date" type="month" :placeholder="$t('选择月')" ></el-date-picker>
      <el-button size="small" type="primary" @click="allSelect" :disabled="load">{{$t('全选')}}</el-button>
      <el-button size="small" type="primary" @click="allNoSelect" :disabled="load">{{$t('全不选')}}</el-button>
      <el-button size="small" type="primary" @click="inverseSelect" :disabled="load">{{$t('反选')}}</el-button>
    </el-row>
    <el-row style="overflow: hidden; margin: 10px 0; text-align: center">
      <el-button size="small" type="primary" @click="toPrev" style="float: left;" :disabled="load">{{$t('上一个月')}}</el-button>
      <span>{{year}}-{{month}}</span>
      <el-button size="small" type="primary" @click="toNext" style="float: right;" :disabled="load">{{$t('下一个月')}}</el-button>
    </el-row>
    <el-row style="position: relative;">
      <!-- <blue-loading v-show="load" w="50px" h="50px"></blue-loading> -->
      <table id="calendar">
        <tr>
          <th>{{$t('星期一')}}</th>
          <th>{{$t('星期二')}}</th>
          <th>{{$t('星期三')}}</th>
          <th>{{$t('星期四')}}</th>
          <th>{{$t('星期五')}}</th>
          <th>{{$t('星期六')}}</th>
          <th>{{$t('星期日')}}</th>
        </tr>
        <tr v-for="(calendarItem, index) in calendarData" :key="index">
          <td v-for="(item, i) in calendarItem" :key="i">
            <m-checkbox v-if="item.isCurrMonth" v-model="item.isSelect" :id="item.txt">{{item.txt}}</m-checkbox>
          </td>
        </tr>
      </table>
    </el-row>
    <el-row class="text-center" style="margin-top: 10px;">
      <el-button size="small" type="primary" :loading="loading" @click="submit">{{$t('提交')}}</el-button>
    </el-row>
  </el-row>
</template>

<script>
import util from '@js/util';

export default {
  name: 'FormSetConfig',
  data() {
    return {
      load: false,
      date: new Date(),
      year: '',
      month: '', // +1
      calendarData: [],
      selectedData: [],
      loading: false,
    };
  },
  watch: {
    date: {
      handler(val) {
        if (val) {
          this.year = val.getFullYear();
          this.month = val.getMonth() + 1;
          this.setCalendar();
          // this.getData();
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    allSelect() {
      this.calendarData.forEach((item) => {
        if (util.isArray(item)) {
          item.forEach((subItem) => {
            subItem.isSelect = true;
          });
        }
      });
    },
    allNoSelect() {
      this.calendarData.forEach((item) => {
        if (util.isArray(item)) {
          item.forEach((subItem) => {
            subItem.isSelect = false;
          });
        }
      });
    },
    inverseSelect() {
      this.calendarData.forEach((item) => {
        if (util.isArray(item)) {
          item.forEach((subItem) => {
            subItem.isSelect = !subItem.isSelect;
          });
        }
      });
    },
    getDaysInMonth() {
      return new Date(this.year, this.month, 0).getDate();
    },
    setCalendar() {
      let daysInMonth = this.getDaysInMonth(this.year, this.month);
      let firstDay = new Date(`${this.year}-${this.month}-01`).getDay();
      let ret = [];
      let retItem = [];
      // 1代表星期一
      if (firstDay !== 1) {
        for (let i = 1; i < firstDay; i++) {
          retItem.push({
            txt: ' ',
            isSelect: false,
            isCurrMonth: false,
          });
        }
      }
      let date = 1;
      for (let j = firstDay, end = firstDay + daysInMonth; j < end; j++) {
        retItem.push({
          txt: date++,
          isSelect: false,
          isCurrMonth: true,
          settle_date_conf_uid: '',
        });
        if (retItem.length === 7) {
          ret.push(retItem);
          retItem = [];
        }
      }
      if (retItem.length !== 0) {
        let diff = 7 - retItem.length;
        for (let k = 0; k < diff; k++) {
          retItem.push({
            txt: ' ',
            isSelect: false,
            isCurrMonth: false,
          });
        }
        ret.push(retItem);
        retItem = [];
      }
      this.calendarData = ret;
    },
    toPrev() {
      let date = new Date(this.date.getTime());
      date.setDate(1);
      date.setMonth(date.getMonth() - 1);
      this.date = date;
    },
    toNext() {
      let date = new Date(this.date.getTime());
      date.setDate(1);
      date.setMonth(date.getMonth() + 1);
      this.date = date;
    },
    submit() {
      let prefixDate = `${this.year}-${this.month}-`;
      let params = {
        data_list: this.calendarData.reduce((prev, curr) => prev.concat(curr), []).filter((item) => item.isCurrMonth).map((item) => {
          return {
            settle_date_conf_uid: item.settle_date_conf_uid,
            date: prefixDate + item.txt,
            use_status: item.isSelect ? '1' : '0',
          };
        }),
      };
      console.log(params);
    },
    getData() {
      // let params = {
      //   date: `${this.year}-${this.month}`,
      // };
      // this.load = true;
      // this.$api.settleDate_getSettleDate(params, true)
      //   .then((data) => {
      //     data = data.data;
      //     this.load = false;
      //     if (data === null) {
      //       return;
      //     }
      //     let flattenData = this.calendarData.reduce((prev, curr) => prev.concat(curr), []);
      //     let startIndex = flattenData.findIndex((item) => item.isCurrMonth);
      //     let i = startIndex;
      //     let j = 0;
      //     let item = flattenData[i];
      //     while (item.isCurrMonth) {
      //       item.isSelect = data[j].use_status === '1';
      //       item.settle_date_conf_uid = data[j].settle_date_conf_uid;
      //       j++;
      //       i++;
      //       item = flattenData[i];
      //     }
      //     this.calendarData = null;
      //     this.calendarData = [[]];
      //     flattenData.reduce((prev, curr) => {
      //       if (prev[prev.length - 1].length === 7) {
      //         prev.push([]);
      //       }
      //       prev[prev.length - 1].push(curr);
      //       return prev;
      //     }, this.calendarData);
      //   }).catch((error) => {
      //     this.load = false;
      //     console.log('结算配置 error: ', error);
      //   });
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#calendar td, #calendar th {
  border: 1px solid #ddd;
  padding: 8px;
}

#calendar td:hover {
  background-color: #ddd;
}

#calendar th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #f2f2f2;
  color: #000000;
}
</style>
