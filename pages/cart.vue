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
          <div v-if="cartItems.length" class="shop-cart"> 
            <div class="row">
              <div class="col-xl-8 col-lg-12 col-md-12 col-12">
                <div class="table-responsive">
                  <table class="cart-items table" cellspacing="0">
                    <thead>
                      <tr>
                        <th class="product-thumbnail">Product</th>
                        <th class="product-price">Price</th>
                        <th class="product-quantity">Quantity</th>
                        <th class="product-subtotal">Subtotal</th>
                        <th class="product-remove">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="cart-item" v-for="(item, index) in cartItems" :key="index">    
                        <td class="product-thumbnail">
                          <NuxtLink :to="'/product/' + item.id">
                            <img v-if="item.images[0]" width="600" height="600" :src="item.images[0]" class="product-image" :alt="item.title">
                          </NuxtLink>
                          <div class="product-name">
                            <NuxtLink :to="'/product/' + item.id">
                              {{ item.title }}
                            </NuxtLink>
                          </div>
                        </td>
                        <td class="product-price">
                          <span class="price">{{ $helpers.productPrice(item.salePrice) }}</span>
                        </td>
                        <td class="product-quantity">
                          <div class="quantity">
                            <button @click="minusQuantity(item)" class="minus">-</button>
                            <input type="number" class="qty" :value="item.quantity" @input="updateQuantity(item, $event)" title="Qty" size="4" inputmode="numeric" autocomplete="off">
                            <button @click="plusQuantity(item)" class="plus">+</button>
                          </div>
                        </td>
                        <td class="product-subtotal">
                          <span>{{ $helpers.productPrice(item.salePrice * item.quantity) }}</span>
                        </td>
                        <td class="product-remove">
                          <NuxtLink event="" to="#" @click.native="removeCartItem(item)" class="remove">×</NuxtLink>                
                        </td>
                      </tr>
                      <tr>
                        <td colspan="6" class="actions">
                          <div class="bottom-cart">
                            <div class="coupon">
                              <input type="text" name="coupon_code" class="input-text" id="coupon-code" value="" placeholder="Coupon code"> 
                              <button type="submit" name="apply_coupon" class="button" value="Apply coupon">Apply coupon</button>
                            </div>
                            <NuxtLink class="button" to="/products">
                              Continue Shopping
                            </NuxtLink>
                          </div>  
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-xl-4 col-lg-12 col-md-12 col-12">
                <div class="cart-totals">
                  <h2>Cart totals</h2>
                  <div>
                    <div class="cart-subtotal">
                      <div class="title">Subtotal</div>
                      <div><span>{{ $helpers.productPrice(totalPrice) }}</span></div>
                    </div>
                    <div class="shipping-totals">
                      <div class="title">Shipping</div>
                      <div>
                        <ul class="shipping-methods custom-radio">
                          <li v-for="(shipping, index) in shippings" :key="index" @click="shippingMethod(shipping.cost)">
                            <input type="radio" name="shipping_method" value="shipping.cost" :checked="shippingCost == shipping.cost">
                            <label v-if="shipping.cost > 0">{{ shipping.name }}: <span>{{ $helpers.productPrice(shipping.cost) }}</span></label>
                            <label v-else>{{ shipping.name }}</label>
                          </li>
                        </ul>
                        <p class="shipping-desc">
                          Shipping options will be updated during checkout.       
                        </p>
                      </div>
                    </div>
                    <div class="order-total">
                      <div class="title">Total</div>
                      <div><span>{{ $helpers.productPrice(totalPrice + shippingCost) }}</span></div>
                    </div>
                  </div>
                  <div class="proceed-to-checkout">
                    <NuxtLink to="/checkout" class="checkout-button button">
                      Proceed to checkout
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="shop-cart-empty">
            <div class="notices-wrapper">
              <p class="cart-empty">Your cart is currently empty.</p>
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
import { useCartStore } from '~/stores/cart'

const title = 'Shopping Cart';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Shopping Cart', active: true }
]

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const totalPrice = computed(() => cartStore.totalPrice)
const shippingCost = computed(() => cartStore.shippingCost)

// Data Shippings
const { data: shippingsData } = await useAsyncData('shippings', () => 
  queryContent('settings', 'shippings').findOne()
)
const shippings = computed(() => shippingsData.value?.body || [])

// Methods
const minusQuantity = (product: any) => cartStore.decreaseCartItem(product)
const plusQuantity = (product: any) => cartStore.addCartItem(product)

const updateQuantity = (product: any, event: Event) => {
  const target = event.target as HTMLInputElement
  const newQty = parseInt(target.value)
  if (!isNaN(newQty)) {
    product.quantity = newQty
    cartStore.updateCartItem(product)
  }
}

const removeCartItem = (product: any) => cartStore.removeCartItem(product)
const shippingMethod = (cost: number | string) => cartStore.setShippingCost(parseFloat(cost as string))

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