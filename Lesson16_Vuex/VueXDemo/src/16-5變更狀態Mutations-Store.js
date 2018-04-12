import Vue from 'vue'
import Vuex from 'vuex';



//唯一改變Store的state只有mutations的方法
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0,
    editor: {
      text: '',
    }
  },
  mutations: {
  //1.傳字串 對應app→→→this.$store.commit("addCount");
    //addCount(state) {

  //2.接收參數 對應app的29行→→→this.$store.commit("addCount",2);
      addCount(state,payload) {
      //state.count = state.count + payload;

  //3.傳物件物件，會多出payload.step可以使用→→→→→→this.$store.commit({ type: 'addCount',step: 2,})
        //state.count = state.count + payload.step;
        //使用mapMutations
        state.count = state.count + payload;

        //mutations一定要只能做同步的操作，使用非同步(例如Fetch等)就會跳錯，如果要使用非同步，就使用Action的方法



          //如果要新增store的屬性，就要使用Vue.set才可以正確的運作
          //想增加   state.loading = false;，不能直接指定新的值
          //就使用   Vue.set(state,'loading',false);
          //如果要幫物件新增不存在的屬性，edit.loading，不能直接增加
          //Vue.set(state.editor,'loading',false);
          //或者使用es6的語法
          //state.editor = {...state.editor,loading: true}

    },
  },
});

export default store;

