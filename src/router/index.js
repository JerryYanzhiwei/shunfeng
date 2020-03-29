import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login'

const teamhall = () => import(/* webpackChunkName: "login" */ '../views/teamhall/index.vue')
const main = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/index.vue')
const userInfo = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/userInfo.vue')
const teamInfo = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/teamInfo.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/teamhall',
    name: 'teamhall',
    component: teamhall
  },
  {
    path: '/main',
    component: main,
    redirect: '/main/userInfo',
    children: [
      {
        path: 'userInfo',
        component: userInfo
      },
      {
        path: 'teamInfo',
        component: teamInfo
      }
    ]
  },
  ...Login
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
