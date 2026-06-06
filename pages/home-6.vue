<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-0">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="6" :navVertical="true" bgImageRound="/img/logo-intro.png" bgImageCenter="/img/logo-intro-2.png" />
      </section>

      <section class="section m-b-70">
        <!-- Block Banners -->
        <ModuleBanner :banners="banners1" :layout="7" />
      </section>

      <section class="section section-padding">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct title="Best Seller" :limit="6" view="slider" :layout="2" filter="bestSeller" />
        </div>
      </section>

      <section class="section section-padding background-3 p-t-70 p-b-70 m-b-80">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features2" :limit="3" :layout="3" :noBorder="true" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners2" :layout="8" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Our Collection" view="slider" :roundBorder="true" :limit="10" />
        </div>
      </section>

      <section class="section section-padding background-4 p-t-70 p-b-70 m-b-70">
        <div class="section-container">
          <!-- Block Blog -->
          <ModuleBlog title="Journal" :limit="6" view="slider" :layout="2" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Instagram -->
          <ModuleInstagram title="Let's Be Friends!" :instagrams="instagrams" />
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
const { data: slidesData } = await useAsyncData('home6-slides', () => 
  queryContent('slides', 'slides_home6').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners 1
const { data: banners1Data } = await useAsyncData('home6-banners-1', () => 
  queryContent('banners', 'banners_home6_1').findOne()
)
const banners1 = computed(() => banners1Data.value?.body || [])

// Data Banners 2
const { data: banners2Data } = await useAsyncData('home6-banners-2', () => 
  queryContent('banners', 'banners_home6_2').findOne()
)
const banners2 = computed(() => banners2Data.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home6-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

// Data Features 2
const { data: features2Data } = await useAsyncData('home6-features-2', () => 
  queryContent('features', 'features2').findOne()
)
const features2 = computed(() => features2Data.value?.body || [])

// Data Instagrams
const { data: instagramsData } = await useAsyncData('home6-instagrams', () => 
  queryContent('instagram', 'instagram').findOne()
)
const instagrams = computed(() => instagramsData.value?.body || [])

definePageMeta({
  headerLayout: 6,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 6
})

useHead({
  bodyAttrs: {
    class: 'home home-6 title-6'
  }
})
</script>