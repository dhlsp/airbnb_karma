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
        <el-input autofocus name="account" type="text" v-model.trim="form.account" autoComplete="on" placeholder="账号" />
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
  <!-- <i v-else class="verify-img el-icon-loading"></i> -->
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
        path: '/account-list',
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#1773a9;
$light_gray:#eee;
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px !important;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
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

<style rel="stylesheet/scss" lang="scss" scoped>
// $bg:#fff;
$bg: url(../../assets/imgs/bg.jpg) no-repeat center center;
$dark_gray:#889aa4;
$light_gray:#fff;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: $bg;
  background-size: cover; // 让图片全屏覆盖
  .login-form {
    position: absolute;
    left: 80%;
    top: 50%;
    width: 450px;
    // padding: 35px 35px 15px 35px;
    padding: 10px;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.5);
    // border: 1px solid #eaeaea;
    // box-shadow: 0 0 25px #cac6c6;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle; // 属性设置元素的垂直对齐方式
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 20px auto 20px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
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
}

// .verify-ipt {
//   width: 50%;
//   margin-right: 5%;
//   display:inline-block;
// }

// .verify-img {
//   position: absolute;
//   top: 0;
//   right: 4px;
//   width: 35%;
//   height: 44px;
//   margin: 4px 0;
//   border-radius: 2px;
//   cursor: pointer;
// }
// .verify-img-loading {
//   background-color: #FFFFFF;
//   color: #1ABC9C;
//   line-height: 40px;
//   font-size: 20px;
//   text-align: center;
// }
</style>
