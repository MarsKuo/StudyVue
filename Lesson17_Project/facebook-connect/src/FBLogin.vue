<template>
  <div>
    <span>{{connected}}</span>
    <button v-if="!connected" @click="connect">Connect</button>
    <div v-else>
      <h4 >
            {{username}}
      </h4>
      <img :src="picture" alt="">
    </div>

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
        // FB.api('/me',rs =>{
        //   this.username = rs.name;
        //   console.log(rs);
        // })
        FB.api(
          "/me",
          "GET",
          {
            fields: ["picture", "name"]
          },
          rs => {
            this.username = rs.name;
            this.picture = rs.picture.data.url;
          }
        );
      }
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
