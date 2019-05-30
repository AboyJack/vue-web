import Vue from 'vue'
import Router from 'vue-router'
import web from '@/web/web'
import map from '@/components/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/web',
      name: 'web',
      component: web
    },
    {
      path: '/map',
      name: 'map',
      component: map
    }
  ]
})
