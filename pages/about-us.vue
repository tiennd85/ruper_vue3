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
      <div class="page-about-us">
        <section class="section section-padding m-b-70">
          <div class="section-container">
            <!-- Block Banners (Layout 9) -->
            <ModuleBanner :banners="banners1" :layout="15" />
          </div>
        </section>

        <section class="section section-padding m-b-70">
          <div class="section-container">
            <!-- Block Banners (Layout 10) -->
            <ModuleBanner :banners="banners2" :layout="16" />
          </div>
        </section>

        <section class="section section-padding m-b-70">
          <div class="section-container">
            <!-- Block Feature -->
            <ModuleFeature :features="features" :noBorder="true" />
          </div>
        </section>

        <section class="section section-padding m-b-70">
          <div class="section-container">
            <!-- Block Banners -->
            <ModuleBanner :banners="banners3" :layout="16" position="right" :background="2" />
          </div>
        </section>

        <section class="section section-padding m-b-70">
          <div class="section-container large">
            <!-- Block Testimonial -->
            <ModuleTestimonial :testimonials="testimonials" />
          </div>
        </section>

        <section class="section section-padding top-border p-t-20 m-b-20">
          <div class="section-container">
            <!-- Block Image -->
            <ModuleImage :images="brands" />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const title = 'About Us';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'About Us', active: true }
]

// Data Banners 1
const { data: banners1Data } = await useAsyncData('about-us-banners-1', () => 
  queryContent('banners', 'banners_about_1').findOne()
)
const banners1 = computed(() => banners1Data.value?.body || [])

// Data Banners 2
const { data: banners2Data } = await useAsyncData('about-us-banners-2', () => 
  queryContent('banners', 'banners_about_2').findOne()
)
const banners2 = computed(() => banners2Data.value?.body || [])

// Data Banners 3
const { data: banners3Data } = await useAsyncData('about-us-banners-3', () => 
  queryContent('banners', 'banners_about_3').findOne()
)
const banners3 = computed(() => banners3Data.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('about-us-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

// Data Testimonials
const { data: testimonialsData } = await useAsyncData('about-us-testimonials', () => 
  queryContent('testimonials', 'testimonials').findOne()
)
const testimonials = computed(() => testimonialsData.value?.body || [])

// Data Brands
const { data: brandsData } = await useAsyncData('about-us-brands', () => 
  queryContent('products', 'brands').findOne()
)
const brands = computed(() => brandsData.value?.body || [])

definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'about-us footer-mt-0'
  }
})
</script>