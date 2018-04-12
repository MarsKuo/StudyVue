import Vue from 'vue'
//import Vuex, { Store } from 'vuex';
 import Vuex from 'vuex';

 //使用Webpack打包需要使用這行
Vue.use(Vuex);
 const store = new Vuex.Store({
//const store = new Store({
  state: {
    count: 0,
  },
  mutations: {
    addCount(state) {
      state.count += 1;
    },
    rudCount(state){
      state.count -= 1;
    }

  },
});

export default store;
