import { defineStore } from 'pinia';

import blogsData from '../app/content/blogs/blogs.json';
import categoriesData from '../app/content/blogs/categories.json';

export const useBlogStore = defineStore('blog', {
  // State
  state: () => ({
    allItems: blogsData.data,
    items: blogsData.data,
    categories: categoriesData.data
  }),
  
  // Getters
  getters: {
    getBlogById: (state) => (id) => {
      return state.allItems.find((blog) => blog.id === +id);
    },
    getCategoryById: (state) => (id) => {
      return state.categories.find((category) => category.id === +id);
    }
  },

  // Actions
  actions: {
    filterItemsBySearch(keyword) {
      if (keyword) {
        this.items = this.allItems.filter(item => 
          item.title.toLowerCase().includes(keyword.toLowerCase())
        );
      } else {
        this.items = this.allItems;
      }
    },

    filterItemsByCategory(category) {
      if (category) {
        this.items = this.allItems.filter(item => item.category == category);
      } else {
        this.items = this.allItems;
      }
    },

    filterItemsByTag(tag) {
      if (tag) {
        this.items = this.allItems.filter(item => 
          item.tags.map(a => a.toLowerCase()).includes(tag.toLowerCase())
        );
      } else {
        this.items = this.allItems;
      }
    }
  }
});