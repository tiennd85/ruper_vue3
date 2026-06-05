<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" />
      </section>

      <section class="section section-padding m-b-60">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners1" :layout="1" />
        </div>
      </section>

      <section class="section section-padding">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct title="Best Seller" :limit="6" view="slider" :layout="2" filter="bestSeller" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners2" :layout="2" />
        </div>
      </section>

      <section class="section section-padding background-1 section-mb-l">
        <div class="section-container">
          <!-- Block Video -->
          <ModuleVideo :videos="videos" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home1-slides', () => 
  queryContent('slides', 'slides_home1').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners 1
const { data: banners1Data } = await useAsyncData('home1-banners-1', () => 
  queryContent('banners', 'banners_home1_1').findOne()
)
const banners1 = computed(() => banners1Data.value?.body || [])

// Data Banners 2
const { data: banners2Data } = await useAsyncData('home1-banners-2', () => 
  queryContent('banners', 'banners_home1_2').findOne()
)
const banners2 = computed(() => banners2Data.value?.body || [])

// Data Videos
const { data: videosData } = await useAsyncData('home1-videos', () => 
  queryContent('videos', 'videos_home1').findOne()
)
const videos = computed(() => videosData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home1-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

definePageMeta({
  headerLayout: 1,
  currentMenu: 'home',
  positionMenu: 'center',
  footerLayout: 1
})

useHead({
  bodyAttrs: {
    class: 'home'
  }
})
</script>
