<template>
  <div>
    <h1>This is User</h1>
    <h2>id: {{$route.params.id}}</h2>
    <h2 v-if="show">name: {{$route.params.name}}</h2>
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
