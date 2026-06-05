<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section section-padding m-b-60">
        <div class="section-container">
          <div class="section-row">
            <div class="section-column left sm-m-b">
              <div class="block-widget-wrap">
                <!-- Block Slides -->
                <ModuleSlide :slides="slides" :layout="4" :autoHeight="true" />
              </div>
            </div>

            <div class="section-column right">
              <div class="block-widget-wrap">
                <!-- Block Banners -->
                <ModuleBanner :banners="banners" :layout="5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct title="Weekly Selection" subTitle="Shop living room furniture, crafted by designers all over the world" :limit="8" />
        </div>
      </section>

      <section class="section section-padding m-b-90">
        <div class="section-container">
          <!-- Block Lookbooks -->
          <ModuleLookbook :lookbooks="lookbooks" :layout="2" />
        </div>
      </section>

      <section class="section section-padding background-3 p-t-70 p-b-70 m-b-60">
        <div class="section-container">
          <!-- Block Feature -->
          <ModuleFeature :features="features" :limit="3" :noBorder="true" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Blog -->
          <ModuleBlog title="Our Blog" subTitle="Shop living room furniture, crafted by designers all over the world" :limit="6" view="slider" :layout="2" />
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
// Data Slides
const { data: slidesData } = await useAsyncData('home4-slides', () => 
  queryContent('slides', 'slides_home4').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home4-banners', () => 
  queryContent('banners', 'banners_home4').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Lookbooks
const { data: lookbooksData } = await useAsyncData('home4-lookbooks', () => 
  queryContent('banners', 'lookbooks_home4').findOne()
)
const lookbooks = computed(() => lookbooksData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home4-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])

definePageMeta({
  headerLayout: 4,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 4
})

useHead({
  bodyAttrs: {
    class: 'home home-4 title-4'
  }
})
</script>