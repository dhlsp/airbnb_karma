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
export default {
  name: 'dateWeek',
  props: {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '昨天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近三天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 3);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
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
