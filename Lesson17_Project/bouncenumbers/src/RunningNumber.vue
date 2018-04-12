<template>
  <h2 :class="{running: visibleNumber !== number }">
    {{visibleNumber}}
  </h2>
</template>

<script>
export default {
  props: ["number"],
  data() {
    return {
      visibleNumber: this.number
    };
  },
  methods: {
    run() {
      // console.log('this.visibleNumber：' + this.visibleNumber)
      //  console.log('this.number：' + this.number)
      // this.visibleNumber = this.number;
      const diff = Math.floor((this.number - this.visibleNumber) * 0.1);
      if(diff ===0){
        this.visibleNumber = this.number;
      }
      else{
        this.visibleNumber += diff;
        window.requestAnimationFrame(this.run)
        //  setTimeout( this.run, 100);
      }
    }
  },
  watch: {
    number() {
      this.run();
    }
  }
};
</script>

<style scoped>
h2{
  display: inline-block;
  transition: all .2s;
}
h2.running{
  transform:  scale(2);
  color: red;
}
</style>
