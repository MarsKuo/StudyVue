<template>
<div class="lesson">
  <img class="cover" :src="lesson.cover" :style="coverStyle" >
  <span class="title">{{lesson.title}}</span>
  <span class="price">{{lesson.price}}</span>
  <span class="teachers">{{teachers}}</span>
  <div class="buy" @click="addToCart(lesson)" :class="btnClass">
    {{btnLabel}}
  </div>
</div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
export default {
  props:['lesson'],
  computed:{
    ...mapGetters(['isLessonInCart']),
    inCart(){
      return this.isLessonInCart(this.lesson);
    },
    btnClass(){
      return {
        buy: true,
        bought: this.inCart,
      }
    },
    teachers(){
      return this.lesson.teachers
      .map(t=>t.username)
      .join(', ');
    },
    coverStyle(){
      return {
         backgroundImage: `url('${this.lesson.cover}')`,
      }
    },
    btnLabel(){
      return this.inCart ? '已加入購物車' : '加入購物車'
    }
  },
  methods: {
    ...mapMutations(['addToCart']),
  }
}
</script>

<style scoped>
.lesson{
  display: inline-block;
  width: 200px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 2px 2px 15px #999;
  margin: 10px;
  vertical-align: top;
}
.cover{
  width: 100%;
  height: 120px;
  background: center center;
  background-size: cover;
}
span{
  display: block;
  padding: 6px;
}
.title{
  font-size: .9em;
  height: 30px;
  color: #333;
  text-align: left;
}
.price{
  font-size: .8em;
  float: left;
  color: #178fac;
}
.price:before{
  content: '$';
}
.teachers{
  font-size: .7em;
  float: right;
  line-height: 1.7em;
  color: #178fac;
}
.buy{
  clear: both;
  text-align: center;
  padding: 6px;
  font-size: .7em;
  background-color: #dee;
  cursor: pointer;
}
.buy:hover{
  background-color: #cee;
}
.buy.bought{
  background-color: #ccc;
}
</style>
