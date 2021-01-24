import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index.vue'
import Login from '~/pages/auth/login'
import Register from '~/pages/auth/register'
import Verify from '~/pages/auth/verification/verify'
import Resend from '~/pages/auth/verification/resend'

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
  },
  {
    path: '/verification/verify/:id',
    name: 'verify',
    component: () => Verify
  },
  {
    path: '/verification/resend',
    name: 'verification.resend',
    component: () => Resend
  }

]

export function createRouter () {
  return new Router({
    routes,
    mode: 'history'
  })
}
