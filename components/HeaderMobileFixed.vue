<template>
  <div class="header-mobile-fixed">
    <!-- Shop -->
    <div class="shop-page">
      <NuxtLink to="/products">
        <i class="wpb-icon-shop"></i>
      </NuxtLink>
    </div>

    <!-- Login -->
    <div class="my-account">
      <div class="login-header">
        <NuxtLink to="/my-account">
          <i class="wpb-icon-user"></i>
        </NuxtLink>
      </div>
    </div>

    <!-- Search -->
    <Search />

    <!-- Wishlist -->
    <Wishlist :dropdown="false" />
  </div>
</template>