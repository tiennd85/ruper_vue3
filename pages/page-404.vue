<template>
  <div id="primary" class="content-area">
    <div id="content" class="site-content" role="main">
      <div class="section-padding">
        <div class="section-container p-l-r">
          <div class="page-404">
            <div class="content-page-404">
              <div class="title-error">
                404   
              </div>
              <div class="sub-title">
                Oops! That page can't be found.   
              </div>
              <div class="sub-error">
                We're really sorry but we can't seem to find the page you were looking for.   
              </div>
              <NuxtLink class="button" to="/">
                Back The Homepage   
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'page-404'
  }
})
</script>