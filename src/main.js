// 入口文件
import Vue from '../node_modules/vue/dist/vue.js';
import Vuex from 'vuex'

import router from './router.js';

import App from './App.vue'
Vue.use(Vuex);
// 
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add(state) {
      state.count += 10;
    }
  },
  getters: {
    opt: function (state) {
      return state.count + 1000;
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    msg: 'hah'
  },
  methods: {},
  created() {
    console.log(this);
  },
  router,
  store,

  render: c => c(App)

})
