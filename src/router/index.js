import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/shopIndex'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
  ]
})
