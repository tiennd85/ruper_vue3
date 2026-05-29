<template>
  <header v-if="headerLayout == 1" id="site-header" class="site-header header-v1 absolute">
    <div class="header-mobile">
      <div class="section-padding">
        <div class="section-container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
              <div class="navbar-header">
                <button type="button" id="show-megamenu" class="navbar-toggle" @click.stop="handleShowMenu"></button>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
              <div class="site-logo">
                <NuxtLink to="/">
                  <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                </NuxtLink>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <HeaderMobileFixed />
    </div>

    <div class="header-desktop">
      <div class="header-wrapper">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="row">
              <div class="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                <div class="site-logo">
                  <NuxtLink to="/">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :current-menu="currentMenu" :position-menu="positionMenu" />
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <Login />
                  <!-- <Search /> -->
                  <!-- <Wishlist /> -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- <header v-else-if="headerLayout == 2" id="site-header" class="site-header header-v2">
    <div id="header-topbar" class="topbar-v1 hidden-sm hidden-xs">
      <div class="topbar-inner">
        <div class="section-padding">
          <div class="section-container large p-l-r">
            <div class="row">
              <div class="col-md-6 topbar-left">
                <TextModule content="<div class='address hidden-xs'><a href='#'><i class='icon-pin'></i>Find Store</a></div><div class='email hidden-xs'><i class='icon-envelope'></i><a href='mailto:support@ruper.com'>support@ruper.com</a>" />
              </div>
              <div class="col-md-6 topbar-right">
                <MenuModule :top-bar="true" :menus="menuTopBar" />                     
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-mobile">
      <div class="section-padding">
        <div class="section-container large">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
              <div class="navbar-header">
                <button type="button" id="show-megamenu" class="navbar-toggle" @click.stop="handleShowMenu"></button>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
              <div class="site-logo">
                <NuxtLink to="/home-2">
                  <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture HTML Theme">
                </NuxtLink>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <HeaderMobileFixed />
    </div>

    <div class="header-desktop">
      <div class="header-wrapper">
        <div class="section-padding">
          <div class="section-container large p-l-r">
            <div class="row">
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-left">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :current-menu="currentMenu" :position-menu="positionMenu" />
                  </nav>
                </div>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-logo">
                  <NuxtLink to="/home-2">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <Login />
                  <Search />
                  <Wishlist />
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header v-else-if="headerLayout == 3" id="site-header" class="site-header header-v3 absolute">
    <div class="header-mobile">
      <div class="section-padding">
        <div class="section-container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
              <div class="navbar-header">
                <button type="button" id="show-megamenu" class="navbar-toggle" @click.stop="handleShowMenu"></button>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
              <div class="site-logo">
                <NuxtLink to="/home-3">
                  <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                </NuxtLink>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <HeaderMobileFixed />
    </div>

    <div class="header-desktop">
      <div class="header-wrapper">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="row">
              <div class="col-lg-8 header-left">
                <div class="site-logo">
                  <NuxtLink to="/home-3">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :current-menu="currentMenu" :position-menu="positionMenu" />
                  </nav>
                </div>
              </div>
              <div class="col-lg-4 header-right">
                <div class="header-page-link">
                  <Login :black="true" />
                  <Search />
                  <Wishlist />
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <header v-else-if="headerLayout == 4" id="site-header" class="site-header header-v1 relative">
    <div class="header-mobile">
      <div class="section-padding">
        <div class="section-container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
              <div class="navbar-header">
                <button type="button" id="show-megamenu" class="navbar-toggle" @click.stop="handleShowMenu"></button>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
              <div class="site-logo">
                <NuxtLink to="/home-4">
                  <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                </NuxtLink>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <HeaderMobileFixed />
    </div>

    <div class="header-desktop">
      <div class="header-wrapper">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="row">
              <div class="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                <div class="site-logo">
                  <NuxtLink to="/home-4">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :current-menu="currentMenu" :position-menu="positionMenu" />
                  </nav>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <Login :black="true" />
                  <Search />
                  <Wishlist />
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header> -->
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  headerLayout: {
    type: [String, Number],
    default: 1
  },
  currentMenu: {
    type: String,
    default: ''
  },
  positionMenu: {
    type: String,
    default: 'center'
  }
})

const menuTopBar = ref([
  { id: 1, name: 'My Account', link: '/account' },
  { id: 2, name: 'Order Tracking', link: '/tracking' }
])

const handleShowMenu = async () => {
  if (process.client) {
    const $ = window.$ || (await import('jquery')).default;

    if ($('.site-mobile-navigation').hasClass('active')) { 
      $('.site-mobile-navigation').removeClass('active');
    } else { 
      $('.site-mobile-navigation').addClass('active');
    }
  }
}
</script>