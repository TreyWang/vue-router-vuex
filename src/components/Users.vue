<template>
  <div>
    <h1>This is Users</h1>
    <h2>子组件</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    computed : {
      show(){
        if(this.$route.params.name){
          return true
        }
      }
    },
    watch : {
      '$route'(to, from){
        console.log(to);
        console.log(from);
      }
    }
  }
</script>
