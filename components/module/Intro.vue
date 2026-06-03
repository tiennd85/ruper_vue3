<template>
    <div :class="['block block-intro', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="block-widget-wrap">
                <div class="intro-image">
                    <img :width="intro.image.width" :height="intro.image.height" class="animation-round" :src="require('@/assets/img/' + intro.image.src)" :alt="intro.image.alt">
                </div>
                <div class="intro-text">
                    {{ intro.description }}
                </div>
                <div class="intro-button">
                    <NuxtLink :to="intro.button.link" :class="intro.button.class">
                        {{ intro.button.text }}
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        intro: Object
    }
}
</script>