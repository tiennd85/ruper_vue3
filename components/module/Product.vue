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
          <ul :class="['nav nav-tabs layout-' + navTabLayout, { 'small-text': navTabSmallText }, { 'align-left': navTabAlignLeft }]" role="tablist">
            <li v-for="(cat, index) in cats" :key="index" class="nav-item">
              <a :class="['nav-link', { 'active': index == 0 }]" data-bs-toggle="tab" :href="'#cat-' + cat.id" role="tab">{{ cat.title }}</a>
            </li>
          </ul>
          <div class="tab-content">
            <div v-for="(cat, index) in cats" :key="index" :class="['tab-pane fade', { 'active show': index == 0 }]" :id="'cat-' + cat.id" role="tabpanel">
              <div class="products-list grid">
                <div class="row">
                  <div :class="cols == 2 ? 'col-xl-6 col-lg-6 col-md-6 col-sm-12' : 'col-xl-3 col-lg-4 col-md-4 col-sm-6'" v-for="(product, pIdx) in cat.products" :key="pIdx">
                    <ModuleProduct :product="product" :layout="layout" />
                    <Quickview :product="product" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="view == 'sidebar'" class="content-product-list">
          <ul class="products-list">
            <ModuleProduct v-for="(item, index) in items" :key="index" :product="item" view="sidebar" />
          </ul>
        </div>

        <div v-else-if="view == 'slider'" class="content-product-list slick-wrap">
          <div class="slick-sliders products-list grid" ref="slickElement">
            <div class="item-product" v-for="(item, index) in items" :key="index">
              <ModuleProduct :product="item" :layout="layout" />
              <Quickview :product="item" />
            </div>
          </div>
          <div v-if="viewAll" class="btn-all">
            <NuxtLink class="button-outline" to="/products">VIEW ALL</NuxtLink>
          </div>
        </div>

        <div v-else class="products-list grid">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6" v-for="(item, index) in items" :key="index">
              <ModuleProduct :product="item" :layout="layout" />
              <Quickview :product="item" />
            </div>
          </div>
        </div>

        <Compare />
      </div>
    </div>
  </div>
</template>

<script setup>
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

const slickElement = ref(null)

// 1. Lấy dữ liệu sản phẩm từ Nuxt Content (thay cho Vuex)
const { data: allProductsData } = await useAsyncData('all-products', () => 
  queryContent('products').findOne()
)
const allItems = computed(() => allProductsData.value?.body?.data || [])

// 2. Lấy dữ liệu categories từ file JSON riêng (ví dụ content/categories.json)
const { data: catsData } = await useAsyncData('categories', () => 
  queryContent('categories').findOne()
)

// Computed cho Tab Categories
const cats = computed(() => {
  const categories = catsData.value?.body?.data?.filter(cat => cat.tab === true) || []
  if (categories.length) {
    categories.forEach(cat => {
      const catProducts = allItems.value.filter(p => p.category == cat.id)
      cat.products = props.limit ? catProducts.slice(0, props.limit) : catProducts
    })
  }
  return categories
})

// Computed cho danh sách sản phẩm thông thường
const items = computed(() => {
  let products = [...allItems.value]
  if (props.filter === 'bestSeller') products = products.filter(p => p.bestSeller === true)
  if (props.filter === 'feature') products = products.filter(p => p.feature === true)
  if (props.filter === 'related') products = products.filter(p => p.related?.includes(props.category))
  
  return props.limit ? products.slice(0, props.limit) : products
})

// 3. Cấu hình Slick Options
const slickOptions = {
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,
  arrows: true,
  prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
  nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
}

onMounted(() => {
  if (window.$) {
    const $el = window.$(slickElement.value)
    
    // Khởi tạo Slick Slider nếu view là slider
    if (props.view === 'slider' && $el.length) {
      $el.slick(slickOptions)
      
      // Xử lý di chuyển mũi tên ra ngoài (giống hàm handleInit cũ)
      const $prev = $el.find('.fa-angle-left').detach()
      const $next = $el.find('.fa-angle-right').detach()
      
      $el.parent().prepend($prev)
      $el.parent().append($next)
      
      $prev.on('click', () => $el.slick('slickPrev'))
      $next.on('click', () => $el.slick('slickNext'))
    }

    // Refresh Slick khi chuyển Tab
    window.$('a[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
      window.$('.slick-sliders').slick('setPosition')
    })
  }
})
</script>