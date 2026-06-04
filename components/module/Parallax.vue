<template>
    <div :class="['block block-parallax', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="content">
                <h4 class="subtitle">{{ parallax.subtitle }}</h4>
                <h2 class="title">{{ parallax.title }}</h2>
                <div class="description">{{ parallax.description }}</div>
                <NuxtLink :class="parallax.button.class" :to="parallax.button.link">
                    {{ parallax.button.text }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    subTitle: String,
    parallax: Object,
    modClass: String
})
</script>