<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li 
                v-for="(item, index) in breadcrumbItems" 
                :key="index" 
                :class="['breadcrumb-item', { 'active': !item.to }]"
                :aria-current="!item.to ? 'page' : undefined"
            >
                <NuxtLink v-if="item.to" :to="item.to">{{ item.text }}</NuxtLink>
                <span v-else>{{ item.text }}</span>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
defineProps<{
    breadcrumbItems: { text: string; to?: string }[]
}>()
</script>