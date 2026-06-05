<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-70">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="3" :navVertical="true" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Intro -->
          <ModuleIntro :intros="intros" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners" :layout="4" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Shop by Department" view="slider" :limit="10" />
        </div>
      </section>

      <section class="section background-2 no-space m-b-70">
        <!-- Block Newsletter -->
        <ModuleNewsletter :layout="2" image="/img/banner/newsletter-1.jpg" nTitle="Fancy $30* off your first order?" nSubTitle="Join our mailing list!" placeholder="Email address" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Shop by Style" type="style" :limit="10" :layout="2" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Product -->
          <ModuleProduct title="Browse our Bestsellers" :limit="10" view="slider" filter="bestSeller" :viewAll="true" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Testimonial -->
          <ModuleTestimonial title="What Our Customers Say" :testimonials="testimonials" :layout="2" :itemsShow="3" />
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
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home3-slides', () => 
  queryContent('slides', 'slides_home3').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Intros
const { data: introsData } = await useAsyncData('home3-intros', () => 
  queryContent('intros', 'intros').findOne()
)
const intros = computed(() => introsData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home3-banners', () => 
  queryContent('banners', 'banners_home3').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Testimonials
const { data: testimonialsData } = await useAsyncData('home3-testimonials', () => 
  queryContent('testimonials', 'testimonials').findOne()
)
const testimonials = computed(() => testimonialsData.value?.body || [])

// Data Brands
const { data: brandsData } = await useAsyncData('home3-brands', () => 
  queryContent('products', 'brands').findOne()
)
const brands = computed(() => brandsData.value?.body || [])

definePageMeta({
  headerLayout: 3,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 3
})

useHead({
  bodyAttrs: {
    class: 'home home-3 title-3'
  }
})
</script>