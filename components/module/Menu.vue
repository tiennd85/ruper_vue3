<template>
    <div :class="['block block-menu', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <ul :class="[{ 'topbar-menu' : topBar }]">
                <li v-for="(menu, index) in menus" :key="index">
                    <NuxtLink v-if="menu.link" :to="menu.link">
                        {{ menu.title }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    menus: Array,
    topBar: { type: Boolean, default: false }
})
</script>