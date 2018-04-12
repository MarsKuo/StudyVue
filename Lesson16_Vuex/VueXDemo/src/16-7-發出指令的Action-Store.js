import Vue from 'vue'
import Vuex from 'vuex';

//gutters其實就是computed
Vue.use(Vuex);

const url = '';

const store = new Vuex.Store({
  state: {
    loading: false,
    todos: [],
  },
  //Action不能直接修改state，他只能發出mutations
  //mutations不能做非同步的動作
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  //actios不能直接修改state
  actions: {
    // 1.action做了一個非同步的動作
    //action傳入的context跟Store差不多，但是多了一些東西
    //context包含store的一切，包含State，mutations，dispatch，有commit，但是他不相等Store

    // fetchTodos(context){
    //   fetch(`${url}/todos`)
    //   .then(rs=>rs.json())
    //   .then(todos=>{
    //     context.commit('setTodos',todos);
    //   })
    // },
    // 2.參數解構↓，只需要context裡面的commit跟dispatch所以寫成下列方式
    fetchTodos({ commit, dispatch }, payload) {

      //1. 正常非同步取得，可以在action中途再去讀其他資料
      // commit('setLoading', true)
      // fetch(`${url}/todos`)
      //   .then(rs => rs.json())
      //   .then(todos => {
      //     commit('setTodos', todos);
      //     commit('setLoading', false)
      //     //中途再去讀其他資料，再Action裡面再呼叫另外一個
      //     //dispatch是給Action，commit是給mutation
      //     dispatch('fetchUserInfo')
      //   })


      //也可以使用Promise，想知道他何時回來，就使用Promise
      // return new Promise(resolve => {
      //   commit('setLoading', true)
      //   fetch(`${url}/todos`)
      //     .then(rs => rs.json())
      //     .then(todos => {
      //       commit('setTodos', todos);
      //       commit('setLoading', false)
      //       //中途再去讀其他資料，再Action裡面再呼叫另外一個
      //       //dispatch是給Action，commit是給mutation
      //       dispatch('fetchUserInfo')
      //       resolve();
      //     })
      // })

      //因為fetch跟axios都是原生的Promise，所以可以直接回傳
        commit('setLoading', true)
        return fetch(`${url}/todos`)
          .then(rs => rs.json())
          .then(todos => {
            commit('setTodos', todos);
            commit('setLoading', false)
            //中途再去讀其他資料，再Action裡面再呼叫另外一個
            //dispatch是給Action，commit是給mutation
            dispatch('fetchUserInfo')
            resolve();
          })
    },
    fetchUserInfo() {

    }
  },
});

export default store;

