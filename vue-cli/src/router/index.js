import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contact',
      component: Contact
    },
    {
      path: '/post',
      name: 'Posts',
      component: Posts
    }
  ]
})
