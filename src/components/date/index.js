import Date from './date';

Date.install = function (Vue) {
  Vue.component(Date.name, Date);
};

export default Date;
