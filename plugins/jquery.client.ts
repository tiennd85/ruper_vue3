import $ from 'jquery'

export default defineNuxtPlugin(() => {
  // Gán jQuery vào window để các component cũ có thể dùng window.$
  if (typeof window !== 'undefined') {
    window.jQuery = window.$ = $
  }
  
  return {
    provide: {
      jquery: $
    }
  }
})