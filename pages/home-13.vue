<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="9" :autoHeight="true" :navLeft="true" modClass="diff-col" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Shop by Style" type="style" :limit="10" :layout="2" />
        </div>
      </section>

      <section class="section section-padding background-11 p-t-70 p-b-70 m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Shop by Department" view="slider" :limit="10" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct :navTab="true" :limit="4" />
        </div>
      </section>

      <section class="section m-b-70">
        <!-- Block Lookbook -->
        <ModuleLookbook :lookbooks="lookbooks" :layout="3" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
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
    </div>
  </div>
</template>

<script setup lang="ts">
// Data Slides
const { data: slidesData } = await useAsyncData('home13-slides', () => 
  queryContent('slides', 'slides_home13').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Lookbooks
const { data: lookbooksData } = await useAsyncData('home13-lookbooks', () => 
  queryContent('banners', 'lookbooks_home13').findOne()
)
const lookbooks = computed(() => lookbooksData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home13-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

definePageMeta({
  headerLayout: 13,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 13
})

useHead({
  bodyAttrs: {
    class: 'home home-13 title-13'
  }
})
</script>