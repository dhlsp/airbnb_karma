// 全局安装自定义组件
import Vue from 'vue';
import blueLoading from './blueLoading';
import mPagination from './mPagination';
import testCom from './testCom';
import password from './password';
import noRequestSelect from './noRequestSelect';
import LangSelect from './LangSelect';
import mCheckbox from './mCheckbox';
import noData from './noData';
import scrollRequestSelect from './scrollRequestSelect';
import note from './note'; // 提示

Vue.component(blueLoading.name, blueLoading); // loading加载
Vue.component(password.name, password); // 密码
Vue.component(mPagination.name, mPagination); // 分页
Vue.component(testCom.name, testCom);
Vue.component(noData.name, noData); // 暂无数据
Vue.component(noRequestSelect.name, noRequestSelect); // 没有请求的select
Vue.component(LangSelect.name, LangSelect); // 选择语言
Vue.component(mCheckbox.name, mCheckbox); // 单选按钮
Vue.component(scrollRequestSelect.name, scrollRequestSelect); // 滚动请求select
Vue.component(note.name, note); // 提示
