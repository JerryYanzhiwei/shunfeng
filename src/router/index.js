import Vue from 'vue'
import Router from 'vue-router'
import Login from './login'

const teamhall = () => import(/* webpackChunkName: "login" */ '../views/teamhall/index.vue')
const main = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/index.vue')
const userInfo = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/userInfo.vue')
const teamInfo = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/teamInfo.vue')
const worksSubmit = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/worksSubmit.vue')
const worksStatus = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/worksStatus.vue')
const applyList = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/applyList.vue')
const teamCenter = () => import(/* webpackChunkName: "backend" */ '../views/mainpage/pages/teamCenter.vue')

const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

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
        path: 'applyList',
        component: applyList
      },
      {
        path: 'worksSubmit',
        component: worksSubmit
      },
      {
        path: 'worksStatus',
        component: worksStatus
      },
      {
        path: 'teamCenter',
        component: teamCenter
      }
    ]
  },
  ...Login
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
