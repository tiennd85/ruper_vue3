import { defineStore } from 'pinia'

import products from '~/content/products/products'
import categories from '~/content/products/categories'
import categories2 from '~/content/products/categories2'
import categories3 from '~/content/products/categories3'
import categories4 from '~/content/products/categories4'
import categories5 from '~/content/products/categories5'
import categories6 from '~/content/products/categories6'
import categories7 from '~/content/products/categories7'
import brands from '~/content/products/brands'
import styles from '~/content/products/styles'

export const useProductStore = defineStore('product', {
  state: () => ({
    allItems: products,
    items: products,
    categories: categories,
    categories2: categories2,
    categories3: categories3,
    categories4: categories4,
    categories5: categories5,
    categories6: categories6,
    categories7: categories7,
    brands: brands,
    styles: styles
  }),

  getters: {
    getProductById: (state) => (id: number | string) => 
      state.allItems.find((product: any) => product.id === +id),
      
    getCategoryById: (state) => (id: number | string) => 
      state.categories.find((category: any) => category.id === +id)
  },

  actions: {
    calculateRating(product: any) {
      if (!product.reviews?.length) return 0
      const sum = product.reviews.reduce((acc: number, r: any) => acc + parseInt(r.rating), 0)
      return Math.round(sum / product.reviews.length)
    },

    sortItems(order: string) {
      const arr = [...this.items]
      if (order === 'popularity') {
        arr.sort((a, b) => (a.bestSeller && !b.bestSeller ? -1 : 0))
      } else if (order === 'rating') {
        arr.sort((a, b) => this.calculateRating(b) - this.calculateRating(a))
      } else if (order === 'price_low_high') {
        arr.sort((a, b) => a.salePrice - b.salePrice)
      } else if (order === 'price_high_low') {
        arr.sort((a, b) => b.salePrice - a.salePrice)
      } else {
        arr.sort((a, b) => a.id - b.id)
      }
      this.items = arr
    },

    filterItemsByCategory(category: any) {
      this.items = category ? this.allItems.filter(i => i.category === category) : this.allItems
    },

    filterItemsByPrice(priceRange: number[]) {
      this.items = this.allItems.filter(i => 
        parseFloat(i.salePrice) >= priceRange[0] && parseFloat(i.salePrice) <= priceRange[1]
      )
    },

    filterItemsBySize(size: string) {
      this.items = this.allItems.filter(item => 
        item.variants?.some((v: any) => 
          v.title === 'Size' && v.items?.some((s: any) => s.value === size && s.available)
        )
      )
    },

    filterItemsByStyle(style: string | null) {
      this.items = style ? this.allItems.filter(item => item.style === style) : this.allItems;
    },

    filterItemsByBrand(brand: string | null) {
      this.items = brand ? this.allItems.filter(item => item.brand === brand) : this.allItems;
    }
  }
})