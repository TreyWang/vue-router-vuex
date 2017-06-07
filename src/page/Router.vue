<template>
  <div>
    <br/>
    <!-- 编程式路由 -->
    <button @click="routerBack">后退</button>
    <button @click="routerGoOn">前进</button>
    <button @click="routerHome">Home</button>
    <ul>
      <!-- 动态传参 可用{name:'/', params:{info:'Hello VueJs'}}替换-->
      <li><router-link :to="{path:'/', query:{info:'Hello VueJs'}}">Home</router-link></li>
      <li><router-link to="/header">Header</router-link></li>
      <li><router-link to="/user/888">User</router-link></li>
      <li><router-link to="/user/888/name/TreyWang">User-plug</router-link></li>
      <!--嵌套路由 -->
      <li><router-link to="/users/">Users</router-link></li>
      <ul>
        <li><router-link to="/users/trey">user-Trey</router-link></li>
        <li><router-link to="/users/tom">user-Tom</router-link></li>
      </ul>
      <!-- 命名式路由 -->
      <li><router-link :to="{name: 'user', params: {id: '555', name: 'nameRouter'}}">Users</router-link></li>
      <!--多视图，命名试图 -->
      <li><router-link to="/mutilView">MutilView</router-link></li>
      <!-- 重定向 -->
      <li><router-link to="/redirect">Redirect -> Header</router-link></li>
      <!-- 别名 -->
      <li><router-link to="/headerAlias">HeaderAlias</router-link></li>
      <!-- 数据加载 -->
      <li><router-link to="/dataGet">数据加载</router-link></li>
    </ul>
    <!-- 使用动态的 transition name -->
    <transition>
      <router-view></router-view>
    </transition>
    <!--多视图，命名试图 -->
    <router-view name="mutil1"></router-view>
    <router-view name="mutil2"></router-view>
  </div>
</template>

<script>
  export default{
      name : 'router',
      methods : {
        routerBack(){
          //编程式路由
          this.$router.go(-1);
        },
        routerGoOn(){
          this.$router.go(1);
        },
        routerHome(){
          // 字符串
          // router.push('home')
          // 对象 router.push({ path: 'home' })
          // 命名的路由 router.push({ name: 'user', params: { userId: 123 }})
          // 带查询参数，变成 /register?plan=private
          // router.push({ path: 'register', query: { plan: 'private' }})
          //this.$router.push('/');
          this.$router.push({path: '/', query:{info: "Hello VueRouter"}});

          //$router.replace(location);类似于$router.push(location)
          //它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
          //$router.replace(...)

        }
      }
  }

</script>
