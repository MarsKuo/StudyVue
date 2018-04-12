import Vue from 'vue'
//import Vuex, { Store } from 'vuex';
 import Vuex from 'vuex';

Vue.use(Vuex);
 const store = new Vuex.Store({
//const store = new Store({
  state: {
    count: 0,
    username: '',
    list: [],
  },
  mutations: {
    addCount(state) {
      state.count += 1;

      //如果要新增store的屬性，就要使用Vue.set才可以正確的運作
      //想增加   state.loading = false;，不能直接指定新的值
      //就使用   Vue.set(state,'loading',false);
    },
  },
});

export default store;
