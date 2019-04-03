<template>
  <el-date-picker v-model="time" type="datetime" :placeholder="$t('请选择日期时间')" size="small" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss" @change="getDate" class="date"></el-date-picker>
</template>

<script>
import util from '@js/util';

export default {
  name: 'datetime',
  props: {
    value: {
      required: true,
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
    if (this.value !== '') {
      this.time = this.formatDate(this.value);
    }
  },
  methods: {
    formatDate(date) {
      date = date.replace(/ \+.+/, '');
      return util.formatDate(date, 'yyyy-MM-dd HH:mm:ss');
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

//<date :value="obj.date"></date>
