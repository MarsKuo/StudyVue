import Vue from 'vue'
//16-5
import App from './16-2引入Vuex的app.vue'
import store from './16-2引入Vuex的store.js';

new Vue({
   store,
  el: '#app',
  render: h => h(App)
})
