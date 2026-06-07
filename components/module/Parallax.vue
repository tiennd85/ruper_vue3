<template>
    <div :class="['block block-parallax', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="content">
                <h4 class="subtitle">{{ parallaxs[0].subtitle }}</h4>
                <h2 class="title">{{ parallaxs[0].title }}</h2>
                <div class="description">{{ parallaxs[0].description }}</div>
                <NuxtLink :class="parallaxs[0].button.class" :to="parallaxs[0].button.link">
                    {{ parallaxs[0].button.text }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    subTitle: String,
    parallaxs: Array,
    modClass: String
})
</script>