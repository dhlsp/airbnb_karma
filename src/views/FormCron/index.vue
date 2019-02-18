<template>
  <div class="cron">
    <h1>vue-cron(定时策略)</h1>
    <el-popover v-model="cronPopover">
      <cron @change="changeCron" @close="cronPopover=false"></cron>
      <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
    </el-popover>
  </div>
</template>

<script>
import { cron } from 'vue-cron';

export default {
  name: 'FormCron',
  data() {
    return {
      cronPopover: false,
      cron: '',
    };
  },
  methods: {
    changeCron(val) {
      this.cron = val;
    },
  },
  components: {
    cron,
  },
};
</script>

<style lang="scss" scoped>
.cron{
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  h1 {
    font-size: 30px;
    text-align: center;
  }
}
</style>
