import Vue from 'vue'
import Router from 'vue-router'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Login from '@/components/Login'
import pricing from '@/components/pricing'
import Register from '@/components/Register'
import Advertisement from '@/components/Adverts'
import Influencer from '@/components/Micro-influencers'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/advert',
      name: 'advert',
      component: Advertisement
    },
    {
      path: '/footer',
      name: 'footer',
      component: Footer
    },
  
    {
      path: '/pricing',
      name: 'pricing',
      component: pricing
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/influencer',
      name: 'influencer',
      component: Influencer
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],
  
})
