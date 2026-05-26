export default defineNuxtConfig({
  srcDir: 'app/',
  modules: [
    '@nuxt/content',
    '@pinia/nuxt'
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  vite: {
    plugins: [
      // Nếu dùng Vite (mặc định của Nuxt 3)
    ],
    optimizeDeps: {
      include: ['jquery']
    }
  },
  css: [
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css'
  ],
})
