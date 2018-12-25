<template>
  <el-row>
    <el-input :type="passwordType" v-model.trim="password" autoComplete="off" size="small"></el-input>
    <span class="pwd-icon" @click="changePwdIcon">
      <svg-icon v-if="passwordType === 'password'" icon-class="noseeeye"/>
      <svg-icon v-else icon-class="seeeye"/>
    </span>
  </el-row>
</template>

<script>
export default {
  name: 'password',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      passwordType: 'password',
      password: '',
    };
  },
  watch: {
    password: {
      handler(val) {
        this.$emit('input', val);
      },
      immediate: true,
    },
  },
  methods: {
    changePwdIcon() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style lang="scss" scoped>
.pwd-icon {
  position: absolute;
  top: 1px;
  right: 10px;
  color: #000000;
  cursor: pointer;
}
</style>
