<template>
  <div style="text-align: center">
    <h1>App</h1>
    <h2>{{count}}</h2>
    <RunningNumber :number="count" />
    <br>
    <button @click="count+=100000">+</button>
    <button @click="count-=100000">--</button>
  </div>
</template>

<script>
import RunningNumber from './RunningNumber'
export default {
  components:{
    RunningNumber
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style>

</style>
