<template>
  <div>
    <TodoInput @childsubmit="addTodo"></TodoInput>
    <ul>
      <TodoItem
        v-for="(todo,idx) in todos"
        :key="todo.id"
        :data="todo"
        @click.native="removeTodo(idx)"
        >
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
export default {
  //宣告LocalComponent
  components: {
    TodoInput,
    TodoItem
  },
  data() {
    return {
      todos: []
    };
  },
  methods:{
    addTodo(text){
      if(text !== '')
        this.todos.push(text);
    },
    removeTodo(idx){
      this.todos.splice(idx,1);
    }
  }
};
</script>

<style>
  ul{
    list-style: none;
  }
</style>
