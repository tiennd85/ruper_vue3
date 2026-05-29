export default defineNuxtConfig({
  modules: ['@nuxt/content', '@pinia/nuxt'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    plugins: [
    ],
    optimizeDeps: {
      include: ['jquery']
    }
  },
  plugins: ['~/plugins/helpers.ts'],
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css',
    '~/assets/libs/feather-font/css/iconfont.css',
    '~/assets/libs/icomoon-font/css/icomoon.css',
    '~/assets/libs/elegant-icons/css/elegant.css',
    '~/assets/libs/font-awesome/css/font-awesome.css',
    '~/assets/libs/wpbingofont/css/wpbingofont.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css'
  ],
})