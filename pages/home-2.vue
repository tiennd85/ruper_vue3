<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section section-padding m-b-15">
        <div class="section-container large">
          <div class="block-widget-wrap">
            <!-- Block Slides -->
            <ModuleSlide :slides="slides" :layout="2" :navCenter="true" />
          </div>
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container large">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners" :layout="3" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container large">
          <!-- Block Products -->
          <ModuleProduct title="Latest Products" :limit="8" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container large">
          <!-- Block Lookbooks -->
          <ModuleLookbook :lookbooks="lookbooks" modClass="no-space" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container large">
          <!-- Block Testimonial -->
          <ModuleTestimonial :testimonials="testimonials" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" :noBorder="true" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home2-slides', () => 
  queryContent('slides', 'slides_home2').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home2-banners', () => 
  queryContent('banners', 'banners_home2').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Lookbooks
const { data: lookbooksData } = await useAsyncData('home2-lookbooks', () => 
  queryContent('banners', 'lookbooks_home2').findOne()
)
const lookbooks = computed(() => lookbooksData.value?.body || [])

// Data Testimonials
const { data: testimonialsData } = await useAsyncData('home2-testimonials', () => 
  queryContent('testimonials', 'testimonials').findOne()
)
const testimonials = computed(() => testimonialsData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home2-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

definePageMeta({
  headerLayout: 2,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 2
})

useHead({
  bodyAttrs: {
    class: 'home home-2 title-2'
  }
})
</script>