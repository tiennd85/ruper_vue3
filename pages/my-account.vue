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
          <div class="page-my-account">
            <div class="my-account-wrap clearfix">
              <nav class="my-account-navigation">
                <ul class="nav nav-tabs">
                  <li v-for="tabItem in tabItems" :key="tabItem.id" class="nav-item">
                    <NuxtLink v-if="tabItem.id == 'logout'" to="/login" class="nav-link">{{ tabItem.title }}</NuxtLink>
                    <button v-else
                      :class="['nav-link', { 'active': activeTabId === tabItem.id }]" 
                      @click="activeTabId = tabItem.id"
                      type="button"
                      role="tab"
                    >
                      {{ tabItem.title }}
                    </button>
                  </li>
                </ul>
              </nav>
              <div class="my-account-content tab-content">
                <keep-alive>
                  <component :is="currentTabComponent" />
                </keep-alive>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dashboard from '~/components/account/Dashboard.vue'
import Orders from '~/components/account/Orders.vue'
import Addresses from '~/components/account/Addresses.vue'
import AccountDetails from '~/components/account/AccountDetails.vue'

const title = 'My Account';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'My Account', active: true }
]

// Tab
const activeTabId = ref('dashboard')
const tabItems = [
  { id: 'dashboard', title: 'Dashboard' },
  { id: 'orders', title: 'Orders' },
  { id: 'addresses', title: 'Addresses' },
  { id: 'account-details', title: 'Account details' },
  { id: 'logout', title: 'Logout' }
]

const tabComponents: Record<string, any> = {
  'dashboard': Dashboard,
  'orders': Orders,
  'addresses': Addresses,
  'account-details': AccountDetails
}
const currentTabComponent = computed(() => tabComponents[activeTabId.value])

definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'my-account'
  }
})
</script>