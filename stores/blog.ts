import { defineStore } from 'pinia';

import blogsData from '../app/content/blogs/blogs.json';
import categoriesData from '../app/content/blogs/categories.json';

interface Blog {
  id: number;
  title: string;
  category: number | string;
  tags: string[];
  [key: string]: any;
}

export const useBlogStore = defineStore('blog', {
  state: () => ({
    allItems: blogsData.data as Blog[],
    items: blogsData.data as Blog[],
    categories: categoriesData.data as any[]
  }),
  
  getters: {
    getBlogById: (state) => (id: number | string) => {
      return state.allItems.find((blog) => blog.id === +id);
    },
    getCategoryById: (state) => (id: number | string) => {
      return state.categories.find((category) => category.id === +id);
    }
  },

  actions: {
    filterItemsBySearch(keyword: string) {
      if (keyword) {
        const lowerKeyword = keyword.toLowerCase();
        this.items = this.allItems.filter(item => 
          item.title.toLowerCase().includes(lowerKeyword)
        );
      } else {
        this.items = this.allItems;
      }
    },

    filterItemsByCategory(category: number | string) {
      if (category) {
        this.items = this.allItems.filter(item => item.category == category);
      } else {
        this.items = this.allItems;
      }
    },

    filterItemsByTag(tag: string) {
      if (tag) {
        const lowerTag = tag.toLowerCase();
        this.items = this.allItems.filter(item => 
          item.tags.some(t => t.toLowerCase() === lowerTag)
        );
      } else {
        this.items = this.allItems;
      }
    }
  }
});