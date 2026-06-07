<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section background-8 m-b-0 p-t-20 p-b-20">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" :limit="3" :layout="4" :noBorder="true" :noDesc="true" />
        </div>
      </section>

      <section class="section m-b-70">
        <!-- Block Parallax -->
        <ModuleParallax :parallaxs="parallaxs" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat :layout="4" :source="4" :limit="4" />
        </div>
      </section>

      <section class="section background-9 section-padding p-t-80 p-b-70 m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat :layout="5" :source="5" introTitle="Shop <br>by trend" introDesc="Style any outdoor area with some careful study and sound decisions." introBtnTitle="All Categories" introBtnLink="/products" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners" :layout="12" /> 
        </div>
      </section>

      <section class="section section-padding background-6 p-t-70 p-b-80 m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Our Collection" view="slider" :roundBorder="true" :limit="10" />
        </div>
      </section>

      <section class="section section-padding">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct :navTab="true" :navTabLayout="2" :limit="4" />
        </div>
      </section>

      <section class="section section-padding background-10 p-t-70 p-b-70 m-b-70">
        <div class="section-container">
          <!-- Block Blog -->
          <ModuleBlog title="Style Ideas" :limit="6" view="slider" :layout="2" modClass="white-bg" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Testimonial -->
          <ModuleTestimonial title="What Our Customers Say" :testimonials="testimonials" :layout="2" :itemsShow="3" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-50">
        <div class="section-container">
          <!-- Block Newsletter -->
          <ModuleNewsletter :layout="3" nTitle="Subscribe to get $50 off* your order" nSubTitle="Sign up for the latest trends, products, and inspiration." placeholder="Email address" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Features
const { data: featuresData } = await useAsyncData('home11-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

// Data Parallax
const { data: parallaxsData } = await useAsyncData('home11-parallaxs', () => 
  queryContent('parallaxs', 'parallaxs').findOne()
)
const parallaxs = computed(() => parallaxsData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home11-banners', () => 
  queryContent('banners', 'banners_home11').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Testimonials
const { data: testimonialsData } = await useAsyncData('home11-testimonials', () => 
  queryContent('testimonials', 'testimonials').findOne()
)
const testimonials = computed(() => testimonialsData.value?.body || [])

definePageMeta({
  headerLayout: 11,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 11
})

useHead({
  bodyAttrs: {
    class: 'home home-11 title-11'
  }
})
</script>