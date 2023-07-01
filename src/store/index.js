import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

var baseIP = "127.0.0.1";
axios.defaults.baseURL = 'http://'+ baseIP + ':8000';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    popupName:'',
    gblConsolePrints:[],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
