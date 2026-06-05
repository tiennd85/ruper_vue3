<template>
    <div :class="['block block-intro', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="block-widget-wrap">
                <div class="intro-image">
                    <img :width="intros[0].image.width" :height="intros[0].image.height" class="animation-round" :src="intros[0].image.src" :alt="intros[0].image.alt">
                </div>
                <div class="intro-text">
                    {{ intros[0].description }}
                </div>
                <div class="intro-button">
                    <NuxtLink :to="intros[0].button.link" :class="intros[0].button.class">
                        {{ intros[0].button.text }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    intros: Array
})
</script>