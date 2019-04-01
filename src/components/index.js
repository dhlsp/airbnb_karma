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
import datetime from './datetime';
import date from './date';
import dateRange from './dateRange';
import imgItem from './imgItem';
import imgUpload from './imgUpload';
import imgUploadItem from './imgUploadItem';
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
Vue.component(datetime.name, datetime); // 日期年月日小时分钟秒
Vue.component(date.name, date); // 日期年月日
Vue.component(dateRange.name, dateRange); // 日期范围选择器
Vue.component(imgItem.name, imgItem); // 图片显示组件
Vue.component(imgUpload.name, imgUpload); // 多图上传组件
Vue.component(imgUploadItem.name, imgUploadItem); // 单张图片上传
Vue.component(note.name, note); // 提示
