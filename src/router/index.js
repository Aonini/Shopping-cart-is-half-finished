import Vue from 'vue'
import Router from 'vue-router'

import Shouye from '@/structure/firstPage/shouye'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/shouye'
    },
    {
        path: '/shouye',
        name: 'shouye',
        component: Shouye
      }
  ]
})