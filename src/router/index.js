import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './login'

const teamhall = () => import(/* webpackChunkName: "login" */ '../views/teamhall/index.vue')
const main = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/index.vue')
const userInfo = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/userInfo.vue')
const teamInfo = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/teamInfo.vue')
const worksSubmit = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/worksSubmit.vue')
const worksStatus = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/worksStatus.vue')

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
      },
      {
        path: 'worksSubmit',
        component: worksSubmit
      },
      {
        path: 'worksStatus',
        component: worksStatus
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
