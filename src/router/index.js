import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../layouts/Header.vue' 
import Footer from '../layouts/Footer.vue' 

import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{default:Home, header:Header, footer:Footer}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
