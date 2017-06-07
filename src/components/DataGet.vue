<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{error}}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return{
            loading: false,
            post: null,
            error: null
          }
      },
      created(){
          // 组件创建完后获取数据，
          // 此时 data 已经被 observed了
          this.fetchData()
      },
      watch : {
          // 如果路由有变化，会再次执行该方法
          '$route' : 'fetchData'
      },
      methods: {
          fetchData(){
              this.error = this.post = null
              this.loading = true
              //异步加载数据
              //演示加载成功
              setTimeout(() =>{
                  this.loading = false;
                  this.post = {
                      title: '演示加载成功',
                      body: '加载数据成功'
                  }
              },1000)
          }
      }
  }

</script>
