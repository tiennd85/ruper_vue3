<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-80">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="8" :navCenter="true" />
      </section>

      <section class="section section-padding">
        <div class="section-container large-space">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6 md-content-full-height">
                <!-- Block Banners -->
                <ModuleBanner :banners="banners1" :layout="9" />
              </div>
              <div class="col-md-6">
                <div class="p-t-30">
                  <!-- Block Products -->
                  <ModuleProduct :navTab="true" :navTabSmallText="true" :navTabAlignLeft="true" :cols="2" :limit="4" modClass="fullwidth" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section background-5 p-t-50 p-b-50 m-b-70">
        <div class="section-container small-space">
          <!-- Block Countdown -->
          <ModuleCountdown endDate="2026-10-10" countdownTitle="Deals of the day." productTitle="Dining Table" productPrice="$150.00" productId="1" image="/img/banner/countdown-1.png" subImage1="/img/logo-intro.png" subImage2="/img/logo-intro-2.png" />
        </div>
      </section>

      <section class="section section-padding">
        <div class="section-container large-space">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="p-t-30">
                  <!-- Block Products -->
                  <ModuleProduct :navTab="true" :navTabSmallText="true" :navTabAlignLeft="true" :cols="2" :limit="4" modClass="fullwidth" />
                </div>
              </div>
              <div class="col-md-6">
                <!-- Block Banners -->
                <ModuleBanner :banners="banners2" :layout="9" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-padding newsletter-background m-b-70">
        <div class="section-container">
          <div class="row sm-m-0">
            <div class="col-md-6 sm-m-b-50 sm-p-0">
              <!-- Block Newsletter -->
              <ModuleNewsletter :layout="3" :oneCol="true" :alignLeft="true" :positionCenter="true" nTitle="Join our email list." nSubTitle="Sign up for the latest trends, products, and inspiration." placeholder="Email address" />
            </div>
            <div class="col-md-6 sm-p-0">
            </div>
          </div>
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Testimonial -->
          <ModuleTestimonial title="Customer Love" :testimonials="testimonials" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" :noBorder="true" />
        </div>
      </section>

      <section class="section m-b-0">
        <!-- Block Instagram -->
        <ModuleInstagram title="Let's Be Friends!" :slider="true" :instagrams="instagrams" modClass="no-space" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home8-slides', () => 
  queryContent('slides', 'slides_home8').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners 1
const { data: banners1Data } = await useAsyncData('home8-banners-1', () => 
  queryContent('banners', 'banners_home8_1').findOne()
)
const banners1 = computed(() => banners1Data.value?.body || [])

// Data Banners 2
const { data: banners2Data } = await useAsyncData('home8-banners-2', () => 
  queryContent('banners', 'banners_home8_2').findOne()
)
const banners2 = computed(() => banners2Data.value?.body || [])

// Data Testimonials
const { data: testimonialsData } = await useAsyncData('home8-testimonials', () => 
  queryContent('testimonials', 'testimonials').findOne()
)
const testimonials = computed(() => testimonialsData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home8-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

// Data Instagrams
const { data: instagramsData } = await useAsyncData('home8-instagrams', () => 
  queryContent('instagram', 'instagram').findOne()
)
const instagrams = computed(() => instagramsData.value?.body || [])

definePageMeta({
  headerLayout: 8,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 8
})

useHead({
  bodyAttrs: {
    class: 'home home-8 title-8'
  }
})
</script>