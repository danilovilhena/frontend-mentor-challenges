export default {
  head: {
    title: 'Frontend Mentor | Easybank landing page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    "./static/index.css"
  ],
  plugins: [],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  modules: [],
  build: {
    loaders: {
      sass: {implementation: require('sass')},
      scss: {implementation: require('sass')}
    }
  }
}
