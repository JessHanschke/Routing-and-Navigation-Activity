import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    }, 
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})

