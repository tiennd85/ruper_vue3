<template>
    <div :class="['block block-text', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content" v-html="content">
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    content: String
})
</script>