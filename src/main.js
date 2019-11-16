import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
FastClick.attach(document.body);
Vue.config.productionTip = false;
import "amfe-flexible";
import { Button } from "vant";
Vue.use(Button);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
