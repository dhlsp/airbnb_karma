// 全局安装自定义组件
import Vue from 'vue';
import mPagination from './mPagination';
import testCom from './testCom';
import password from './password';
import noRequestSelect from './noRequestSelect';
import LangSelect from './LangSelect';

Vue.component(password.name, password); // 密码
Vue.component(mPagination.name, mPagination); // 分页
Vue.component(testCom.name, testCom);
Vue.component(noRequestSelect.name, noRequestSelect); // 没有请求的select
Vue.component(LangSelect.name, LangSelect); // 选择语言
