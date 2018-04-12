<template>
<div>
  <input type="text" v-model="text">
  <div class="lesson-list">
    <div class="lesson" v-for="lesson in lessons" :key="lesson">
      <img :src="lesson.cover" alt="">
      <span>{{lesson.title}}</span>
      <label >{{lesson.owner.username}}</label>
    </div>
  </div>
</div>
</template>

<script>
import debounce from 'lodash/debounce';
//上面打包比較小，下面打包比較大包
//import {debounce} from 'loadash'
const SEARCH_API='https://hiskio.com/api/v1/courses/search?word=';
export default {
  data(){
    return{
      text: '',
      lessons: [],
    }
  },
  methods:{
    search(val){
      fetch(`${SEARCH_API}${val}`)
      .then(rs=>rs.json())
      .then(data => {
        this.lessons = data.courses;
      })
    }
  },
  watch:{
    text(val){
       this.searchDebounced(val);
    }
  },
  created(){
    this.searchDebounced = debounce(this.search,500);
  }
}
</script>

<style>
.lesson img{
  width: 100px;
}
.lesson span,.lesson label{
  display: block;
}
</style>
