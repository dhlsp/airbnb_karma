import password from './password';

password.install = function (Vue) {
  Vue.component(password.name, password);
};

export default password;
