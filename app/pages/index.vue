<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <section class="section">
        <!-- Block Slides -->
        <ModulesSlide :slides="slides" />
      </section>

      <section class="section section-padding m-b-60">
        <div class="section-container">
          <!-- Block Banners -->
          <ModulesBanner :banners="banners1" :layout="1" />
        </div>
      </section>

      <section class="section section-padding">
        <div class="section-container">
          <!-- Block Products -->
          <ModulesProduct title="Best Seller" :limit="6" view="slider" :layout="2" filter="bestSeller" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Banners -->
          <ModulesBanner :banners="banners2" :layout="2" />
        </div>
      </section>

      <section class="section section-padding background-1 section-mb-l">
        <div class="section-container">
          <!-- Block Video -->
          <ModulesVideo :videos="videos" />
        </div>
      </section>

      <section class="section section-padding m-b-70">
        <div class="section-container">
          <!-- Block Feature -->
          <ModulesFeature :features="features" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

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
    $('body').removeClass()
    $('body').addClass('home')

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
</script>
