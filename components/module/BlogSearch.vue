<template>
    <div :class="['block block-post-search', modClass]">
        <div class="block-widget-wrap">
            <div v-if="title || subTitle" class="block-title">
                <h2>{{ title }}</h2>
                <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
            </div>
            <div class="block-content">
                <form class="search-from" @submit.prevent="handleSubmit">
                    <input type="text" v-model="keyword" name="s" class="s" placeholder="Search...">
                    <button class="btn" type="submit">
                        <i class="icon-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String
})

const router = useRouter()
const route = useRoute()

const keyword = ref(route.query.s as string || '')

const handleSubmit = () => {
    router.push({
        path: '/blogs',
        query: { s: keyword.value }
    })
}
</script>