<template>
  <div>
    1234
  </div>
</template>

<script>
export default {
  mounted() {
    FB.init({
      appId: '236323106934165',
      version: "v2.12",
    });

    FB.getLoginStatus(result => {
      console.log("ccccc");
      console.log(result);
    });

  }
};
</script>

<style>

</style>
