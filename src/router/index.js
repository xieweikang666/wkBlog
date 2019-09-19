import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: () => import('../components/Home/UserInfo.vue')
    },
    {
      path: '/Blogs',
      name: 'Blogs',
      component: () => import('../components/Home/Blogs.vue')
    },

  ]
})
