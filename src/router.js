/**
 * Created by wangcong on 2017-6-5.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from './components/Header.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Error404 from './components/error404.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/header', component: Header},
  //动态路径参数
  {path: '/user/:id', component: User},
  //动态路径参数,扩展(\\d+)为正则表达式高级匹配
  {path: '/user/:id(\\d+)/name/:name', component: User},
  //注意：404页面必须放在最后
  {path: '*', component: Error404}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

export default router

