import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as any[],
    shippingCost: 0
  }),

  getters: {
    totalItems: (state) => {
      return state.cartItems.reduce((total, item) => total + parseInt(item.quantity), 0)
    },
    totalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + (item.salePrice * item.quantity), 0)
    }
  },

  actions: {
    addCartItem(product: any) {
      const productOnCart = this.cartItems.find(item => item.id === product.id)
      if (productOnCart) {
        productOnCart.quantity++
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
    },

    updateCartItem(product: any) {
      const index = this.cartItems.findIndex(item => item.id === product.id)
      if (index !== -1) {
        this.cartItems[index] = product
      }
    },

    removeCartItem(product: any) {
      const index = this.cartItems.findIndex(item => item.id === product.id)
      if (index !== -1) {
        this.cartItems.splice(index, 1)
      }
    },

    decreaseCartItem(product: any) {
      const productOnCart = this.cartItems.find(item => item.id === product.id)
      if (productOnCart && productOnCart.quantity > 1) {
        productOnCart.quantity--
      }
    },

    setShippingCost(cost: number) {
      this.shippingCost = cost
    }
  }
})