require('dotenv').config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'designhouse-client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/all.min.js' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vform',
    '~/plugins/axios',
    '~components/_global',
    { src: '~/plugins/inputTags', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/router',
  ],
  stylelint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',

  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/me', method: 'get' },
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    axios: {
      browserBaseURL: process.env.BASE_URL,
      baseURL: process.env.API_URL,
    },
  },

  privateRuntimeConfig: {
    // axios: {
    //   baseURL: process.env.API_URL
    // }
  },

};
