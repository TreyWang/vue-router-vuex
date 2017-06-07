/**
 * Created by wangcong on 2017-6-5.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from './components/Header.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Users from './components/Users.vue'
import UsersChild from './components/user_children/child.vue'
import MutilView from './components/MutilView.vue'
import Mutil1 from './components/view_components/child1.vue'
import Mutil2 from './components/view_components/child2.vue'
//import DataGet from './components/DataGet.vue'
import Error404 from './components/error404.vue'

//异步加载
const DataGet = resolve => require(['./components/DataGet.vue'], resolve)


Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/header', component: Header},
  //动态路径参数
  {path: '/user/:id', component: User},
  //动态路径参数,扩展(\\d+)为正则表达式高级匹配
  {path: '/user/:id(\\d+)/name/:name', component: User},
  //嵌套路由
  {path: '/users', component: Users,
    children: [
      {path: ':name',
        component: UsersChild,
        //路由元信息
        //一个路由匹配到的所有路由记录会暴露为 $route 对象（还有在导航钩子中的 route 对象）的 $route.matched 数组。
        // 因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。
        meta: { requiresAuth: true }
      }
    ]
  },
  //命名式路由
  {path: '/user/:id(\\d+)/name/:name',
    name: 'user',
    component: User},
  //命名式试图，多试图
  {path: '/mutilView',
    components: {
      default: MutilView,
      mutil1 : Mutil1,
      mutil2 : Mutil2
    }
  },
  //重定向
  // 1.可以为地址；
  // 2.可以是一个路由名称{ path: '/a', redirect: { name: 'foo' }}
  // 3.可以是一个方法
  {path: '/redirect', redirect: '/header'},
  {path: '/redirectGoBack',
    redirect: to =>{
      return '/header'
    }
  },
  //别名 alias
  {path: '/alias', component: Header, alias: '/headerAlias',
    //钩子
    beforeEnter(to,from, next){
      console.log(to);
      console.log(from)
      //next()参数 false;next(false); next({path: '/'})
      next();
    }
  },
  //演示数据异步加载
  {path : '/dataGet', component: DataGet},
  //注意：404页面必须放在最后
  {path: '*', component: Error404}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
  //滚动行为
  //savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    //调到浏览器最上方
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { x: 0, y: 0 }
    // }
    //模拟『滚动到锚点』的行为
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

//全局钩子,可用来控制权限
router.beforeEach((to, from, next) => {
  next();
})

router.afterEach((router) => {
})

//meta元数据的检查
//router.beforeEach((to, from, next) => {
// if (to.matched.some(record => record.meta.requiresAuth)) {
//    this route requires auth, check if logged in
//    if not, redirect to login page.
//    if (!auth.loggedIn()) {
//        next({
//          path: '/login',
//          query: { redirect: to.fullPath }
//        })
//    } else {
//      next()
//    }
// } else {
//    next() // 确保一定要调用 next()
// }
// })

export default router

