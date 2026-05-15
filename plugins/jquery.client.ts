import $ from 'jquery'

export default defineNuxtPlugin(async () => {
  if (process.client) {
    // 1. Gán jQuery vào window để Slick có thể tìm thấy
    window.jQuery = window.$ = $

    // 2. Import động Slick Carousel chỉ ở phía trình duyệt
    await import('slick-carousel')
  }
})