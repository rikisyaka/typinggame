import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Typing from '../views/Typing.vue'
import Result from '../views/Result.vue'
import Ranking from '../views/Ranking.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/typing',
    name: 'Typing',
    component: Typing
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },{
    path: '/ranking',
    name: '/Ranking',
    component: Ranking
  }
  
  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
