<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section">
        <!-- Block Slides -->
        <ModulesSlide :slides="slides" />
      </section>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const { data: slidesData } = await useAsyncData('home-slides', () => 
  queryContent('slides', 'slides_home1').findOne()
)
const slides = computed(() => slidesData.value?.body || [])

/*
// Data Banners1
const { data: banners1Data } = await useAsyncData('home-banners-1', () => 
  queryContent('banners', 'banners_home1_1').findOne()
)
const banners1 = computed(() => banners1Data.value?.body || [])

// Data Banners2
const { data: banners2Data } = await useAsyncData('home-banners-2', () => 
  queryContent('banners', 'banners_home1_2').findOne()
)
const banners2 = computed(() => banners2Data.value?.body || [])

// Data Videos
const { data: videosData } = await useAsyncData('home-videos', () => 
  queryContent('videos', 'videos_home1').findOne()
)
const videos = computed(() => videosData.value?.body || [])

// Data Features
const { data: featuresData } = await useAsyncData('home-features', () => 
  queryContent('features', 'features').findOne()
)
const features = computed(() => featuresData.value?.body || [])
*/

useHead({
  bodyAttrs: {
    class: 'home'
  }
})

onMounted(() => {
 
})

/*
export default {
  name: 'Home1',
  computed: {
    slides() {
      return this.$store.state.slides.slides_home1
    },
    banners1() {
      return this.$store.state.banners.banners_home1_1
    },
    banners2() {
      return this.$store.state.banners.banners_home1_2
    },
    videos() {
      return this.$store.state.videos.videos_home1
    },
    features() {
      return this.$store.state.features.features
    }
  },
  mounted() {
    // Class of body tag
    window.$('body').removeClass()
    window.$('body').addClass('home')

    // Layout of header
    this.$nuxt.$emit('headerLayout', 1)

    // Current menu
    this.$nuxt.$emit('currentMenu', 'home')

    // Position menu
    this.$nuxt.$emit('positionMenu', 'center')

    // Layout of footer
    this.$nuxt.$emit('footerLayout', 1)
  }
}
*/
</script>
