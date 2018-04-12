<template>
  <div>
    <h1>
      {{count}}
      </h1>
      <button @click="add(2)">Add</button>
  </div>
</template>

<script>
//import store from "./store";

//當屬性一多，就很麻煩，需要使用mapState,mapMutations
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),

  //1. mapGetters可以傳入陣列,gutters就類似store的computed
    //...mapGetters(['itemNotDone']),
  //2.mapGetters也可以傳入物件，可以改名為items
    ...mapGetters({
      items: "itemsWithID"
    })
  },

  //每個都寫在自己的vue內很難讀取，所以集中到Store裡面的gutters方便大家存取
  // itemsNotDone(){
  //   return this.todos.filter(item => !item.done).length;
  // }
  methods: {
    test() {
      // this.itemsWithID(2);
      this.items(2);
    }
  }
};

//gutters其實就是computed
//重點整理1 mapGetters可以傳入陣列，他會轉換成methods的函示，並且mapGetters回傳的是物件
//重點整理2 mapGetters可以傳入物件，如果是字串，可以透過methods的test函式，找到store裡面的gutters的itemsWithID，指定computed理的items函示
</script>

<style>

</style>

