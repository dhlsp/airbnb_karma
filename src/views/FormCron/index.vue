<template>
  <div class="cron">
    <h1>vue-cron(定时策略)</h1>
    <el-popover v-model="cronPopover">
      <cron @change="changeCron" @close="cronPopover=false"></cron>
      <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
    </el-popover>
    <div class="text-center" style="padding-top: 10px;">
      <el-button :loading="loading" size="medium" type="primary" @click="submit">确定</el-button>
    </div>
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
      loading: false,
    };
  },
  methods: {
    changeCron(val) {
      this.cron = val;
    },
    submit() {
      if (this.cron === '') {
        this.$message.error('选择定时策略');
        return;
      }
      this.loading = true;
      console.log('this.cron', this.cron);
      this.loading = false;
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
