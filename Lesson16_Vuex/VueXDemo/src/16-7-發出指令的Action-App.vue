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
// import { mapState, mapMutations, mapGetters } from "vuex";

import { mapActions } from "vuex";
export default {
  mounted() {
    //方法1，使用字串直接呼叫，第二個參數可以傳payload
    //this.$store.dispatch("fetchTodos", { id: 2 });
    //方法2，可以使用物件直接呼叫,type對應Store的action
    // this.$store.dispatch({
    //   type: 'fetchTodos',
    //   id: 2
    // });

    //方法3 使用mapActions，必須透過methods來呼叫
    //this.fetchTodos({ id: 2 });
    //方法4，methods使用物件，必須透過methods來呼叫
    this.fetch({id:2});
    //方法5，如果store是使用Promise，這邊就可以做非同步的操作，必須透過methods來呼叫
      this.fetchTodos({id:2})
      .then(()=>{
        //這邊就可以做非同步
      })
  },

  //1.mapActions可以使用傳入陣列，他會轉換成methods的函示，並且mapActions回傳的是物件
  // methods: mapActions(["fetchTodos"])
  //2.mapActions可以傳入物件，如果是字串，他可以把store的fetchTodos，指定methods裡面的fetch函式
  methods: mapActions({
    fetch: 'fetchTodos'
  })
};

//重點整理1 mapActions可以傳入陣列，他會轉換成methods的函示，並且mapActions回傳的是物件
//重點整理2 mapActions可以傳入物件，如果是字串，他可以把store裡面的state的count，指定computed理的storeCount函示 ref30

//重點整理3 mutations只能做同步的操作，使用非同步(例如Fetch等)就會跳錯，如果要使用非同步，就使用Action的方法
//重點整理4 mounted先發動dispatch給action，action發動commit給mutations，mutations變更State
//重點整理5 Mutation不能做非同步的操作，Action可以，但Action 不能修改State
//重點整理6 context包含store的一切，包含State，mutations，dispatch，有commit，但是他不相等Store，action傳入的context跟Store差不多，但是多了一些東西
//重點整理7 mapActions是給methods使用的
</script>

<style>

</style>
