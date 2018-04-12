<template>
<div>
  <h1>Products</h1>
  <h2>{{id}}</h2>
</div>

</template>

<script>
const products ={
  18: 'Shoes',
  26: 'T-shirts',
  37: 'Pants',
}
export default {
  props: ['id']
  // computed:{
  //   id(){
  //     //Router
  //     //return this.$route.params.id;

  //     //Search Product
  //     return products[this.$route.params.sn];

  //     // //Querystring
  //     // return products[this.$route.query.id];
  //   }
  // }
};
</script>

<style>

</style>
