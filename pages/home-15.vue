<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-70">
        <!-- Block Sliders -->
        <ModuleSlide :slides="slides" :layout="12" :autoHeight="true" :navCenter="true" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Our Collection" view="slider" :roundBorder="true" :limit="10" />
        </div>
      </section>

      <section class="section section-padding background-12 p-t-100 p-b-100 m-b-70">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners" :layout="8" />
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
          <div class="block-widget-wrap">
            <!-- Block Lookbook -->
            <ModuleLookbook :lookbooks="lookbooks" modClass="no-space color-white" :background="2" />
          </div>
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" :noBorder="true" />
        </div>
      </section>

      <section class="section m-b-0">
        <!-- Block Instagram -->
        <ModuleInstagram :slider="true" :instagrams="instagrams" modClass="no-space" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home15-slides', () => 
  queryContent('slides', 'slides_home15').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home15-banners', () => 
  queryContent('banners', 'banners_home15').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Lookbooks
const { data: lookbooksData } = await useAsyncData('home15-lookbooks', () => 
  queryContent('banners', 'lookbooks_home15').findOne()
)
const lookbooks = computed(() => lookbooksData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home15-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

// Data Instagrams
const { data: instagramsData } = await useAsyncData('home15-instagrams', () => 
  queryContent('instagram', 'instagram').findOne()
)
const instagrams = computed(() => instagramsData.value?.body || [])

definePageMeta({
  headerLayout: 15,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 15
})

useHead({
  bodyAttrs: {
    class: 'home home-15 title-15'
  }
})
</script>