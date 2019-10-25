import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',  //修改路由模式为history模式
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/addressMap',
      name: 'addressMap',
      component: () => import('../components/Map/addressMap.vue')
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
    {
      path: '/notFound',
      name: 'notFound',
      component: () => import('../components/notFound.vue')
    },
    {
      path: '/notLogin',
      name: 'notLogin',
      component: () => import('../components/notLogin.vue')
    },
  ]
})
