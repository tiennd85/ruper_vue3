<template>
  <div>
    <div id="page">
      <Header :header-layout="hLayout" :current-menu="menu" :position-menu="position" />
      
      <div id="site-main" :class="['site-main', { 'absolute' : hLayout == '1' || hLayout == '3' }]">
        <div id="main-content" class="main-content">
          <slot />
        </div>
      </div>
      
      <!-- <Footer :footer-layout="fLayout" /> -->
    </div>

    <div class="back-top" @click="backTop">
      <i class="arrow_carrot-up"></i>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from '#app'

const route = useRoute()

const hLayout = computed(() => route.meta.headerLayout || 1)
const menu = computed(() => route.meta.currentMenu || '')
const position = computed(() => route.meta.positionMenu || 'center')
const fLayout = computed(() => route.meta.footerLayout || 1)

const backTop = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  if (process.client) {
    console.log('Layout initialized')
  }
})
</script>