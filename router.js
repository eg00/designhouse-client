import Vue from 'vue';
import Router from 'vue-router';

import Index from '~/pages/index.vue';
import Login from '~/pages/auth/login';
import Register from '~/pages/auth/register';
import Verify from '~/pages/auth/verification/verify';
import Resend from '~/pages/auth/verification/resend';
import ResetEmail from '~/pages/password/reset-email';
import PasswordReset from '~/pages/password/password-reset';
// import Dashboard from '~/pages/user/dashboard';
import Create from '~/pages/user/designs/create';
import Update from '~/pages/user/designs/update';
import Settings from '~/pages/user/settings/index.vue';
import SettingsDashboard from '~/pages/user/settings/dashboard';
import SettingsProfile from '~/pages/user/settings/profile';
import SettingsDesigns from '~/pages/user/settings/designs';
import DesignsSearch from '~/pages/designs/search';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => Index,
  },
  {
    path: '/login',
    name: 'login',
    component: () => Login,
  },
  {
    path: '/register',
    name: 'register',
    component: () => Register,
  },
  {
    path: '/verification/verify/:id',
    name: 'verify',
    component: () => Verify,
  },
  {
    path: '/verification/resend',
    name: 'verification.resend',
    component: () => Resend,
  },
  {
    path: '/password/email',
    name: 'password.email',
    component: () => ResetEmail,
  },
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: () => PasswordReset,
  },
  // {
  //   path: '/user/dashboard',
  //   name: 'user.dashboard',
  //   component: () => Dashboard,
  // },
  {
    path: '/upload',
    name: 'designs.upload',
    component: () => Create,
  },
  {
    path: '/designs/:id/edit',
    name: 'designs.edit',
    component: () => Update,
  },

  {
    path: '/settings',
    component: () => Settings,
    children: [
      {
        path: '',
        redirect: { name: 'settings.dashboard' },
      },
      {
        path: 'dashboard',
        name: 'settings.dashboard',
        component: () => SettingsDashboard,
      },
      {
        path: 'profile',
        name: 'settings.profile',
        component: () => SettingsProfile,
      },
      {
        path: 'designs',
        name: 'settings.designs',
        component: () => SettingsDesigns,
      },
    ],
  },

  {
    path: '/designs/search',
    name: 'designs.search',
    component: () => DesignsSearch,
  },
];

export function createRouter() {
  return new Router({
    routes,
    mode: 'history',
  });
}
