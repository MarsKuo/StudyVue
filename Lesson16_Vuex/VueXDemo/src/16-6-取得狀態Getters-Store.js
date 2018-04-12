import Vue from 'vue'
import Vuex from 'vuex';

//gutters其實就是computed
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
   todos: [],
  },
  gutters:{
    //1.可以只接收state
    itemsNotDone(state){
      return state.todos.filter(item => !item.done).length;
    },
    //2.也可以傳入第二個參數，itemsNotDone這個gutter，
    itemsDone(state,gutters){
      return state.todos.length - gutters.itemsNotDone;
    },
    //回傳函式
    // itemsWithID(state){
    //   return (id) => {
    //     return state.todos.filter(item => item.id ===id);
    //   }
    // }
    //等同於
    itemsWithID: state => id =>
      state.todos.filter(item => item.id ===id),
  }
});

export default store;

