import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index.vue'
import Login from '~/pages/auth/login'
import Register from '~/pages/auth/register'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => Index
  },
  {
    path: '/login',
    name: 'login',
    component: () => Login
  },
  {
    path: '/register',
    name: 'register',
    component: () => Register
  }

]

export function createRouter () {
  return new Router({
    routes,
    mode: 'history'
  })
}
