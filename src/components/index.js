// 全局安装自定义组件
import Vue from 'vue';
import password from './password';

Vue.component(password.name, password); // 密码
