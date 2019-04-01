<template>
  <el-date-picker v-model="time" type="date" :placeholder="$t(tip)" size="small" format="yyyy-MM-dd" value-format="yyyy-MM-dd" @change="getDate" class="date"></el-date-picker>
</template>

<script>
import util from '@js/util';

export default {
  name: 'date',
  props: {
    value: {
      required: true,
    },
    tip: {
      type: String,
      default: '请选择日期时间',
    },
  },
  data() {
    return {
      time: '',
    };
  },
  watch: {
    value(val) {
      let _val = this.formatDate(val);
      if (_val !== this.time) {
        this.time = _val;
        this.$emit('input', this.time);
      }
    },
  },
  created() {
    this.time = this.formatDate(this.value);
  },
  methods: {
    formatDate(date) {
      if (util.isString(date) && /^(\d{4})(\d{2})(\d{2})$/.test(date)) { // 修正来自移动端的'20220229'的数据
        date = `${RegExp.$1}-${RegExp.$2}-${RegExp.$3}`;
      }
      if (date) {
        date = date.replace(/ \+.+/, '');
        return util.formatDate(date, 'yyyy-MM-dd');
      }
      return '';
    },
    getDate(val) {
      this.time = val;
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
.date {
  width: 100%;
}
</style>
