import Vue from 'vue'

import App from './16-3-注入組件的$store-App.vue'
import store from './16-3-注入組件的$store-Store';

new Vue({
  //不一定要引入store
  //第一個，在Vue實例引入，每一個子組件只需要使用 this.$store就可以使用，不用每個組件import
  //第二個，要讀資料使用computed，要寫的時候，需要使用methods
  //第三個，當屬性一多，就很麻煩，需要使用mapState,mapMutations這些好用的工具
   store,
  el: '#app',
  render: h => h(App)
})
