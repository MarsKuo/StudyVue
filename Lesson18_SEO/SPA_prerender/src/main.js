import Vue from 'vue'
import router from './router';

// Vue.use(VueRouter);

new Vue({
  el: '#app',
  router:router,
  template: '<router-view></router-view>',
  // render: h => h(App)
})
