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
              <!-- Block Blog Search -->
              <ModuleBlogSearch />

              <!-- Block Blog Categories -->
              <ModuleBlogCat title="Categories" :limit="10" />

              <!-- Block Blog -->
              <ModuleBlog title="Recent Posts" :limit="3" />

              <!-- Block Blog Tags -->
              <ModuleBlogTag title="Tags" />
            </div>

            <div :class="sidebar == 'none' ? 'col-xl-12 col-lg-12 col-md-12 col-12' : 'col-xl-9 col-lg-9 col-md-12 col-12'">
              <div v-if="view == 'grid'" class="posts-list grid">
                <div class="row">
                  <div v-for="(item, index) in items" :key="index" class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <Blog :blog="item" />
                  </div>
                </div>
              </div>
              <div v-else class="posts-list list">
                <Blog v-for="(item, index) in items" :key="index" :blog="item" :layout="2" />
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
              <!-- Block Blog Search -->
              <ModuleBlogSearch />

              <!-- Block Blog Categories -->
              <ModuleBlogCat title="Categories" :limit="10" />

              <!-- Block Blog -->
              <ModuleBlog title="Recent Posts" :limit="3" />

              <!-- Block Blog Tags -->
              <ModuleBlogTag title="Tags" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'

const title = 'Blogs';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Blogs', active: true }
]

const route = useRoute()
const blogStore = useBlogStore()

// State
const currentPage = ref(1)
const limit = ref(9)

// Computed props
const view = computed(() => route.query.view || 'grid')
const sidebar = computed(() => route.query.sidebar || 'left')

const totalItems = computed(() => blogStore.items.length)
const totalPages = computed(() => Math.ceil(totalItems.value / limit.value))

const items = computed(() => {
  const start = (currentPage.value - 1) * limit.value
  return blogStore.items.slice(start, start + limit.value)
})

// Logic Filter
const applyFilters = () => {
  const category = route.query.cat || 0
  const keyword = route.query.s || ''
  const tag = route.query.tag || ''

  if (category) {
    blogStore.filterItemsByCategory(category)
  } else if (keyword) {
    blogStore.filterItemsBySearch(keyword)
  } else if (tag) {
    blogStore.filterItemsByTag(tag)
  } else {
    blogStore.filterItemsByCategory(0)
  }
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

definePageMeta({
  currentMenu: 'blog'
})

useHead({
  bodyAttrs: {
    class: 'blog'
  }
})
</script>