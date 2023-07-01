import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {store} from './store/index';

/* Custom CSS */
import "./assets/css/master_layout.css";
import "./assets/css/responsive.css";

/* Bootstrap Integration */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/* Font Awesome Integration */
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import FontawesomeAll from '../public/FontAwesome/css/all.min.css'
// import FontawesomeCSS from '../public/FontAwesome/css/fontawesome.min.css'

// Vue.use(FontawesomeAll, FontawesomeCSS);

library.add(fas, fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

/* POP-UP */
import Modal from '../node_modules/vue-js-modal/dist/index';
Vue.use(Modal);

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
