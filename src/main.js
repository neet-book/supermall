import Vue from 'vue'
import App from './App.vue'

import router from "./router";
import store from "./store";

import toast from "components/common/toast";

import FastClick from "fastclick";

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(toast);
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
