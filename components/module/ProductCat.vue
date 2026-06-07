<template>
    <div :class="['block block-product-cats', 'layout-' + layout, { 'slider' : view == 'slider' || layout == '5' }, { 'round-border': roundBorder }, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div :class="padding ? 'block-widget-wrap' : ''">
                <div v-if="view == 'sidebar'" class="product-cats-list">
                    <ul>
                        <li v-for="(item, index) in items" :key="index" :class="item.id == currentCat ? 'current' : ''">
                            <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                {{ item.title }} <span class="count">{{ item.count }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div v-else-if="view == 'slider'" class="product-cats-list slick-wrap">
                    <i @click="slickPrev" class="slick-arrow fa fa-angle-left"></i>
                    <div class="slick-sliders content-category" ref="sliderElement">
                        <div v-for="(item, index) in items" :key="index" class="item item-product-cat">
                            <div class="item-product-cat-content">
                                <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                    <div class="item-image">
                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                    </div>
                                </NuxtLink>
                                <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">  
                                    <div class="item-image">
                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                    </div>
                                </NuxtLink>
                                <div class="product-cat-content-info">
                                    <h2 class="item-title">
                                        <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                        <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i @click="slickNext" class="slick-arrow fa fa-angle-right"></i>
                </div>
                <div v-else>
                    <div v-if="layout == '3'" class="row">
                        <div class="col-md-4 sm-m-b-50">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                        <img width="407" height="553" :src="items[0].image" :alt="items[0].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                        <h3>{{ items[0].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 center sm-m-b-50">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                        <img width="407" height="249" :src="items[1].image" :alt="items[1].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                        <h3>{{ items[1].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                        <img width="407" height="249" :src="items[2].image" :alt="items[2].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                        <h3>{{ items[2].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                        <img width="407" height="553" :src="items[3].image" :alt="items[3].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                        <h3>{{ items[3].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '4'" class="row">
                        <div v-for="(item, index) in items" :key="index" class="col-md-3 col-sm-6 sm-m-b-30">
                            <div class="item-product-cat-content">
                                <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                    <div class="item-image">
                                        <img width="330" height="300" :src="item.image" alt="item.title">
                                    </div>
                                </NuxtLink>        
                                <div class="product-cat-content-info">
                                    <h2 class="item-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '5'">
                        <div class="row">
                            <div class="col-md-3 sm-m-b-50">
                                <div class="product-cats-intro-wrap">
                                    <div class="product-cats-intro">
                                        <h2 class="title" v-html="introTitle"></h2>
                                        <div class="description" v-html="introDesc"></div>
                                        <div class="link">
                                            <NuxtLink :to="introBtnLink">
                                                {{ introBtnTitle }}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="product-cats-list slick-wrap">
                                    <i @click="slickPrev2" class="slick-arrow fa fa-angle-left"></i>
                                    <div class="slick-sliders content-category" ref="sliderElement2">
                                        <div v-for="(item, index) in items" :key="index" class="item item-product-cat">
                                            <div class="item-product-cat-content">
                                                <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                                    <div class="item-image">
                                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                                    </div>
                                                </NuxtLink>
                                                <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">  
                                                    <div class="item-image">
                                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                                    </div>
                                                </NuxtLink>
                                                <div class="product-cat-content-info">
                                                    <h2 class="item-title">
                                                        <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                                            {{ item.title }}
                                                        </NuxtLink>
                                                        <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                                            {{ item.title }}
                                                        </NuxtLink>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <i @click="slickNext2" class="slick-arrow fa fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '6'">
                        <div class="row">
                            <div v-for="(item, index) in items" :key="index" class="col-lg-3 col-md-6 md-b-10">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                            <img width="469" height="475" :src="item.image" :alt="item.title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '7'">
                        <div class="row">
                            <div class="col-md-4 sm-m-b-15">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                            <img width="407" height="553" :src="items[0].image" :alt="items[0].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                            <h3>{{ items[0].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 center sm-m-b-15">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                            <img width="407" height="249" :src="items[1].image" :alt="items[1].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                            <h3>{{ items[1].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                            <img width="407" height="249" :src="items[2].image" :alt="items[2].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                            <h3>{{ items[2].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                            <img width="407" height="553" :src="items[3].image" :alt="items[3].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                            <h3>{{ items[3].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="row">
                        <div v-for="(item, index) in items" :key="index" class="col-md-3 sm-m-b-30">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                        <img width="303" height="366" :src="item.image" :alt="item.title">
                                    </NuxtLink>
                                    <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                        <img width="303" height="366" :src="item.image" :alt="item.title">
                                    </NuxtLink>  
                                </div>
                                <div class="cat-title">
                                    <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                        <h3>{{ item.title }}</h3>
                                    </NuxtLink>
                                    <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                        <h3>{{ item.title }}</h3>
                                    </NuxtLink>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/product'

const props = defineProps({
    title: String,
    subTitle: String,
    introTitle: String,
    introDesc: String,
    introBtnTitle: String,
    introBtnLink: String,
    modClass: String,
    layout: { type: Number, default: 1 },
    source: { type: Number, default: 1 },
    type: { type: String, default: 'category' },
    limit: Number,
    view: String,
    roundBorder: { type: Boolean, default: false },
    padding: { type: Boolean, default: true }
})

const productStore = useProductStore()
const route = useRoute()

const items = computed(() => {
    const allProducts = productStore.allItems

    if (props.type == 'style') {
        const styles = productStore.styles
        return props.limit ? styles.slice(0, props.limit) : styles
    }

    const categoryKey = props.source == '1' ? 'categories' : `categories${props.source}`
    const rawCats = productStore[categoryKey as keyof typeof productStore] || []

    const cats = props.limit ? rawCats.slice(0, props.limit) : rawCats

    return cats.map(cat => ({
        ...cat,
        count: allProducts.filter(p => p.category == cat.id).length
    }))
})

const currentCat = computed(() => route.query.cat || 0)

const sliderElement = ref(null)
const slickPrev = () => {
    $(sliderElement.value).slick('slickPrev')
}
const slickNext = () => {
    $(sliderElement.value).slick('slickNext')
}

const sliderElement2 = ref(null)
const slickPrev2 = () => {
    $(sliderElement2.value).slick('slickPrev')
}
const slickNext2 = () => {
    $(sliderElement2.value).slick('slickNext')
}

onMounted(async() => {
    await nextTick()

    if (process.client && sliderElement.value) {
        const $ = window.$ || (await import('jquery')).default;
        await import('slick-carousel')
    
        $(sliderElement.value).slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            draggable: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
            nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',
            responsive: [
                { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1 } }, 
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, 
                { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }, 
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
        })
    }

    if (process.client && sliderElement2.value) {
        const $ = window.$ || (await import('jquery')).default;
        await import('slick-carousel')
    
        $(sliderElement2.value).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            infinite: true,
            arrows: false,
            dots: false,
            draggable: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
            nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } }, 
                { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
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

    if (process.client && sliderElement2.value) {
        const $slider = $(sliderElement2.value);

        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
    }
})
</script>