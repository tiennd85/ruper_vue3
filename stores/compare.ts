import { defineStore } from 'pinia'

export const useCompareStore = defineStore('compare', {
  // State
  state: () => ({
    compareItems: [] as any[]
  }),

  // Getters
  getters: {
    totalItems: (state) => state.compareItems.length
  },

  // Actions
  actions: {
    addCompareItem(product: any) {
      const exists = this.compareItems.find(item => item.id === product.id)
      
      if (!exists) {
        if (this.compareItems.length >= 3) {
          this.compareItems.shift()
        }
        this.compareItems.push(product)
      }
    },

    removeCompareItem(product: any) {
      const index = this.compareItems.findIndex(item => item.id === product.id)
      if (index !== -1) {
        this.compareItems.splice(index, 1)
      }
    }
  }
})