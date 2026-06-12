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
      <div class="shop-details zoom" data-product_layout_thumb="scroll" data-zoom_scroll="true" data-zoom_contain_lens="true" data-zoomtype="inner" data-lenssize="200" data-lensshape="square" data-lensborder="" data-bordersize="2" data-bordercolour="#f9b61e" data-popup="false">  
        <div class="product-top-info">
          <div class="section-padding">
            <div class="section-container p-l-r">
              <div class="row">
                <div class="product-images col-lg-5 col-md-12 col-12">
                  <div class="scroll-image main-image">
                    <i @click="slickPrev" class="slick-arrow fa fa-angle-left"></i>
                    <div class="image-additional slick-carousel" ref="sliderElement">
                      <div v-for="(image, index) in product.images" :key="index" class="img-item">
                        <ClientOnly>
                          <InnerImageZoom 
                            :src="image"
                            :id="index"
                            :zoomSrc="image"
                            moveType="drag"
                            className="product-image-zoom"
                          />
                        </ClientOnly>
                      </div>
                    </div>
                    <i @click="slickNext" class="slick-arrow fa fa-angle-right"></i>
                  </div>
                  <div class="content-thumbnail-scroll slick-vertical slick-wrap">
                    <i @click="slickPrev2" class="slick-arrow fa fa-angle-left"></i>
                    <div class="image-thumbnail slick-carousel" ref="sliderElement2">
                      <div v-for="(image, index) in product.images" :key="index" class="img-item">
                        <span class="img-thumbnail-scroll">
                          <img width="600" height="600" :src="image" :alt="product.title">
                        </span>
                      </div>
                    </div>
                    <i @click="slickNext2" class="slick-arrow fa fa-angle-right"></i>
                  </div>
                </div>

                <div class="product-info col-lg-7 col-md-12 col-12">
                  <h1 class="title">{{ product.title }}</h1>
                  <div v-if="product.price > product.salePrice" class="price">
                    <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del> 
                    <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
                  </div>
                  <div v-else class="price">
                    {{ $helpers.productPrice(product.salePrice) }}
                  </div>
                  <Rating :product="product" :showCount="true" />
                  <div class="description">
                    <p>{{ product.excerpt }}</p>
                  </div>
                  <div class="variations">
                    <table cellspacing="0">
                      <tbody>
                        <tr>
                          <td class="label">Size</td>
                          <td class="attributes">
                            <ul class="text">
                              <li v-for="(size, index) in product.variants[0].items" :key="index">
                                <span>{{ size.value }}</span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td class="label">Color</td>
                          <td class="attributes">
                            <ul class="colors">
                              <li v-for="(color, index) in product.variants[1].items" :key="index">
                                <span :style="'background:' + color.value"></span>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="buttons">
                    <div class="add-to-cart-wrap">
                      <div class="quantity">
                        <button @click="plusQuantity()" type="button" class="plus">+</button>
                        <input type="number" class="qty" name="quantity" :value="quantity" @input="updateQuantity($event)" title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off">
                        <button @click="minusQuantity()" type="button" class="minus">-</button>
                      </div>
                      <div class="btn-add-to-cart">
                        <button @click.native="addCartItem(product, $event)" :class="['product-btn button', { 'loading': isLoadingCart }]">
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div class="btn-quick-buy" data-title="Wishlist">
                      <button @click.native="quickBuy(product, $event)" :class="['product-btn', { 'loading': isLoadingQuickBuy }]">
                        Buy It Now
                      </button>
                    </div>
                    <div class="btn-wishlist" data-title="Wishlist">
                      <button v-if="!wishlistItems.some(item => item.id === product.id)" @click="addWishlistItem(product, $event)" class="product-btn">Add to wishlist</button>
                      <button v-else class="product-btn added">Wishlist added</button>
                    </div>
                    <div class="btn-compare" data-title="Compare">
                      <button @click="addCompareItem(product, $event)" class="product-btn">Compare</button>
                    </div>
                  </div>
                  <div class="product-meta">
                    <span class="sku-wrapper">SKU: <span class="sku">{{ product.sku }}</span></span>
                    <span class="posted-in">Category: <nuxt-link :to="{ path: '/products', query: { cat: category.id } }">{{ category.title }}</nuxt-link></span>
                    <span class="tagged-as">Tags: 
                      <nuxt-link v-for="(tag, index) in product.tags" :key="index" to="/products" rel="tag">
                        {{ tag }}<span v-if="index < (product.tags.length - 1)">,</span>
                      </nuxt-link>
                    </span>
                  </div>
                  <div class="social-share">
                    <nuxt-link to="#" target="_blank" class="share-facebook"><i class="fa fa-facebook"></i>Facebook</nuxt-link>
                    <nuxt-link to="#" target="_blank" class="share-twitter"><i class="fa fa-twitter"></i>Twitter</nuxt-link>
                    <nuxt-link to="#" target="_blank" class="share-pinterest"><i class="fa fa-pinterest"></i>Pinterest</nuxt-link>
                  </div>          
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-tabs">
          <div class="section-padding">
            <div class="section-container p-l-r">
              <div class="product-tabs-wrap">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#additional-information" role="tab">Additional information</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews ({{ product.reviews.length }})</a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="description" role="tabpanel" v-html="product.description">
                  </div>
                  <div class="tab-pane fade" id="additional-information" role="tabpanel">
                    <table class="product-attributes">
                      <tbody>
                        <tr v-for="(info, index) in product.additionalInfo" :key="index" class="attribute-item">
                          <th class="attribute-label">{{ info.title }}</th>
                          <td class="attribute-value">{{ info.value }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="reviews" role="tabpanel">
                    <div id="reviews" class="product-reviews">
                      <div id="comments">
                        <h2 class="reviews-title">{{ product.reviews.length }} reviews for <span>{{ product.title }}</span></h2>
                        <ol class="comment-list">
                          <li v-for="(review, index) in product.reviews" :key="index" class="review">
                            <div class="content-comment-container">
                              <div class="comment-container">
                                <img src="/img/user.jpg" class="avatar" height="60" width="60" alt="">
                                <div class="comment-text">
                                  <div class="rating small">
                                    <div :class="'star star-' + review.rating"></div>
                                  </div>
                                  <div class="review-author">{{ review.name }}</div>
                                  <div class="review-time">{{ review.date }}</div>
                                </div>
                              </div>
                              <div class="description">
                                <p>{{ review.content }}</p>
                              </div>
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div id="review-form">
                        <div id="respond" class="comment-respond">
                          <span id="reply-title" class="comment-reply-title">Add a review</span>
                          <form @submit.prevent="handleSubmit" novalidate="true" id="comment-form" class="comment-form">
                            <p class="comment-notes">
                              <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span class="required">*</span>
                            </p>
                            <div class="comment-form-rating">
                              <label for="rating">Your rating</label>
                              <p class="stars">
                                <span>
                                  <nuxt-link to="#" class="star-1">1</nuxt-link>
                                  <nuxt-link to="#" class="star-2">2</nuxt-link>
                                  <nuxt-link to="#" class="star-3">3</nuxt-link>
                                  <nuxt-link to="#" class="star-4">4</nuxt-link>
                                  <nuxt-link to="#" class="star-5">5</nuxt-link>
                                </span>
                              </p>
                            </div>
                            <div class="comment-form-comment">
                              <textarea name="comment" v-model="form.comment" placeholder="Your Reviews *" cols="45" rows="8" :class="{ 'is-invalid': checkForm && $v.form.comment.$error }"></textarea>
                              <div v-if="$v.form.comment.required.$invalid" class="invalid-feedback">Content is required</div>
                            </div>
                            <div class="content-info-reviews">
                              <div class="comment-form-author">
                                <input type="text" v-model="form.name" name="name" placeholder="Name *" size="30" :class="{ 'is-invalid': checkForm && $v.form.name.$error }">
                                <div v-if="$v.form.name.required.$invalid" class="invalid-feedback">Name is required</div>
                              </div>
                              <div class="comment-form-email">
                                <input type="email" v-model="form.email" name="email" placeholder="Email *" size="30" :class="{ 'is-invalid': checkForm && $v.form.email.$error }">
                                <div v-if="$v.form.email.required.$invalid" class="invalid-feedback">Email is required</div>
                                <div v-if="$v.form.email.email.$invalid" class="invalid-feedback">Email is invalid</div>
                              </div>
                              <div class="form-submit">
                                <input type="submit" id="submit" class="submit" value="Submit">
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="clear"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-related">
          <div class="section-padding">
            <div class="section-container p-l-r">
              <ModuleProduct title="Related Products" :limit="8" view="slider" filter="related" :category="product.category" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useProductStore } from '~/stores/product'
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'
import { useCompareStore } from '~/stores/compare'
import InnerImageZoom from 'vue-inner-image-zoom'
import 'vue-inner-image-zoom/lib/styles.min.css'

const title = 'Product Single';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Shop', to: '/products' },
  { text: 'Product Single', active: true }
]

const route = useRoute()
const router = useRouter()

// Stores
const productStore = useProductStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const compareStore = useCompareStore()

// State
const quantity = ref(1)
const isLoadingCart = ref(false)
const isLoadingQuickBuy = ref(false)

// Computed
const product = computed(() => productStore.getProductById(route.params.id as string))
const category = computed(() => productStore.getCategoryById(product.value?.category))
const wishlistItems = computed(() => wishlistStore.wishlistItems)

// Show notification
const showNotification = (message: string) => {
  const toast = document.createElement('div')
  toast.className = 'cart-product-added'
  toast.innerHTML = `<div class="added-message">${message}</div>`
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 1000)
}

// Methods
const updateQuantity = (event: Event) => {
  quantity.value = parseInt((event.target as HTMLInputElement).value) || 1
}

const minusQuantity = () => { if (quantity.value > 1) quantity.value-- }
const plusQuantity = () => { quantity.value++ }

// Actions wrapper
const addCartItem = async (p: any) => {
  isLoadingCart.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  for (let i = 0; i < quantity.value; i++) {
    cartStore.addCartItem(p)
  }
  
  isLoadingCart.value = false
  
  showNotification('Product was added to cart successfully!')
}

const addWishlistItem = async (p: any) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  wishlistStore.addWishlistItem(p)
  
  showNotification('Product was added to wishlist successfully!')
}

const addCompareItem = async (p: any) => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  compareStore.addCompareItem(p)

  if (process.client) {
    $('#products-compare').modal('show')
  }
}

const quickBuy = async (p: any) => {
  isLoadingQuickBuy.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))

  for (let i = 0; i < quantity.value; i++) {
    cartStore.addCartItem(p)
  }

  isLoadingQuickBuy.value = false

  router.push('/cart')
}

// Validate form
const checkForm = ref(false);
const form = reactive({ 
  comment: '', 
  name: '', 
  email: '' 
});
const rules = {
  form: { 
    comment: { required }, 
    name: { required }, 
    email: { required, email } 
  }
};
const $v = useVuelidate(rules, { form });

const handleSubmit = async () => {
  if (process.client) {
    const $ = window.$ || (await import('jquery')).default;

    $v.value.form.$touch(); 
    
    checkForm.value = true; 
    
    const isFormCorrect = await $v.value.form.$validate();
    if (!isFormCorrect) {
      console.log("Form invalid:", $v.value.form.$errors);
      return;
    }

    alert('Thank you for the review!')
  }
};

// Slick Element
const sliderElement = ref(null)
const slickPrev = () => {
  $(sliderElement.value).slick('slickPrev')
}
const slickNext = () => {
  $(sliderElement.value).slick('slickNext')
}

const sliderElement2 = ref(null)
const slickPrev2 = () => {
  $(sliderElement2.value).slick('slickPrev')
}
const slickNext2 = () => {
  $(sliderElement2.value).slick('slickNext')
}

onMounted(async() => {
  await nextTick()

  const $sliderMain = $(sliderElement.value);
  const $sliderThumb = $(sliderElement2.value);

  if (process.client && sliderElement.value) {
    const $ = window.$ || (await import('jquery')).default;
    await import('slick-carousel')

    $sliderMain.slick({
      asNavFor: $sliderThumb,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
      nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>'
    })
  }

  if (process.client && sliderElement2.value) {
    const $ = window.$ || (await import('jquery')).default;
    await import('slick-carousel')

    $sliderThumb.slick({
      asNavFor: $sliderMain,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipeToSlide: true,
      focusOnSelect: true,
      arrows: true,
      dots: false,
      draggable: true,
      prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
      nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',
    })
  }
})

onBeforeUnmount(() => {
  if (process.client && sliderElement.value) {
    const $slider = $(sliderElement.value);

    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }
  }

  if (process.client && sliderElement2.value) {
    const $slider = $(sliderElement2.value);

    if ($slider.hasClass('slick-initialized')) {
      $slider.slick('unslick');
    }
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