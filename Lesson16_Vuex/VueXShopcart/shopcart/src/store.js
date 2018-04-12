import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1';

const store = new Vuex.Store({
  state: {
    lessons: [],
    cart: [],
  },
  getters: {
    // lessonsInCart(state) {
    //   return state.cart.length;
    // },
    // priceInCart(state) {
    //   return state.cart.reduce((acc, lesson) => {
    //     return acc + lesson.price;
    //   }, 0)
    // },
    //如果回傳不是-1，代表已經進入購物車
    // isLessonInCart(state) {
    //   return (lesson) => {
    //     return state.cart.findIndex(({ id }) => {
    //       return id === lesson.id
    //     }) !== -1;
    //   }
    // }
    //改成箭頭函式
    lessonsInCart: state => (
      state.cart.length
    ),
    priceInCart: state => (
      state.cart.reduce((acc, lesson) => (
        acc + lesson.price
      ), 0)
    ),
    isLessonInCart: (state) => lesson => (
      state.cart.findIndex(({ id }) => (
        id === lesson.id
      )) !== -1
    ),
  },
  //要更改state需要使用mutation
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
    addToCart(state, lesson) {
      //  state.cart = state.cart.comcat(lesson);
      state.cart = [...state.cart, lesson];
      //  state.cart.push(lesson);
    },
  },
  //取得非同步，需要使用action
  actions: {
    fetchLessons({ commit }) {
      fetch(LESSONS_URL)
        .then(rs => rs.json())
        .then(rs => {
          const lessons = rs.courses;
          commit('setLessons', lessons)
        })
    },
  },
});


export default store;
