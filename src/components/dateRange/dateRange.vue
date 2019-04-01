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
  },
  computed: {
    pickerOptions() {
      return {
        shortcuts: [
          {
            text: this.$t('昨天'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: this.$t('最近一周'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: this.$t('最近一个月'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: this.$t('最近三个月'),
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      };
    },
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
        if (this.$listeners.change && val !== null) {
          this.$emit('change');
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
