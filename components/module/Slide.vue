<template>
    <div :class="['block', 'block-sliders', 'layout-' + layout, { 'nav-left': navLeft }, { 'nav-center': navCenter }, { 'nav-vertical': navVertical }, { 'auto-height': autoHeight }, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="slick-sliders" ref="sliderElement">
                <div class="item" v-for="(slide, index) in slides" :key="index">
                    <div v-if="layout == '1'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="section-padding">
                            <div class="section-container">
                                <div class="item-info horizontal-start vertical-middle">
                                    <div class="content">
                                        <div v-if="slide.subtitle" v-html="slide.subtitle" class="subtitle-slider"></div>
                                        <h2 v-if="slide.title" v-html="slide.title" class="title-slider"></h2>
                                        <div v-if="slide.description" v-html="slide.description" class="description-slider"></div>
                                        <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                            {{ slide.button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '2'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-start vertical-middle">
                            <div class="content">
                                <div v-if="slide.subtitle" v-html="slide.subtitle" class="subtitle-slider"></div>
                                <h2 v-if="slide.title" v-html="slide.title" class="title-slider"></h2>
                                <div v-if="slide.description" v-html="slide.description" class="description-slider"></div>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '3'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="section-padding">
                            <div class="section-container">
                                <div class="item-info horizontal-start vertical-middle">
                                    <div class="content">
                                        <div v-if="slide.subtitle" v-html="slide.subtitle" class="subtitle-slider"></div>
                                        <h2 v-if="slide.title" v-html="slide.title" class="title-slider"></h2>
                                        <div v-if="slide.description" v-html="slide.description" class="description-slider"></div>
                                        <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                            {{ slide.button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '4'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-start vertical-bottom">
                            <div class="content">
                                <h2 v-if="slide.title" class="title-slider" v-html="slide.title"></h2>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '5'" class="item-content">
                        <div class="item-info">
                            <div class="content">
                                <div class="content-wrap">
                                    <h2 class="title-slider" v-html="slide.title"></h2>
                                    <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                        {{ slide.button.text }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                    </div>
                    <div v-else-if="layout == '6'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-center vertical-bottom text-center">
                            <div class="content">
                                <div class="subtitle-slider" v-html="slide.subtitle"></div>
                                <h2 class="title-slider" v-html="slide.title"></h2>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '7'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-end vertical-middle">
                            <div class="content">
                                <h2 class="title-slider" v-html="slide.title"></h2>
                                <div v-if="slide.description" v-html="slide.description" class="description-slider"></div>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '8'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-start vertical-middle">
                            <div class="content">
                                <div class="subtitle-slider" v-html="slide.subtitle"></div>
                                <h2 class="title-slider" v-html="slide.title"></h2>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '9'">
                        <div v-if="index % 2 && twoSide" class="item-content">
                            <div class="content-image">
                                <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                            </div>
                            <div class="item-info">
                                <div :class="['content', 'background-' + slide.background]">
                                    <div class="content-wrap">
                                        <h2 class="title-slider" v-html="slide.title"></h2>
                                        <div v-if="slide.description" v-html="slide.description" class="description-slider"></div>
                                        <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                            {{ slide.button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="item-content">
                            <div class="item-info">
                                <div :class="['content', 'background-' + slide.background]">
                                    <div class="content-wrap">
                                        <h2 class="title-slider" v-html="slide.title"></h2>
                                        <div v-if="slide.description" v-html="slide.description" class="description-slider"></div>
                                        <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                            {{ slide.button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="content-image">
                                <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '10'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-center vertical-middle">
                            <div class="content text-center">
                                <h2 class="title-slider" v-html="slide.title"></h2>
                                <div v-if="slide.description" v-html="slide.description" class="description-slider"></div>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '11'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-center vertical-middle">
                            <div class="content text-center">
                                <div v-if="slide.subtitle" v-html="slide.subtitle" class="subtitle-slider"></div>
                                <h2 class="title-slider" v-html="slide.title"></h2>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '12'" class="item-content">
                        <div class="content-image">
                            <img :width="slide.image.width" :height="slide.image.height" :src="slide.image.src" :alt="slide.title">
                        </div>
                        <div class="item-info horizontal-center vertical-middle">
                            <div class="content text-center">
                                <h2 class="title-slider" v-html="slide.title"></h2>
                                <NuxtLink v-if="slide.button" :to="slide.button.link" :class="slide.button.class">
                                    {{ slide.button.text }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="bgImageRound || bgImageCenter" class="slider-bg-image">
                <img v-if="bgImageRound" class="animation-round" width="105" height="105" :src="require('@/assets/img/' + bgImageRound)" alt="">
                <img v-if="bgImageCenter" class="image-center" width="17" height="20" :src="require('@/assets/img/' + bgImageCenter)" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    slides: Array,
    layout: { type: Number, default: 1 },
    navLeft: { type: Boolean, default: false },
    navCenter: { type: Boolean, default: false },
    navVertical: { type: Boolean, default: false },
    autoHeight: { type: Boolean, default: false },
    twoSide: { type: Boolean, default: false },
    bgImageRound: String,
    bgImageCenter: String
})

const sliderElement = ref(null)

onMounted(async() => {
    await nextTick()

    if (process.client && sliderElement.value) {
        const $ = window.$ || (await import('jquery')).default;
        await import('slick-carousel')
        
        $(sliderElement.value).slick({
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            arrows: false,
            dots: true,
            draggable: true,
            pauseOnHover: false,
            pauseOnFocus: false
        })
    }
})

onBeforeUnmount(() => {
    if (process.client && sliderElement.value) {
        const $slider = $(sliderElement.value);
    
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
    }
})
</script>