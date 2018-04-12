<template>
  <div class="list">
      <LessonItem v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" ></LessonItem>

    <!-- <div v-for="lesson in lessons" :key="lesson.id">
      <span>{{lesson.title}}</span>
    </div> -->
  </div>
</template>

<script>
// //使用基本的寫法
// export default {
//   computed: {
//     lessons(){
//       return this.$store.state.lessons;
//     }
//   },
//   mounted() {
//     this.$store.dispatch("fetchLessons");
//   }
// };
</script>

//使用map的方法
<script>
import {mapState,mapActions} from 'vuex';
import LessonItem from './LessonItem';

export default {
  components:{
    LessonItem
  },
  computed: {
    ...mapState(['lessons'])
  },
  methods: {
      ...mapActions(['fetchLessons'])
  },
  mounted() {
    this.fetchLessons();
  }
};
</script>

<style>
.list{
  padding-top: 30px;
  text-align: center;
}
</style>
