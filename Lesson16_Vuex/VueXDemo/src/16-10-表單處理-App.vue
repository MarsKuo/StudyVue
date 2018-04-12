<template>
<div>
  <input type="text" v-model="text">
  <!-- 等同於 ↓ -->
  <!-- <input type="text" :value="text" @input="val => text=val.target.value" /> -->
  <!-- <input type="text" :value="text" @input="setText" /> -->
  <h1>{{text}}</h1>
</div>
</template>

<script>
import { mapState,mapMutations } from "vuex";

export default {
  // data() {
  //   return {
  //     text: ""
  //   };
  // }
  computed:{
    // text(){
    //   return this.$store.state.text;
    // }
    ...mapState(['text'])
  },
  //使用V-model用這種方式
  // computed:{
  //   text: {
  //     get(){
  //       return this.$store.state.text;
  //     },
  //     set(val){
  //       this.$store.commit('setText',val)
  //     }
  //   }
  // },
  methods:{
    ...mapMutations(['setText'])
    // setText(val){
    //   this.$store.commit('setText',val);
    // }
  }
};
</script>

<style>

</style>
