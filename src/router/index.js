/*
 * @Author: your name
 * @Date: 2021-01-05 18:39:46
 * @LastEditTime: 2021-01-11 20:24:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \blog\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogItem from '../views/BlogItem.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/pageList",
    name: 'Home'
  },
  {
    path: '/pageList',
    name: 'pageList',
    component: Home
  },
  {
    path: '/BlogItem',
    name: 'BlogItem',
    component: BlogItem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
export default router