import Vue from "vue";

import App from "./App";

import store from './store';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 注入store，所有组件实例对象就可以使用
  store
}).$mount("#app");


