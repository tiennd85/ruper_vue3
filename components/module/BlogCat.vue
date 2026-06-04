<template>
    <div :class="['block block-post-cats', modClass]">
        <div class="block-widget-wrap">
            <div v-if="title || subTitle" class="block-title">
                <h2>{{ title }}</h2>
                <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
            </div>
            <div class="block-content">
                <div class="post-cats-list">
                    <ul>
                        <li v-for="(item, index) in items" :key="index" :class="item.id == currentCat ? 'current' : ''">
                            <NuxtLink :to="{ path: '/blogs', query: { cat: item.id } }">
                                {{ item.title }} <span class="count">{{ item.count }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogStore } from '~/stores/blog'

const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    limit: Number
})

const blogStore = useBlogStore()
const route = useRoute()

const items = computed(() => {
  const allBlogs = blogStore.allItems
  const allCategories = blogStore.categories
  
  const categories = props.limit ? allCategories.slice(0, props.limit) : allCategories

  return categories.map(cat => ({
    ...cat,
    count: allBlogs.filter(blog => blog.category === cat.id).length
  }))
})

const currentCat = computed(() => route.query.cat || 0)
</script>