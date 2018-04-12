import Vue from 'vue'
//import App from './App.vue'
import App from './todoList.vue'

new Vue({
  el: '#app',
  //可選render或是template
  //render: function(CreateElement){return createElement(App)},
  render: h => h(App)
})
