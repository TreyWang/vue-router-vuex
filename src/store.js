/**
 * Created by wangcong on 2017-6-2.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count : 1
}

const mutations = {
  increment(state, n){
    state.count += n
  },
  sub(state, n){
    state.count = state.count - n
  }
}

const actions = {
  addPlus(context){
    setTimeout(
      () => context.commit('increment',20)
      ,1000)
  },
  subPlus({commit}){
    console.log("开始减少");
    commit('sub', 20);
  }
}

const getters = {
  alertCount(state){
    alert(state.count);
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


