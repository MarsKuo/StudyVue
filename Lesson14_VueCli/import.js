import Counter from './export'


new Vue({
  el:'#app',
  components:{
    //Counter: Counter,
    //等同於
    Counter
  },
  template:
  `
    <div>
      <Counter/>
    </div>
  `,
})