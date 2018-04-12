<template>
  <li class="todo-item">
    {{data}}
  </li>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style>
  .todo-item{
    font-size: 1.2em;
    font-family: Arial;
    background-color: #fed;
    margin: 6px 0;
    padding: 4px 8px;
    cursor: pointer;
  }
  .todo-item:hover{
    background-color: #def;
  }
</style>
