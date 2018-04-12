import Vue from 'vue'
import Vuex from 'vuex';


const todos = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    setList(state, payload) {

    }
  },
  getters: {
    getLength(state, getters, rootState, rootGetters) {
      // rootState.member.username
      // rootState就是上層Store的state
    }
  },
  actions: {
    fetchList(context) {
      const { commit, dispatch, state, getters, rootState, rootGetters } = context;
      //fetchList({ commit, dispatch, state, getters, rootState, rootGetters }) {

    }
  }
};

const member = {
  namespaced: true,
  state: {
    username: '',
    rank: 0,
  }
  ,
  mutations: {
    setList() {

    },
  },
  actions: {
    fetchList({ commit }) {
      //....
      //第一個是commit的mutations的名稱，第二個是payLoad，第三個設定的物件是設定從root往下發
      commit('todos/setList', [1, 2, 3, 4], { root: true })
      //發給自己可以不需要namespaced
      commit('setList', [1, 2, 3, 4])
    }
  }
}

Vue.use(Vuex);

//唯一改變Store的state只有mutations的方法

// const store = new Vuex.Store({
//   state: {
//     todos:[],
//     cart:[],
//     products: [],
//     username: '',
//     rank: 0,
//     notifications: [],
//   },
// });

//用模組的概念使用
const store = new Vuex.Store({
  modules: {
    todos: todos,
    member: member,
  },
});

export default store;

//重點整理1 隨著專案越來越多State越來越大，避免State過度擁腫，故可以使用modules
//重點整理2 Context有rootStateep rootGetters,Store只有其他四個(commit, dispatch, state, getters)
//重點整理3 因為使用modules，裡面的actions是可以取相同名子，如果同名有兩個，那兩個都會執行，解決方式就是使用namespaced
//重點整理4 如果需要action需要發送到其他模組的mutations，因為沒有rootCommit跟rootAction，就需要使用commit('todos/setList', [1, 2, 3, 4], { root: true })
