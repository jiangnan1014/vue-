import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path:'nowPlaying',
        component:()=>import('../views/NowPlaying.vue')
      },
      {
        path:'commitSoon',
        component:()=>import('../views/ComingSoon.vue')
      }
    ],
    redirect:"/home/nowPlaying"
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:()=>import('../views/Detail.vue')
  },
  {
    path:'/',
    redirect:"/home/nowPlaying"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
