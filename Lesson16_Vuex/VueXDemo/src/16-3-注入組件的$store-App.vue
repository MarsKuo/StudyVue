<template>
  <div>
    <h1>
      {{count}}
      </h1>
      <button @click="addCount">Add</button>
      <button @click="rudCount">rud</button>
  </div>
</template>

<script>

//import store from "./16-3-注入組件的$store-Store";

//當屬性一多，就很麻煩，需要使用mapState,mapMutations
import { mapState, mapMutations } from "vuex";

export default {
  // computed: {
  //   count(){
  //     return store.state.count;
  //   }
  // },
  // methods: {
  //   addCount(){
  //     store.commit('addCount');
  //   }
  // }

    // computed: mapState(['count']),
    // methods: mapMutations(['addCount','rudCount']),

  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["addCount","rudCount"])
  }

};
</script>

<style>

</style>
