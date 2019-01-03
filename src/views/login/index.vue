<template>
  <div class="login-container">
    <el-form class="login-form" ref="form" label-position="left">
      <div style="font-size: 0px; text-align: center;">
        <img src="../../assets/imgs/login_test.png" alt="logo" width="250" height="80">
      </div>
      <div class="title-container">
        <h3 class="title">风信子网站</h3>
      </div>
      <el-form-item prop="account">
        <span class="svg-container svg-container_login">
          <svg-icon icon-class="user"/>
        </span>
        <el-input autofocus name="account" type="text" v-model.trim="form.account" autoComplete="on" placeholder="账号" clearable/>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input name="password" :type="passwordType" v-model.trim="form.password" autoComplete="on" placeholder="密码" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon v-if="passwordType === 'password'" icon-class="noseeeye"/>
          <svg-icon v-else icon-class="seeeye"/>
        </span>
      </el-form-item>
      <el-button :disabled="disableLogin" type="primary" class="login-btn" :loading="loading" @click="submit">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        account: '',
        password: '',
      },
      passwordType: 'password',
      formRules: {},
      loading: false,
      disableLogin: false,
    };
  },
  methods: {
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    submit() {
      this.$router.push({
        path: '/test',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url(../../assets/imgs/bg.jpg) no-repeat center;
  background-size: cover;
  .login-form {
    position: absolute;
    left: 80%;
    top: 50%;
    width: 450px;
    padding: 10px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.5);
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #fff;
      margin: 20px auto 20px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .svg-container {
    padding: 6px 6px 6px 15px;
    color: #fff;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #fff;
    cursor: pointer; // 属性规定要显示的光标的类型（形状）
    user-select: none; // 控制着用户能否选中文本
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
  .login-btn {
    width: 100%;
    margin-bottom: 30px;
  }
  .el-input {
    display: inline-flex;
    height: 47px !important;
    width: 80%;
    background: #69665800;
    // background-color: #eee;
    // input {
    //   background: transparent;
    //   border: 0px;
    //   -webkit-appearance: none;
    //   border-radius: 0px; // 向 div 元素添加圆角边框
    //   padding: 12px 5px 12px 15px;
    //   color: #eee;
    //   height: 47px;
    // }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-form-item__content {
    height: auto !important;
  }
  div.el-form-item {
    margin-bottom: 17px !important;
  }
}
</style>

<style lang="scss">
.login-container {
  .el-input {
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px; // 向 div 元素添加圆角边框
      padding: 12px 5px 12px 15px;
      color: #eee;
      height: 47px;
    }
  }
}
</style>
