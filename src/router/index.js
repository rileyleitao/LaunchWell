import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Parallel from '../views/Parallel.vue'
import homeassessment from '../views/homeassessment.vue'
import KelvinElectric from '../views/KelvinElectric.vue'
import Contact from '../views/Contact.vue'
// import Splash from '../views/Splash.vue'


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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/signup',
    name:'Signup',
    component: Signup
  },
  {
    path:'/parallel',
    name:'Parallel',
    component: Parallel
  },
  {
    path:'/homeassessment',
    name:'HomeAssessment',
    component: homeassessment
  },
  {
    path:'/kelvinelectric',
    name:'KelvinElectric',
    component: KelvinElectric
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact
  }



  // {
  //   path: '/splash',
  //   name: 'Splash',
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
