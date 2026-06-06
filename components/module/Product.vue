<template>
  <div :class="['block', 'block-products', { 'slider': view == 'slider' }, modClass]">
    <div class="block-widget-wrap">
      <div v-if="title || subTitle" :class="['block-title', { 'title-underline': titleUnderline }]">
        <h2>{{ title }}</h2>
        <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        <div v-if="titleRightText" class="title-right">
          <NuxtLink :to="titleRightLink">{{ titleRightText }}</NuxtLink>
        </div>
      </div>

      <div class="block-content">
        <div v-if="navTab">
          <div v-if="cats?.length" class="nav-tabs-wrapper">
            <ul :class="['nav nav-tabs layout-' + navTabLayout, { 'small-text': navTabSmallText }, { 'align-left': navTabAlignLeft }]" role="tablist">
              <li v-for="cat in cats" :key="cat.id" class="nav-item">
                <button 
                  :class="['nav-link', { 'active': activeTabId === cat.id }]" 
                  @click="activeTabId = cat.id"
                  type="button"
                  role="tab"
                >
                  {{ cat.title }}
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div 
                v-for="cat in cats" 
                :key="cat.id" 
                v-show="activeTabId === cat.id"
                class="tab-pane fade show active"
                role="tabpanel"
              >
                <div class="products-list grid">
                  <div class="row">
                    <div 
                      v-for="product in cat.products" 
                      :key="product.id"
                      :class="cols == '2' ? 'col-xl-6 col-lg-6 col-md-6 col-sm-12' : 'col-xl-3 col-lg-4 col-md-4 col-sm-6'"
                    >
                      <Product :product="product" :layout="layout" />
                      <Quickview :product="product" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="view == 'sidebar'" class="content-product-list">
          <ul class="products-list">
            <Product v-for="(item, index) in items" :key="index" :product="item" view="sidebar" />
          </ul>
        </div>

        <div v-else-if="view == 'slider'" class="content-product-list slick-wrap">
          <i @click="slickPrev" class="slick-arrow fa fa-angle-left"></i>
          <div class="slick-sliders products-list grid" ref="sliderElement">
            <div class="item-product" v-for="(item, index) in items" :key="index">
              <Product :product="item" :layout="layout" />
            </div>
          </div>
          <i @click="slickNext" class="slick-arrow fa fa-angle-right"></i>
          <div class="item-product" v-for="(item, index) in items" :key="index">
            <Quickview :product="item" />
          </div>
          <div v-if="viewAll" class="btn-all">
            <NuxtLink class="button-outline" to="/products">VIEW ALL</NuxtLink>
          </div>
        </div>

        <div v-else class="products-list grid">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6" v-for="(item, index) in items" :key="index">
              <Product :product="item" :layout="layout" />
              <Quickview :product="item" />
            </div>
          </div>
        </div>

        <Compare />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  title: String,
  subTitle: String,
  modClass: String,
  limit: Number,
  filter: String,
  category: Number,
  view: String,
  layout: { type: Number, default: 1 },
  cols: { type: Number, default: 4 },
  viewAll: { type: Boolean, default: false },
  navTab: { type: Boolean, default: false },
  navTabLayout: { type: Number, default: 1 },
  navTabSmallText: { type: Boolean, default: false },
  navTabAlignLeft: { type: Boolean, default: false },
  titleUnderline: { type: Boolean, default: false },
  titleRightText: String,
  titleRightLink: { type: String, default: '/products' }
})

const { data: allProductsData } = await useAsyncData('all-products', () => 
  queryContent('products', 'products').findOne()
)
const allItems = computed(() => allProductsData.value?.body || [])

const { data: catsData } = await useAsyncData('categories', () => 
  queryContent('products', 'categories').findOne()
)

const cats = computed(() => {
  const categories = catsData.value?.body?.filter(cat => cat.tab === true) || []
  
  return categories.map(cat => {
    const catProducts = allItems.value.filter(p => p.category == cat.id)
    return {
      ...cat,
      products: props.limit ? catProducts.slice(0, props.limit) : catProducts
    }
  })
})

const activeTabId = ref(null)

watchEffect(() => {
  if (cats.value.length > 0 && activeTabId.value === null) {
    activeTabId.value = cats.value[0].id
  }
})

const items = computed(() => {
  let products = [...allItems.value]
  if (props.filter === 'bestSeller') products = products.filter(p => p.bestSeller === true)
  if (props.filter === 'feature') products = products.filter(p => p.feature === true)
  if (props.filter === 'related') products = products.filter(p => p.related?.includes(props.category))
  
  return props.limit ? products.slice(0, props.limit) : products
})

const sliderElement = ref(null)
const slickPrev = () => {
  $(sliderElement.value).slick('slickPrev')
}
const slickNext = () => {
  $(sliderElement.value).slick('slickNext')
}

onMounted(async() => {
  await nextTick()

  if (process.client && sliderElement.value) {
    const $ = window.$ || (await import('jquery')).default;
    await import('slick-carousel')
    
    $(sliderElement.value).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      infinite: true,
      arrows: false,
      dots: false,
      draggable: true,
      touchMove: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      cssEase: 'linear',
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } }, 
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } }, 
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, vertical: !1, verticalSwiping: !1 } }, 
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, vertical: !1, verticalSwiping: !1 } }
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
})
</script>