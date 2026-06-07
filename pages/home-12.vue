<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section section-small-padding m-t-10 m-b-10">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="11" :autoHeight="true" :navCenter="true" modClass="color-white" />
      </section>

      <section class="section section-small-padding">
        <!-- Block Product Categories -->
        <ModuleProductCat :source="6" :layout="6" :limit="4" :padding="false" modClass="x-small-space" />
      </section>

      <section class="section section-padding m-b-30">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct title="New Arrivals" :limit="6" view="slider" :titleUnderline="true" titleRightText="View all new arrivals" titleRightLink="/products" />
        </div>
      </section>

      <section class="section top-border p-t-70 m-b-70">
        <!-- Block Banners -->
        <ModuleBanner title="Rupper Exclusive Online Furniture Store" :banners="banners" :layout="13" :titleBig="true" /> 
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
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
const { data: slidesData } = await useAsyncData('home12-slides', () => 
  queryContent('slides', 'slides_home12').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home12-banners', () => 
  queryContent('banners', 'banners_home12').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Testimonials
const { data: testimonialsData } = await useAsyncData('home12-testimonials', () => 
  queryContent('testimonials', 'testimonials').findOne()
)
const testimonials = computed(() => testimonialsData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home12-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

definePageMeta({
  headerLayout: 12,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 12
})

useHead({
  bodyAttrs: {
    class: 'home home-12 title-12'
  }
})
</script>