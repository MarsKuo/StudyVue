<template>
  <div>
    <h1>Outer</h1>
    <Inner></Inner>
  </div>
</template>

<script>
import Inner from './Inner.vue';
export default {
  components: {Inner}
};
</script>

<style scoped>
  h1{
    color: red;
  }
</style>
