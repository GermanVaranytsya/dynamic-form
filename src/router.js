import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A/index.vue'
import B from './views/B/index.vue'
import C from './views/C/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/a',
      name: 'A',
      component: A
    },
    {
      path: '/b',
      name: 'B',
      component: B
    },
    {
      path: '/c',
      name: 'C',
      component: C
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
