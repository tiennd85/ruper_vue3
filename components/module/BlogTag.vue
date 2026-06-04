<template>
    <div :class="['block block-post-tags', modClass]">
        <div class="block-widget-wrap">
            <div v-if="title || subTitle" class="block-title">
                <h2>{{ title }}</h2>
                <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
            </div>
            <div class="block-content">
                <div class="post-tags-list">
                    <ul>
                        <li v-for="(tag, index) in tags" :key="index">
                            <NuxtLink :to="{ path: '/blogs', query: { tag: tag.toLowerCase() } }">
                                {{ tag }}
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
    modClass: String
})

const route = useRoute()
const blogStore = useBlogStore()

const tag = computed(() => route.query.tag || '')

const tags = computed(() => {
    const blogs = blogStore.allItems

    const tagSet = new Set<string>()

    blogs.forEach(blog => {
        if (blog.tags && Array.isArray(blog.tags)) {
            blog.tags.forEach(t => tagSet.add(t))
        }
    })

    return Array.from(tagSet)
})
</script>