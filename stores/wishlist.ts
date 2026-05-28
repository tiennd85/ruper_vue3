import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlistItems: [] as any[]
  }),

  getters: {
    totalItems: (state) => state.wishlistItems.length
  },

  actions: {
    addWishlistItem(product: any) {
      const productOnWishlist = this.wishlistItems.find(item => item.id === product.id)
      
      if (!productOnWishlist) {
        const today = new Date()
        const newProduct = {
          ...product,
          time: today.toLocaleString('en-us', { month: 'short', day: 'numeric', year: 'numeric' })
        }

        this.wishlistItems.push(newProduct)
      }
    },

    removeWishlistItem(product: any) {
      const index = this.wishlistItems.findIndex(item => item.id === product.id)
      if (index !== -1) {
        this.wishlistItems.splice(index, 1)
      }
    }
  }
})