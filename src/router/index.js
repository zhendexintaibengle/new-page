import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardComponent from '../components/DashboardComponent.vue';
// import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/1',
    name: 'DashboardComponent',
    component: DashboardComponent,
    meta:{
      title:"首页——学子商城",
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // 到哪里去to 从哪里来from，是否通行next
  console.log("to:",to)
  document.title=to.meta.title
  next()
})

export default router
