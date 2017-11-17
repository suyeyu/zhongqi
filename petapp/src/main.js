import Vue from 'vue'
import VueRouter from 'vue-router'  //引入路由模块
import routes from './router.js' //导入路由配置文件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store.js'
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(MintUI)
Vue.use(Vuex)

Vue.prototype.$http = axios

//创建实例
const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
   router,
   store,
  render: h => h(App)
})
