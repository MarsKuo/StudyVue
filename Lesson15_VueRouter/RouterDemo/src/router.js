
import Vue from 'vue';
import VueRouter from "vue-router";


import App from './App.vue'
import Products from "./Products";
import About from "./About";
import AboutUs from "./AboutUs";
import AboutYou from "./AboutYou";
import AboutHome from "./AboutHome";

Vue.use(VueRouter);

export default new VueRouter({
  //mode: 'hash',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: "about",
          alias: 'story',
          component: About,
          children: [
            { path: '', component: AboutHome },
            { path: '', name:'home', component: AboutHome },
            { path: "us", name:'us', component: AboutUs },
            { path: "you", component: AboutYou },
            { path: "both", components:{
              a:AboutUs,
              b:AboutYou
            } },
          ],
        },
        {
          path: 'products/:id?',
          name: 'xsdasdas',
          component: Products,
          //設定這個
          props: true,
        },
        //直接傳參數
        {
          path: 'products/:id?',
          name: 'asasdasddas',
          component: Products,
          //設定這個
         // props: {id:3},
         props: (route)=>{
           return {
             //id:30
             id:route.params.id,
           }
         }
        },
        {
          path: 'aboutus',
          redirect: '/about/us'
        },
        // {
        //   path: '*',
        //   //redirect: '/about/us'
        //   redirect: {name:'home'}
        // },
        // {
        //   path: '*',
        //   redirect: (from)=>{
        //     return '/about'
        //   },
        // },
        {
          path: '/story',
          redirect: '/about'

        },
      ]
    },
    //一定要傳入sn
    //{ path: '/products/:sn', component: Products },
    //{ path: '/products', component: Products },

    // { path: "/:page", component: About },
    //加問號可以選擇輸入
  ]
})
