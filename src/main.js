import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* Custom CSS */
import "./assets/css/master_layout.css";

/* Icons */
import 'boxicons';

/* Bootstrap Integration */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
