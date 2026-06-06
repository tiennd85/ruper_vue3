<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-80">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="7" :autoHeight="true" :navCenter="true" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat :layout="3" :source="2" :limit="4" />
        </div>
      </section>

      <section class="section section-padding top-border p-t-70">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct :navTab="true" :navTabLayout="2" :limit="4" />
        </div>
      </section>

      <section class="section content-outside background-1">
        <!-- Block Banners -->
        <ModuleBanner :banners="banners" :slider="true" modClass="fullwidth" />
      </section>

      <section class="section section-padding top-border p-t-50 p-b-50 m-b-0">
        <div class="section-container">
          <div class="row sm-m-0">
            <div class="col-md-6 sm-m-b-50 sm-p-0">
              <!-- Block Newsletter -->
              <ModuleNewsletter :layout="3" :oneCol="true" :alignLeft="true" :positionCenter="true" nTitle="Join our email list." nSubTitle="Sign up for the latest trends, products, and inspiration." placeholder="Email address" />
            </div>
            <div class="col-md-6 sm-p-0">
              <div class="block block-image text-center position-relative">
                <!-- Block Image -->
                <ModuleImage width="671" height="503" image="/img/banner/newsletter-2.jpg" alt="" :padding="false" />
                
                <!-- Block Image -->
                <ModuleImage imgClass="animation-round position-v-top position-h-center" width="106" height="105" image="/img/logo-intro.png" alt="" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section m-b-0">
        <!-- Block Instagram -->
        <ModuleInstagram :slider="true" :instagrams="instagrams" modClass="no-space" />
      </section>

      <section class="section section-padding p-t-70 m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" :limit="3" :layout="2" :noBorder="true" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home7-slides', () => 
  queryContent('slides', 'slides_home7').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home7-banners', () => 
  queryContent('banners', 'banners_home7').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Instagrams
const { data: instagramsData } = await useAsyncData('home7-instagrams', () => 
  queryContent('instagram', 'instagram').findOne()
)
const instagrams = computed(() => instagramsData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home7-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

definePageMeta({
  headerLayout: 7,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 7
})

useHead({
  bodyAttrs: {
    class: 'home home-7 title-7'
  }
})
</script>