<template>
  <div id="primary" class="content-area">
    <div id="title" class="page-title">
      <div class="section-container">
        <div class="content-title-heading">
          <h1 class="text-title-heading">
            {{ title }}
          </h1>
        </div>
        <div class="breadcrumbs">
          <Breadcrumb :breadcrumbItems="breadcrumbItems" />
        </div>
      </div>
    </div>
    <div id="content" class="site-content" role="main">
      <div class="section-padding">
        <div class="section-container p-l-r">
          <div class="row">
            <div v-if="sidebar == 'left'" class="col-xl-3 col-lg-3 col-md-12 col-12 sidebar left-sidebar md-b-50">
              <!-- Block Product Categories -->
              <ModuleProductCat title="Categories" :padding="false" view="sidebar" :limit="10" />

              <!-- Block Product Filter -->
              <ModuleProductFilter title="Price" filter="price" />
              
              <!-- Block Product Filter -->
              <ModuleProductFilter title="Size" filter="size" />

              <!-- Block Product Filter -->
              <ModuleProductFilter title="Brands" filter="brand" />

              <!-- Block Products -->
              <ModuleProduct title="Feature Product" view="sidebar" filter="feature" :limit="3" />
            </div>

            <div :class="sidebar == 'none' ? 'col-xl-12 col-lg-12 col-md-12 col-12' : 'col-xl-9 col-lg-9 col-md-12 col-12'">
              <div class="products-topbar clearfix">
                <div class="products-topbar-left">
                  <div class="products-count">
                    Showing all {{ totalItems }} results
                  </div>
                </div>
                <div class="products-topbar-right">
                  <div class="products-sort dropdown">
                    <span class="sort-toggle dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{ order }}</span>
                    <ul class="sort-list dropdown-menu" x-placement="bottom-start">
                      <li class="active">
                        <button type="button" @click.prevent="sortProducts('default', 'Default sorting')">Default sorting</button>
                      </li>
                      <li>
                        <button type="button" @click.prevent="sortProducts('popularity', 'Sort by popularity')">Sort by popularity</button>
                      </li>
                      <li>
                        <button type="button" @click.prevent="sortProducts('rating', 'Sort by rating')">Sort by rating</button>
                      </li>
                      <li>
                        <button type="button" @click.prevent="sortProducts('price_low_high', 'Price: low to high')">Price: low to high</button>
                      </li>
                      <li>
                        <button type="button" @click.prevent="sortProducts('price_high_low', 'Price: high to low')">Price: high to low</button>
                      </li>
                    </ul>
                  </div>
                  <ul class="layout-toggle nav nav-tabs">
                    <li class="nav-item">
                      <a :class="['layout-grid', 'nav-link', { 'active' : view == 'grid' }]" data-toggle="tab" href="#layout-grid" role="tab">
                        <span class="icon-column">
                          <span class="layer first">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                          <span class="layer middle">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                          <span class="layer last">
                            <span></span>
                            <span></span>
                            <span></span>
                          </span>
                        </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a :class="['layout-list', 'nav-link', { 'active' : view == 'list' }]" data-toggle="tab" href="#layout-list" role="tab">
                        <span class="icon-column">
                          <span class="layer first">
                            <span></span>
                            <span></span>
                          </span>
                          <span class="layer middle">
                            <span></span>
                            <span></span>
                          </span>
                          <span class="layer last">
                            <span></span>
                            <span></span>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="tab-content">
                <div :class="['tab-pane', 'fade', { 'show active' : view == 'grid' }]" id="layout-grid" role="tabpanel">
                  <div class="products-list grid">
                    <div class="row">
                      <div v-for="(item, index) in items" :key="index" :class="sidebar == 'none' ? 'col-xl-3 col-lg-4 col-md-4 col-sm-6' : 'col-xl-4 col-lg-4 col-md-4 col-sm-6'">
                        <Product :product="item" />

                        <Quickview :product="item" />
                      </div>
                    </div>
                  </div>
                </div>
                <div :class="['tab-pane', 'fade', { 'show active' : view == 'list' }]" id="layout-list" role="tabpanel">
                  <div class="products-list list">
                    <div class="item-product" v-for="(item, index) in items" :key="index">
                      <Product :product="item" view="list" />

                      <Quickview :product="item" />
                    </div>
                  </div>
                </div>
              </div>

              <nav class="pagination">
                <ul class="page-numbers">
                  <li>
                    <button type="button" @click.prevent="updatePagination(currentPage - 1)" class="prev page-numbers">
                      Previous
                    </button>
                  </li>
                  <li v-for="i in totalPages">
                    <span v-if="i == currentPage" aria-current="page" class="page-numbers current">
                      {{ i }}
                    </span>
                    <button type="button" v-else @click.prevent="updatePagination(i)" class="page-numbers">
                      {{ i }}
                    </button>
                  </li>
                  <li>
                    <button type="button" @click.prevent="updatePagination(currentPage + 1)" class="next page-numbers">
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div v-if="sidebar == 'right'" class="col-xl-3 col-lg-3 col-md-12 col-12 sidebar right-sidebar md-b-50">
              <!-- Block Product Categories -->
              <ModuleProductCat title="Categories" :padding="false" view="sidebar" :limit="10" />

              <!-- Block Product Filter -->
              <ModuleProductFilter title="Price" filter="price" />
              
              <!-- Block Product Filter -->
              <ModuleProductFilter title="Size" filter="size" />

              <!-- Block Product Filter -->
              <ModuleProductFilter title="Brands" filter="brand" />

              <!-- Block Products -->
              <ModuleProduct title="Feature Product" view="sidebar" />
            </div>
          </div>
        </div>
      </div>

      <Compare />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'

const title = 'Product Shop';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Product Shop', active: true }
]

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

// State
const currentPage = ref(1)
const order = ref('Default sorting')

// Computed props
const limit = computed(() => route.query.sidebar === 'none' ? 8 : 9)
const view = computed(() => route.query.view || 'grid')
const sidebar = computed(() => route.query.sidebar || 'left')

const totalItems = computed(() => productStore.items.length)
const totalPages = computed(() => Math.ceil(totalItems.value / limit.value))

const items = computed(() => {
  const start = (currentPage.value - 1) * limit.value
  return productStore.items.slice(start, start + limit.value)
})

// Logic Filter
const applyFilters = () => {
  const category = route.query.cat || 0
  const style = route.query.style || 0
  productStore.filterItemsByCategory(category)
  productStore.filterItemsByStyle(style)
}

// Watchers
watch(() => route.query, () => {
  currentPage.value = 1
  applyFilters()
}, { deep: true })

// Methods
const updatePagination = (page: number) => {
  if (page > 0 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const sortProducts = (orderValue: string, orderText: string) => {
  order.value = orderText
  productStore.sortItems(orderValue)
}

definePageMeta({
  currentMenu: 'shop'
})

useHead({
  bodyAttrs: {
    class: 'shop'
  }
})
</script>