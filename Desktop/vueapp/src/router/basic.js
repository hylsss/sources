// import Vue from 'vue'
// import Router from 'vue-router'

import HomePage from 'componentspath/pages/homepage'
import Header from 'componentspath/modules/header'
import Login from 'componentspath/pages/login'
// Vue.use(Router)

export default new VueRouter({
  base: "",
  linkExactActiveClass: "on",
  beforeEnter: function() {

  },
  routes: [
    {
      path: '/',
      name: 'login',
      meta: { auth: true },
      components: {
        default: Login
      }
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      meta: { auth: true },
      components: {
        default: HomePage,
        header:Header
      }
    }
  ]
})
