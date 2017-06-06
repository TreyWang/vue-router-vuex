<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<hello></hello>-->
    <p>{{$store.state.count}}</p>
    <p>{{count}}</p>
    <div>
      <button @click="increment(11)">Mutation增加</button>
      <button @click="sub(11)">Mutation减少</button>
    </div>
    <br/>
    <div>
      <button @click="addPlus()">Action增加</button>
      <button @click="subPlus()">Action减少</button>
    </div>
    <br/>
    <div>
      <button v-on:click="alertCount()">调用Getter方法</button>
      <router></router>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapGetters, mapActions} from 'vuex';

  import Router from './page/Router'

  export default {
    name: 'app',
    components: {
      Router
    },
    computed: {
      ...mapState([
          'count'
      ])
//      count(){
//          return this.$store.state.count + 2
//      },
//      ...mapState({
//        count: state => state.count + 3
//      ...mapGetters([
//        'count'
//      ])
    },
    methods: {
      ...mapMutations([
        'increment',
        'sub'
      ]),
      ...mapActions([
        'addPlus',
        'subPlus'
      ]),
      ...mapGetters([
        'alertCount'
      ])
    }

  }
</script>

<style>

</style>
