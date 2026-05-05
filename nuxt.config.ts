// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  devServer: {
    // Nó sẽ lấy PORT từ file .env, nếu không có thì mới dùng 3000
    port: parseInt(process.env.PORT || '3000')
  }
})
