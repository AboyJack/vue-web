import Vue from 'vue'
import Router from 'vue-router'
import web from '@/web/web'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'web',
      component: web
    }
  ]
})
