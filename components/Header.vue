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

  <header v-else-if="headerLayout == 2" id="site-header" class="site-header header-v2">
    <div id="header-topbar" class="topbar-v1 hidden-sm hidden-xs">
      <div class="topbar-inner">
        <div class="section-padding">
          <div class="section-container large p-l-r">
            <div class="row">
              <div class="col-md-6 topbar-left">
                <ModuleText content="<div class='address hidden-xs'><a href='#'><i class='icon-pin'></i>Find Store</a></div><div class='email hidden-xs'><i class='icon-envelope'></i><a href='mailto:support@ruper.com'>support@ruper.com</a></div>" />
              </div>
              <div class="col-md-6 topbar-right">
                <ModuleMenu :top-bar="true" :menus="menuTopBar" />                     
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
  </header>
  <header v-else-if="headerLayout == 5" id="site-header" class="site-header header-v1 relative">
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
                <NuxtLink to="/home-5">
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
                  <NuxtLink to="/home-5">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 6" id="site-header" class="site-header header-v1 absolute">
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
                <NuxtLink to="/home-6">
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
                  <NuxtLink to="/home-6">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login :black="true" />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 7" id="site-header" class="site-header header-v3 absolute">
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
                <NuxtLink to="/home-7">
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
          <div class="section-container large">
            <div class="row">
              <div class="col-lg-8 header-left">
                <div class="site-logo">
                  <NuxtLink to="/home-7">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>

                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-lg-4 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login :black="true" />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 8" id="site-header" class="site-header header-v2">
    <div id="header-topbar" class="topbar-v1 hidden-sm hidden-xs">
      <div class="topbar-inner">
        <div class="section-padding">
          <div class="section-container large">
            <div class="row">
              <div class="col-md-6 topbar-left">
                <ModuleText content="<div class='address hidden-xs'><a href='#'><i class='icon-pin'></i>Find Store</a></div><div class='email hidden-xs'><i class='icon-envelope'></i><a href='mailto:support@ruper.com'>support@ruper.com</a></div>" />
              </div>
              <div class="col-md-6 topbar-right">
                <ModuleMenu :topBar="true" :menus="menuTopBar" />                      
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
                <NuxtLink to="/home-8">
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
          <div class="section-container large">
            <div class="row">
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-left">
                <div class="menu-full">
                  <div class="menu-toggle" @click="openMenu">
                    <div class="menu-lines">
                      <span class="line-general line-1"></span>
                      <span class="line-general line-2"></span>
                      <span class="line-general line-3"></span>
                    </div>
                  </div>
                  <div :class="['site-navigation', { 'active': isMenuActive }]">
                    <div class="close-menu-wrap">
                      <div class="close-menu-full" @click="closeMenu"></div>
                    </div>
                    <nav id="main-navigation">
                      <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                    </nav>
                  </div>
                </div>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-logo">
                  <NuxtLink to="/home-8">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 9" id="site-header" class="site-header header-v1 relative">
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
                <NuxtLink to="/home-9">
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
          <div class="section-container large p-l-r">
            <div class="row">
              <div class="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                <div class="site-logo">
                  <NuxtLink to="/home-9">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 10" id="site-header" class="site-header header-v1 absolute color-white">
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
                <NuxtLink to="/home-10">
                  <img width="400" height="79" src="/img/logo-white.png" alt="Ruper – Furniture VueJs Template" />
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
                  <NuxtLink to="/home-10">
                    <img width="400" height="79" src="/img/logo-white.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 11" id="site-header" class="site-header header-v3 relative">
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
                <NuxtLink to="/home-11">
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
          <div class="section-container large p-l-r">
            <div class="row">
              <div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 header-left">
                <div class="site-logo">
                  <NuxtLink to="/home-11">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>

                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <!-- Search -->
                <Search :toggle="false" />

                <div class="header-page-link">
                  <!-- Login -->
                  <Login :icon="true" />

                  <!-- Search -->
                  <Search :hiddenLg="true" />

                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 12" id="site-header" class="site-header header-v4 color-white bg-black">
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
                <NuxtLink to="/home-12">
                  <img width="400" height="79" src="/img/logo-white.png" alt="Ruper – Furniture VueJs Template" />
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
      <div class="header-top">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
                <div class="header-page-link">
                  <!-- Search -->
                  <Search />
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-logo">
                  <NuxtLink to="/home-12">
                    <img width="400" height="79" src="/img/logo-white.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login :icon="true" />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-wrapper">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 13" id="site-header" class="site-header header-v1 relative">
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
                <NuxtLink to="/home-13">
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
          <div class="section-container large p-l-r">
            <div class="row">
              <div class="col-xl-3 col-lg-2 col-md-12 col-sm-12 col-12 header-left">
                <div class="site-logo">
                  <NuxtLink to="/home-13">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 14" id="site-header" class="site-header header-v2 large-height">
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
                <NuxtLink to="/home-14">
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
          <div class="section-container large p-l-r">
            <div class="row">
              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-left">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>

              <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-logo">
                  <NuxtLink to="/home-14">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login />

                  <!-- Search -->
                  <Search />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <header v-else-if="headerLayout == 15" id="site-header" class="site-header header-v4">
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
                <NuxtLink to="/home-15">
                  <img width="400" height="79" src="/img/logo-white.png" alt="Ruper – Furniture VueJs Template" />
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
      <div class="header-top">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
                <div class="header-page-link">
                  <!-- Search -->
                  <div class="search-box">
                    <div class="search-toggle"><i class="icon-search"></i></div>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center header-center">
                <div class="site-logo">
                  <NuxtLink to="/home-15">
                    <img width="400" height="79" src="/img/logo.png" alt="Ruper – Furniture VueJs Template" />
                  </NuxtLink>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
                <div class="header-page-link">
                  <!-- Login -->
                  <Login />
                  
                  <!-- Wishlist -->
                  <Wishlist />
                  
                  <!-- Cart -->
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-wrapper color-white bg-black">
        <div class="section-padding">
          <div class="section-container p-l-r">
            <div class="row">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                <div class="site-navigation">
                  <nav id="main-navigation">
                    <MainMenu :currentMenu="currentMenu" :positionMenu="positionMenu" />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  headerLayout: { type: Number, default: 1 },
  currentMenu: { type: String, default: '' },
  positionMenu: { type: String, default: 'center' }
})

const isMenuActive = ref(false)
// Open menu
const openMenu = () => {
  isMenuActive.value = true
}
// Close menu
const closeMenu = () => {
  isMenuActive.value = false
}

// Topbar Menu Data
const { data: menuTopBarData } = await useAsyncData('menu-topbar', () => 
  queryContent('menus', 'topbar').findOne()
)
const menuTopBar = computed(() => menuTopBarData.value?.body || [])

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