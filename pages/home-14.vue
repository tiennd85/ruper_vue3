<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-70">
        <!-- Block Banners -->
        <ModuleBanner :banners="banners" :layout="14" /> 
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat :source="7" :layout="7" :limit="4" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <div class="row sm-m-0">
            <div class="col-md-6 sm-m-b-50 sm-p-0">
              <div class="block block-image text-center position-relative">
                <!-- Block Image -->
                <ModuleImage width="671" height="503" image="/img/banner/newsletter-2.jpg" alt="" :padding="false" />
                
                <!-- Block Image -->
                <ModuleImage imgClass="animation-round position-v-top position-h-center" width="106" height="105" image="/img/logo-intro.png" alt="" :padding="false" />
              </div>
            </div>
            <div class="col-md-6 sm-p-0">
              <div class="block block-lookbook layout-4 position-v-center">
                <div class="lookbook-intro-wrap m-l-0">
                  <div class="lookbook-intro">
                    <h2 class="title">Exclusive to Online Prints<br> &amp; Rugs Range</h2>
                    <div class="description">Shop from the comfort of home and order with the click of a button. Our brand-new exclusive to online print and rug collection showcases so much more than we have in-store.</div>
                    <a href="shop-grid-left.html" class="button button-black">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-padding top-border p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct title="Browse our Bestsellers" :limit="10" view="slider" filter="bestSeller" :viewAll="true" />
        </div>
      </section>

      <section class="section background-2 no-space m-b-70">
        <!-- Block Newsletter -->
        <ModuleNewsletter :layout="2" image="img/banner/newsletter-1.jpg" nTitle="Fancy $30* off your first order?" nSubTitle="Join our mailing list!" placeholder="Email address" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Testimonial -->
          <ModuleTestimonial title="Happy Clients" :testimonials="testimonials" :layout="2" :itemsShow="3" />
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
// Data Banners
const { data: bannersData } = await useAsyncData('home14-banners', () => 
  queryContent('banners', 'banners_home14').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home14-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

// Data Testimonials
const { data: testimonialsData } = await useAsyncData('home14-testimonials', () => 
  queryContent('testimonials', 'testimonials').findOne()
)
const testimonials = computed(() => testimonialsData.value?.body || [])

// Data Brands
const { data: brandsData } = await useAsyncData('home14-brands', () => 
  queryContent('products', 'brands').findOne()
)
const brands = computed(() => brandsData.value?.body || [])

definePageMeta({
  headerLayout: 14,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 14
})

useHead({
  bodyAttrs: {
    class: 'home home-14 title-14'
  }
})
</script>