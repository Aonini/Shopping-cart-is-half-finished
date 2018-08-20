// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'

import '@/assets/css/account.css';
import '@/assets/css/address-pop.css';
import '@/assets/css/address.css';

import '@/assets/css/checkout.css';
import '@/assets/css/goodsList.css';

import '@/assets/css/cart.css';


import '@/assets/css/header.css';
import '@/assets/css/item.css';
import '@/assets/css/order.css';
import '@/assets/css/payment.css';
import '@/assets/css/prompt.css';
import '@/assets/css/reset.css';


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
