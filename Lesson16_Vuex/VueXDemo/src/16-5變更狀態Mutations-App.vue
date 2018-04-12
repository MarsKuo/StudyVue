<template>
  <div>
    <h1>
      {{count}}
      </h1>
      <!-- <button @click="addCount">Add</button> -->

      <!-- 使用mapMutation可以直接傳入參數 -->
      <!-- <button @click="addCount(2)">Add</button> -->
      <!-- 使用mapMutation物件方法可以直接傳入參數 -->
      <button @click="add(2)">Add</button>
  </div>
</template>

<script>
//import store from "./store";

//當屬性一多，就很麻煩，需要使用mapState,mapMutations
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["count"])

  },

  //使用mapMutation，最後會回傳物件，可以直接在@click傳入參數，傳入payload，很方便
  //1 mapMutation可以傳入陣列，
  //  methods:mapMutations(['addCount']),
  //2. 或mapMutation可傳入物件，
  methods: mapMutations({
    //add對應此app的click名稱，addCount對應Store的mutations的addCount
    add: 'addCount'
  }),

  //  methods: {
  //   addCount() {
  //     1. 傳字串，對應store的mutations的function名子
  //       //this.$store.commit("addCount");
  //     2. 傳字串要加傳參數，放在第二個參數
  //       //this.$store.commit("addCount",2);
  //     3. 傳物件
  //       this.$store.commit({
  //         type: 'addCount',    <----mutations的名子
  //         step: 2,
  //       })
  //     }
  // },



   //重點整理1 mapMutation可以傳入陣列，他會轉換成methods的函示，並且mapMutation回傳的是物件
   //重點整理2 mapMutation可以傳入物件，如果是字串，他可以把store裡面的state的count，指定computed理的storeCount函示 ref57行
   //重點整理3 mutations只能做同步的操作，使用非同步(例如Fetch等)就會跳錯，如果要使用非同步，就使用Action的方法
};
</script>

<style>

</style>
