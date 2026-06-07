<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-0">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="9" :navLeft="true" :autoHeight="true" :twoSide="true" />
      </section>

      <section class="section section-padding background-6 p-t-70 p-b-80 m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Our Collection" view="slider" :roundBorder="true" :limit="10" />
        </div>        
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container large">
          <!-- Block Products -->
          <ModuleProduct title="Latest Products" :limit="8" />
        </div>
      </section>

      <section class="section no-space m-b-0">
        <div class="row">
          <div class="col-md-6">
            <!-- Block Banners -->
            <ModuleBanner :banners="banners" :layout="10" :fullHeight="true" />
          </div>
          <div class="col-md-6">
            <div class="column-background-wrap">
              <!-- Block Posts -->
              <ModuleBlog :limit="3" :layout="3" />
            </div>
          </div>
        </div>
      </section>

      <section class="section section-padding p-t-20 m-b-20">
        <div class="section-container">
          <!-- Block Image -->
          <ModuleImage :images="brands" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home9-slides', () => 
  queryContent('slides', 'slides_home9').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home9-banners', () => 
  queryContent('banners', 'banners_home9').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Brands
const { data: brandsData } = await useAsyncData('home9-brands', () => 
  queryContent('products', 'brands').findOne()
)
const brands = computed(() => brandsData.value?.body || [])

definePageMeta({
  headerLayout: 9,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 9
})

useHead({
  bodyAttrs: {
    class: 'home home-9 title-9'
  }
})
</script>