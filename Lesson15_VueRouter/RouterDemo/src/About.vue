<template>
<div>
  <h1>About</h1>


  <router-link to="/about/us">Us</router-link>
  <router-link :to="{name:'us'}">Us</router-link>
  <router-link :to="{name: 'xsdasdas',params:{sn:18}}">NewYou</router-link>
  <router-link to="/about/you">You</router-link>
  <router-link to="/about/Both">Both</router-link>

  <!-- <router-view name="default"></router-view>
  相等於
  -->
  <router-view ></router-view>

  <router-view name="a"></router-view>
  <router-view name="b"></router-view>
</div>
</template>

<script>
export default {};
</script>

<style>

</style>
