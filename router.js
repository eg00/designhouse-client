import Vue from 'vue'
import Router from 'vue-router'

import Index from '~/pages/index.vue'
import Login from '~/pages/auth/login'
import Register from '~/pages/auth/register'
import Verify from '~/pages/auth/verification/verify'
import Resend from '~/pages/auth/verification/resend'
import ResetEmail from '~/pages/password/reset-email'
import PasswordReset from '~/pages/password/password-reset'
import Dashboard from '~/pages/user/dashboard'

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
  },
  {
    path: '/password/email',
    name: 'password.email',
    component: () => ResetEmail
  },
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: () => PasswordReset
  },
  {
    path: '/user/dashboard',
    name: 'user.dashboard',
    component: () => Dashboard
  }

]

export function createRouter () {
  return new Router({
    routes,
    mode: 'history'
  })
}
