<template>
  <el-date-picker
    v-model="dateRange"
    type="daterange"
    :range-separator="$t('至')"
    :start-placeholder="$t('开始日期')"
    :end-placeholder="$t('结束日期')"
    value-format="yyyy-MM-dd"
    size="small"
    :picker-options="pickerOptions"
    clearable
    class="date-range">
  </el-date-picker>
</template>

<script>
const shortcutGenerate = function (n) {
  return function (picker) {
    let start;
    let end;
    if (n === '0') {
      let now = new Date();
      end = now;
      start = now;
    } else if (n === '1') {
      let now = new Date();
      now.setTime(now.getTime() - 24 * 60 * 60 * 1000);
      end = now;
      start = now;
    } else {
      end = new Date();
      start = new Date();
      start.setTime(start.getTime() - (n - 1) * 24 * 60 * 60 * 1000);
    }
    picker.$emit('pick', [start, end]);
  };
};

const dateMap = {
  '0': '今天',
  '1': '昨天',
  '3': '最近三天',
  '7': '最近一周',
  '30': '最近一个月',
  '90': '最近三个月',
};

export default {
  name: 'dateRange',
  props: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: '1,7,30,90',
    },
    disabledDate: Boolean,
  },
  data() {
    let pickerOptions = {};
    let shortcuts = [];
    let type = this.type.split(',');
    type.forEach((key) => {
      if (dateMap.hasOwnProperty(key)) {
        let val = dateMap[key];
        shortcuts.push({
          text: this.$t(val),
          onClick: shortcutGenerate(key),
        });
      }
    });
    if (shortcuts.length) {
      pickerOptions.shortcuts = shortcuts;
    }
    if (this.disabledDate) {
      pickerOptions.disabledDate = function (time) {
        return time.getTime() > Date.now();
      };
    }

    return {
      pickerOptions: pickerOptions,
    };
  },
  computed: {
    dateRange: {
      get: function () {
        if (this.startTime !== '' || this.endTime !== '') {
          return [this.startTime, this.endTime];
        }
        return '';
      },
      set: function (val) {
        if (val instanceof Array) {
          this.$emit('update:startTime', val[0]);
          this.$emit('update:endTime', val[1]);
        } else {
          this.$emit('update:startTime', '');
          this.$emit('update:endTime', '');
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.date-range {
  width: 300px !important;
}
</style>
