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
          <div v-if="wishlistItems.length" class="shop-wishlist"> 
            <table class="wishlist-items">                            
              <tbody>
                <tr class="wishlist-item" v-for="(product, index) in wishlistItems" :key="index">
                  <td class="wishlist-item-remove"><span @click="removeWishlistItem(product)"></span></td>
                  <td class="wishlist-item-image">
                    <NuxtLink :to="'/product/' + product.id">
                      <img v-if="product.images[0]" width="600" height="600" :src="product.images[0]" :alt="product.title">
                    </NuxtLink>
                  </td>
                  <td class="wishlist-item-info">
                    <div class="wishlist-item-name">
                      <NuxtLink :to="'/product/' + product.id">
                        {{ product.title }}
                      </NuxtLink>
                    </div>
                    <div class="wishlist-item-price">
                      <div v-if="product.price > product.salePrice" class="price">
                        <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del> 
                        <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
                      </div>
                      <div v-else class="price">
                        {{ $helpers.productPrice(product.salePrice) }}
                      </div>
                    </div>
                    <div class="wishlist-item-time">{{ product.time }}</div>
                  </td>
                  <td class="wishlist-item-actions">
                    <div class="wishlist-item-add">
                      <div class="btn-add-to-cart" data-title="Add to cart">
                        <button v-if="!cartItems.some(item => item.id === product.id)" @click="addCartItem(product, $event)" class="product-btn button">
                          Add to cart
                        </button>
                        <NuxtLink v-else to="/cart" class="added-to-cart product-btn">
                          View cart
                        </NuxtLink>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="shop-cart-empty">
            <div class="notices-wrapper">
              <p class="cart-empty">Your wishlist is currently empty.</p>
            </div>  
            <div class="return-to-shop">
              <NuxtLink to="/products" class="button">
                Return to shop
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'

const { $helpers } = useNuxtApp();

const title = 'Wishlist'
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Wishlist', active: true }
]

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const { cartItems } = storeToRefs(cartStore)
const { wishlistItems } = storeToRefs(wishlistStore)

const addCartItem = async (product, event) => {
  if (process.client) {
    const $ = window.$ || (await import('jquery')).default;
    
    const btn_atc = $(event.target)
    
    btn_atc.addClass('loading')
    
    setTimeout(() => {
      cartStore.addCartItem(product)
      btn_atc.removeClass('loading')
      
      // Display message
      $('body').append('<div class="cart-product-added"><div class="added-message">Product was added to cart successfully!</div>')
      
      setTimeout(() => {
        $('.cart-product-added').remove()
      }, 1000)
    }, 1000)
  }
}

const removeWishlistItem = async (product) => {
  wishlistStore.removeWishlistItem(product)
}

onMounted(async () => {
  if (process.client) {
    const $ = window.$ || (await import('jquery')).default;
    
    // Close the cart popup
    $('.dropdown.top-cart').removeClass('show')
    $('.dropdown.top-cart .dropdown-menu').removeClass('show')
  }
})

definePageMeta({
  currentMenu: 'shop'
})

useHead({
  bodyAttrs: {
    class: 'shop'
  }
})
</script>