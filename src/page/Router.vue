<template>
  <div>
    <ul>
      <!-- 动态传参 可用{name:'/', params:{info:'Hello VueJs'}}替换-->
      <li><router-link :to="{path:'/', query:{info:'Hello VueJs'}}">Home</router-link></li>
      <li><router-link to="/header">Header</router-link></li>
      <li><router-link to="/user/888">User</router-link></li>
      <li><router-link to="/user/888/name/TreyWang">User-plug</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
      name : 'router'
  }

</script>
