<template>
  <div id="primary" class="content-area">
    <div id="title" class="page-title">
      <div class="section-container">
        <div class="content-title-heading">
          <h1 class="text-title-heading">
            {{ title }}
          </h1>
        </div>
        <div class="breadcrumbs">
          <Breadcrumb :breadcrumbItems="breadcrumbItems" />
        </div>
      </div>
    </div>
    <div id="content" class="site-content" role="main">
      <div class="section-padding">
        <div class="section-container p-l-r">
          <div class="page-faq">
            <div class="row">
              <div v-for="(faqCategory, indexCat) in faqCategories" :key="indexCat" class="col-md-6">
                <div class="faq-section">
                  <div class="section-title">
                    <h2>{{ indexCat + 1 }}. {{ faqCategory.title }}</h2>
                  </div>
                  <div class="section-content">
                    <div v-for="(faq, index) in faqs[indexCat]" :key="index" class="faq-item">
                      <div class="faq-question">
                        {{ faq.question }}
                      </div>
                      <div class="faq-answer">
                        {{ faq.answer }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';

// Data Faq Categories
const { data: catsData } = await useAsyncData('faq-categories', () => 
  queryContent('faqs', 'categories').findOne()
)
const faqCategories = computed(() => catsData.value?.body || [])

// Data Faqs
const { data: faqsData } = await useAsyncData('faqs', () => 
  queryContent('faqs', 'faqs').findOne()
)
const allFaqs = computed(() => faqsData.value?.body || [])

// Faqs
const faqs = computed(() => {
  const categories = faqCategories.value || [];
  const allItems = allFaqs.value || [];

  const result = [];

  if (categories.length > 0) {
    categories.forEach((category) => { 
      const catFaqs = allItems.filter((faq) => faq.category === category.id);
      result.push(catFaqs);
    });
  }
  
  return result;
});

const title = 'Frequently Asked Questions';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Frequently Asked Questions', active: true }
]

definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'faq'
  }
})
</script>