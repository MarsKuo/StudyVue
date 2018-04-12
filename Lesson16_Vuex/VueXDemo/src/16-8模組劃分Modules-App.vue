<template>

</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    //  todolist(){
    //    return this.$store.state.todos.list
    // ...mpaState([
    //   'todos/list',
    //   'todos/text',
    //   'todos/text1',
    //   'todos/text2',
    // ])
    //當todos太多，可以在第一個參數放namespaced
    ...mpaState('todos',[
      'list',
      'text',
      'text1',
      'text2',
    ]),
    ...mpaState('member',[
      'username',
      'ranking',
      'current',
      'loading',
    ]),
  },
  mounted() {
    //如果同名有兩個，那兩個都會執行，或是使用namespaced
    this.$store.dispatch("todos/fetchList");
    this.$store.dispatch("member/fetchList");
  }
};
</script>

<style>

</style>
