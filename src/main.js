// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from './store'
import echarts from 'echarts'
import animate from 'animate.css'
import { Loading } from 'element-ui';
// import VueAMap from 'vue-amap';

Vue.use(ElementUI)
Vue.use(Vuex)
// Vue.use(VueAMap)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

// VueAMap.initAMapApiLoader({
//   key: '0d1783fe188e5ce79b5a449a81c5140f',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   uiVersion: '1.0',// ui库版本，不配置不加载,
//   v: '1.4.4'
// })




router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('user-token');
  if (to.path == '/') { // 如果是跳转到登录页的
    if (token != 'null' && token != null) {
      next('/HomePage') // 如果有token就转向HomePage不返回登录页
    }
    next(); // 否则跳转回登录页
  } else {
    if (token != 'null' && token != null) {
      Vue.prototype.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定header的token验证，注意Bearer后有个空格
      next() // 如果有token就正常转向
    } else {
      next('/') // 否则跳转回登录页
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
