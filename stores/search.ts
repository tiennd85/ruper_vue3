import { defineStore } from 'pinia'

import productsData from '../app/content/products/products.json'

export const useSearchStore = defineStore('search', {
  state: () => ({
    products: productsData as any[], 
    searchItems: [] as any[]
  }),

  actions: {
    searchProducts(keyword: string) {
      const lowerKeyword = keyword.toLowerCase()
      this.searchItems = []

      if (lowerKeyword.length > 0) {
        this.searchItems = this.products.filter((product) => 
          product.title && product.title.toLowerCase().includes(lowerKeyword)
        )
      }
    }
  }
})