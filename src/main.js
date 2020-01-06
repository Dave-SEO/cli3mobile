import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/border.css";
import "@/assets/css/rest.css";
import FastClick from "fastclick";
FastClick.attach(document.body);
Vue.config.productionTip = false;
import "amfe-flexible";
import {
  Button,
  Icon,
  NavBar,
  Search,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Image,
  Lazyload,
  Cell,
  CellGroup,
  Tag,
  Popup
} from "vant";
Vue.use(Button)
  .use(Icon)
  .use(NavBar)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(Image)
  .use(Lazyload)
  .use(Cell)
  .use(CellGroup)
  .use(Tag)
  .use(Popup);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
