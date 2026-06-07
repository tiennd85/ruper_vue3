<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section m-b-70">
        <!-- Block Slides -->
        <ModuleSlide :slides="slides" :layout="10" :navCenter="true" modClass="color-white" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Our Collection" view="slider" :limit="10" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Banners -->
          <ModuleBanner :banners="banners" :layout="11" />
        </div>
      </section>

      <section class="section section-padding">
        <div class="section-container">
          <!-- Block Products -->
          <ModuleProduct title="Best Seller" :limit="6" view="slider" :layout="2" filter="bestSeller" />
        </div>
      </section>

      <section class="section m-b-70">
        <!-- Block Lookbook -->
        <ModuleLookbook :lookbooks="lookbooks" :layout="4" modClass="no-space" />
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Product Categories -->
          <ModuleProductCat title="Trending" :layout="2" :source="3" :limit="4" modClass="items-equal" />
        </div>
      </section>

      <section class="section section-padding background-7 p-t-70 p-b-80 m-b-0">
        <div class="section-container">
          <!-- Block Newsletter -->
          <ModuleNewsletter :layout="3" :oneCol="true" nTitle="Let's be friends" nSubTitle="Sign up for the latest trends, products, and inspiration." placeholder="Email address" />
        </div>
      </section>

      <section class="section section-padding p-t-20 m-b-20">
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
const { data: slidesData } = await useAsyncData('home10-slides', () => 
  queryContent('slides', 'slides_home10').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

// Data Banners
const { data: bannersData } = await useAsyncData('home10-banners', () => 
  queryContent('banners', 'banners_home10').findOne()
)
const banners = computed(() => bannersData.value?.body || [])

// Data Lookbooks
const { data: lookbooksData } = await useAsyncData('home10-lookbooks', () => 
  queryContent('banners', 'lookbooks_home10').findOne()
)
const lookbooks = computed(() => lookbooksData.value?.body || [])

// Data Brands
const { data: brandsData } = await useAsyncData('home10-brands', () => 
  queryContent('products', 'brands').findOne()
)
const brands = computed(() => brandsData.value?.body || [])

definePageMeta({
  headerLayout: 10,
  currentMenu: 'home',
  positionMenu: 'left',
  footerLayout: 10
})

useHead({
  bodyAttrs: {
    class: 'home home-10 title-10'
  }
})
</script>