import Vue from '../node_modules/vue/dist/vue.js';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import header from './component/header.vue';

export default new VueRouter({
  routes: [
    {
      path: '/login', 
      component: header
    }
  ]
})