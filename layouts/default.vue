<template>
  <div>
    <div id="page">
      <Header :header-layout="hLayout" :current-menu="menu" :position-menu="position" />
      
      <div id="site-main" :class="['site-main', { 'absolute' : hLayout == '1' || hLayout == '3' }]">
        <div id="main-content" class="main-content">
          <slot />
        </div>
      </div>
      
      <Footer :footer-layout="fLayout" />
    </div>

    <div class="back-top" @click="backTop">
      <i class="arrow_carrot-up"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from '#app'

const route = useRoute()

const hLayout = computed(() => route.meta.headerLayout || 1)
const menu = computed(() => route.meta.currentMenu || '')
const position = computed(() => route.meta.positionMenu || 'center')
const fLayout = computed(() => route.meta.footerLayout || 1)

const backTop = () => {
  if (process.client) {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
}
</script>