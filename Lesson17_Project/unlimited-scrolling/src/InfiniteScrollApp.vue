<template>
  <div>
    <span>{{connected}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connected: false,
      username: "",
      picture: ""
    };
  },
  methods: {
    connect() {
      FB.login(result => {
        console.log(result);
      });
    },
    statusGet(result) {
      // this.connected = result.status === "connected";
      if (result.status === "connected") {
        this.connected = true;
        this.getAlbum();
      }
    },
    getAlbum() {
      FB.api("/738251022885507/photos", {
         fields: ["picture","name"]
         }, result => {
           console.log(result);
       var data =  result.data.map(item => item.picture);
        console.log(data);
      });

      // FB.api("/738251022885507/photos", result => {
      //   console.log(result);
      // });
    }
  },
  mounted() {
    FB.init({
      appId: "236323106934165",
      version: "v2.12"
    });

    FB.getLoginStatus(this.statusGet);
  }
};
</script>

<style>

</style>
