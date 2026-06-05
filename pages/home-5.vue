<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section section-padding m-b-60">
        <div class="section-container">
          <div class="block-widget-wrap">
            <!-- Block Slides -->
            <ModuleSlide :slides="slides" :layout="5" :navLeft="true" :autoHeight="true" />
          </div>
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct :navTab="true" :limit="4" />
        </div>
      </section>

      <section class="section section-padding m-b-80">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners" :layout="6" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Lookbooks -->
          <ModuleLookbook :lookbooks="lookbooks" :layout="3" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product -->
          <ModuleProduct title="New Products" :limit="10" view="slider" />
        </div>
      </section>

      <section class="section section-padding background-1 p-t-70 p-b-80 m-b-0">
        <div class="section-container">
          <!-- Block Newsletter -->
          <ModuleNewsletter :layout="3" :oneCol="true" nTitle="Let's be friends" nSubTitle="Sign up for the latest trends, products, and inspiration." placeholder="Email address" />
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
const { data: slidesData } = await useAsyncData('home5-slides', () => 
  queryContent('slides', 'slides_home5').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home5-banners', () => 
  queryContent('banners', 'banners_home5').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Lookbooks
const { data: lookbooksData } = await useAsyncData('home5-lookbooks', () => 
  queryContent('banners', 'lookbooks_home5').findOne()
)
const lookbooks = computed(() => lookbooksData.value?.body || [])

// Data Brands
const { data: brandsData } = await useAsyncData('home5-brands', () => 
  queryContent('products', 'brands').findOne()
)
const brands = computed(() => brandsData.value?.body || [])

definePageMeta({
  headerLayout: 5,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 5
})

useHead({
  bodyAttrs: {
    class: 'home home-5 title-5'
  }
})
</script>