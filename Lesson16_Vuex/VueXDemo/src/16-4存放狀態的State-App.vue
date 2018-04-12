<template>
  <div>
    <h1>
      {{storeCount}}
      </h1>
      <button @click="addCount">Add</button>
  </div>
</template>

<script>
//import store from "./store";

//當屬性一多，就很麻煩，需要使用mapState,mapMutations
import { mapState } from "vuex";

// ****如果不是用Webpack的話，可以使用Vuex.mapState

export default {
  data(){
    return{
      localCount: 0,
    }
  },
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   username() {
  //     return this.$store.state.username;
  //   },
  //   list() {
  //     return this.$store.state.list;
  //   },
  // },
  //computed: mapState(["count", "username", "list"]),

  //mapState如果傳入陣列，他可以轉換為computed的函示，並且mapState回傳的是物件

  //如果有太多的computed，可以使用spread 來擴充
  //可以參考下列方式，在擴充自己的computed
  computed: {
    myCount() {
      return this.localCount;
    },
    //1 mapState可以傳入陣列
    //...mapState(["count", "username", "list"])
    //2.mapState可以傳入物件
    ...mapState({
        storeCount: 'count',
        // 除了是字串，他也可以是函式，如果是函示，他可以以state為參數，否則就為store的state
        storeCount:state=> state.count,
        totalCount(state){
          //會用到this就不會寫到箭頭函式
          return this.localCount + state.count;
        }

        //重點整理1 mapState可以傳入陣列，他會轉換成computed的函示，並且mapState回傳的是物件
        //重點整理2 mapState可以傳入物件，如果是字串，他可以把store裡面的state的count，指定computed理的storeCount函示 ref49行
        //重點整理3 mapState可以傳入物件，如果是函示，他可以傳入state，加以運算，ref：52行
        //重點整理4 mapState是回傳一個物件，，所以可以使用...mapState來使用剩餘函數，spread的參考如下
            //參考var obj1 = { foo: 'bar', x: 42 };
            // var obj2 = { foo: 'baz', y: 13 };
            // var clonedObj = { ...obj1 };
            // // Object { foo: "bar", x: 42 }
            // var mergedObj = { ...obj1, ...obj2 };
            // // Object { foo: "baz", x: 42, y: 13 }
      })
  },
  methods: {
    addCount() {
      this.$store.commit("addCount");
    }
  }
};
</script>

<style>

</style>
