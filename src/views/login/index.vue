<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="form" :rules="rules" ref="form" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="username">
            <!-- <el-button slot="prepend" icon="el-icon-lx-lock"></el-button> -->
            <svg-icon slot="prepend" icon-class="user"/>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="password" v-model="form.password" @keyup.enter.native="submit('form')">
            <!-- <el-button slot="prepend" icon="el-icon-lx-lock"></el-button> -->
            <svg-icon slot="prepend" icon-class="password"/>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submit('form')">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div>
    <!-- <div class="login-container">
      <el-form :model="form" :rules="rules" ref="form" label-width="0px" class="login-form" label-position="left">
        <div class="ms-title">后台管理系统</div>
        <el-form-item prop="username">
          <span class="svg-container svg-container_login">
            <svg-icon icon-class="user"/>
          </span>
          <el-input autofocus name="username" type="text" v-model.trim="form.username" autoComplete="on" :placeholder="$t('账号')" />
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password"/>
          </span>
          <el-input name="password" :type="passwordType" v-model.trim="form.password" autoComplete="on" :placeholder="$t('密码')" />
          <span class="show-pwd" @click="showPwd">
            <svg-icon v-if="passwordType === 'password'" icon-class="noseeeye"/>
            <svg-icon v-else icon-class="seeeye"/>
          </span>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submit('form')">登录</el-button>
        </div>
        <p class="login-tips">Tips : 用户名和密码随便填。</p>
      </el-form>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      passwordType: 'password',
      formRules: {},
      loading: false,
      disableLogin: false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('ms_username', this.form.username);
          this.$router.push('/home-page');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
};
</script>

<style scoped>
.login-wrap{
  position: relative;
  width:100%;
  height:100%;
  background-image: url(../../assets/imgs/bg.jpg);
  background-size: 100%;
}
.ms-title{
  width:100%;
  line-height: 50px;
  text-align: center;
  font-size:20px;
  color: rgb(248, 3, 3);
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}
.ms-login{
  position: absolute;
  left:50%;
  top:50%;
  width:450px;
  margin:-190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255,255,255, 0.3);
  overflow: hidden;
}
.ms-content{
  padding: 30px 30px;
}
.login-btn{
  text-align: center;
}
.login-btn button{
  width:100%;
  height:36px;
  margin-bottom: 10px;
}
.login-tips{
  font-size:12px;
  line-height:30px;
  color:#000;
}
</style>

<style rel="stylesheet/scss" lang="scss">
$bg:rgb(0, 0, 0);
$dark_gray:#000;
$light_gray:#fff;
/* reset element-ui css */
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
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
    color: #dfdfdf;
  }
  .el-form-item__content {
    height: auto !important;
  }
  div.el-form-item {
    margin-bottom: 17px !important;
  }
  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 450px;
    padding: 35px 35px 15px 35px;
    transform: translate(-50%, -50%);
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
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
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
