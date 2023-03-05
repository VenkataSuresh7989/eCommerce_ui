import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from 'axios';
axios.defaults.baseURL = "http://127.0.0.1:8000";

export default new Vuex.Store({
  state: {
    baseURL : "http://127.0.0.1:8000",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
