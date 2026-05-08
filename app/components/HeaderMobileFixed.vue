<template>
  <div class="header-mobile-fixed">
    <!-- Shop -->
    <div class="shop-page">
      <nuxt-link to="/products">
        <i class="wpb-icon-shop"></i>
      </nuxt-link>
    </div>

    <!-- Login -->
    <div class="my-account">
      <div class="login-header">
        <nuxt-link to="/my-account">
          <i class="wpb-icon-user"></i>
        </nuxt-link>
      </div>
    </div>

    <!-- Search -->
    <Search />

    <!-- Wishlist -->
    <Wishlist :dropdown="false" />
  </div>
</template>

<script>
export default {
  name: 'HeaderMobileFixed'
}
</script>