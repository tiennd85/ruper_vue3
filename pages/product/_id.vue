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
          <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
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
                    <slick class="image-additional slick-carousel" ref="slick" :options="slickMainOptions" @init="handleInit">
                      <div v-for="(image, index) in product.images" :key="index" class="img-item">
                        <inner-image-zoom
                          :src="require('@/assets/img/' + image)"
                          :id="index"
                          :zoomSrc="require('@/assets/img/' + image)"
                          moveType="drag"
                          className="product-image-zoom"
                        />
                      </div>
                    </slick>
                  </div>
                  <div class="content-thumbnail-scroll slick-vertical slick-wrap">
                    <slick class="image-thumbnail slick-carousel" ref="slick" :options="slickThumbnailOptions" @init="handleInit">
                      <div v-for="(image, index) in product.images" :key="index" class="img-item">
                        <span class="img-thumbnail-scroll">
                          <img width="600" height="600" :src="require('@/assets/img/' + image)" :alt="product.title">
                        </span>
                      </div>
                    </slick>
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
                        <nuxt-link event="" to="#" @click.native="addCartItem(product, $event)" class="product-btn button">
                          Add to cart
                        </nuxt-link>
                      </div>
                    </div>
                    <div class="btn-quick-buy" data-title="Wishlist">
                      <nuxt-link event="" to="#" @click.native="quickBuy(product, $event)" class="product-btn">
                        Buy It Now
                      </nuxt-link>
                    </div>
                    <div class="btn-wishlist" data-title="Wishlist">
                      <button v-if="!wishlistItems.includes(product)" @click="addWishlistItem(product, $event)" class="product-btn">Add to wishlist</button>
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
                                <img :src="require('@/assets/img/user.jpg')" class="avatar" height="60" width="60" alt="">
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
                              <div v-if="checkForm && !$v.form.comment.required" class="invalid-feedback">Content is required</div>
                            </div>
                            <div class="content-info-reviews">
                              <div class="comment-form-author">
                                <input type="text" v-model="form.name" name="name" placeholder="Name *" size="30" :class="{ 'is-invalid': checkForm && $v.form.name.$error }">
                                <div v-if="checkForm && !$v.form.name.required" class="invalid-feedback">Name is required</div>
                              </div>
                              <div class="comment-form-email">
                                <input type="email" v-model="form.email" name="email" placeholder="Email *" size="30" :class="{ 'is-invalid': checkForm && $v.form.email.$error }">
                                <div v-if="checkForm && !$v.form.email.required" class="invalid-feedback">Email is required</div>
                                <div v-if="checkForm && !$v.form.email.email" class="invalid-feedback">Email is invalid</div>
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
              <ProductModule title="Related Products" :limit="8" view="slider" filter="related" :category="product.category" />
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
import { required } from '@vuelidate/validators';

const title = 'Login';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Login', active: true }
]

const checkForm = ref(false);

const form = reactive({ username: '', password: '' });

const rules = {
  form: { username: { required }, password: { required } }
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

    navigateTo('/my-account');
  }
};

definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'login'
  }
})
</script>




<script>
import $ from 'jquery'
import { mapGetters } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

import ProductModule from '~/components/modules/ProductModule'

export default {
  name: 'ProductSingle',
  components: {
    ProductModule
  },
  data() {
    return {
      title: 'Product Single',
      breadcrumbItems: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Shop',
          to: '/products',
        },
        {
          text: 'Product Single',
          to: '',
        },
      ],
      quantity: 1,
      slickMainOptions: {
        asNavFor: '.image-thumbnail',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
        nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>'
      },
      slickThumbnailOptions: {
        asNavFor: '.image-additional',
        slidesToShow: 4,
        slidesToScroll: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: true,
        dots: false,
        draggable: true,
        prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
        nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',
      },
      form: {
        comment: '',
        name: '',
        email: ''
      },
      checkForm: false
    }
  },
  validations() {
    return {
      form: {
        comment: { required },
        name: { required },
        email: { required, email }
      }
    }
  },
  computed: { 
    ...mapGetters({
      cartItems: 'cart/cartItems',
      wishlistItems: 'wishlist/wishlistItems'
    }),
    product: function () {
      return this.$store.getters['products/getProductById'](
        this.$route.params.id
      );
    },
    category: function () {
      return this.$store.getters['products/getCategoryById'](
        this.product.category
      );
    }
  },
  mounted() {
    // Class of body tag
    $('body').removeClass()
    $('body').addClass('shop')

    // Current menu
    this.$nuxt.$emit('currentMenu', 'shop')
  },
  methods: {
    minusQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    plusQuantity() {
      this.quantity++
    },
    updateQuantity(event) {
      this.quantity = event.target.value
    },

    // Add product to cart
    addCartItem: function(product, event) {
      const t = this
      const btn_atc = $(event.target)
      btn_atc.addClass('loading')
      const quantity = this.quantity
      
      setTimeout(function() {
        // Add item to cart
        for (var i = 1; i <= quantity; i++) {
          t.$store.dispatch('cart/addCartItem', product)
        }

        btn_atc.removeClass('loading')
        
        // Display message
        $('body').append('<div class="cart-product-added"><div class="added-message">Product was added to cart successfully!</div>')
        setTimeout(function() {
          $('.cart-product-added').remove()
        }, 1000)
      }, 1000)
    },

    // Add product to wishlist
    addWishlistItem: function(product, event) {
      const t = this
      const btn_atc = $(event.target)
      btn_atc.addClass('adding')
      
      setTimeout(function() {
        // Add item to wishlist
        t.$store.dispatch('wishlist/addWishlistItem', product)

        btn_atc.removeClass('adding')
        
        // Display message
        $('body').append('<div class="cart-product-added"><div class="added-message">Product was added to wishlist successfully!</div>')
        setTimeout(function() {
          $('.cart-product-added').remove()
        }, 1000)
      }, 1000)
    },

    // Add product to compare
    addCompareItem: function(product, event) {
      const t = this
      const btn_atc = $(event.target)
      btn_atc.addClass('adding')
      
      setTimeout(function() {
        // Add item to compare
        t.$store.dispatch('compare/addCompareItem', product)

        btn_atc.removeClass('adding')
        
        // Show compare popup
        t.$bvModal.show('products-compare')
      }, 1000)
    },

    // Quick Buy
    quickBuy: function(product, event) {
      const t = this
      const btn_atc = $(event.target)
      btn_atc.addClass('loading')
      const quantity = this.quantity

      setTimeout(function() {
        // Add item to cart
        for (var i = 1; i <= quantity; i++) {
          t.$store.dispatch('cart/addCartItem', product)
        }

        btn_atc.removeClass('loading')
          
        t.$router.push('/cart')
      }, 1000)
    },

    // Slick
    handleInit(event, slick) {
      // Move nav outsite
      const $element = $(this.$refs.slick.$el);
      if ($('.slick-arrow', $element).length > 0) {
        if ($('.fa-angle-left', $element).length > 0) {
          var $prev = $('.fa-angle-left', $element).clone();
          $('.fa-angle-left', $element).remove();
          if ($element.parent().find('.fa-angle-left').length == 0) {
            $prev.prependTo($element.parent());
          }
          $prev.click(function() {
            $element.slick('slickPrev');
          });
        }
        if ($('.fa-angle-right', $element).length > 0) {
          var $next = $('.fa-angle-right', $element).clone();
          $('.fa-angle-right', $element).remove();
          if ($element.parent().find('.fa-angle-right').length == 0) {
            $next.appendTo($element.parent());
          }
          $next.click(function() {
            $element.slick('slickNext');
          })
        }
      } else {
        $('.fa-angle-left', $element.parent()).remove();
        $('.fa-angle-right', $element.parent()).remove();
      }
    },

    // Handle submit form
    handleSubmit(e) {
      this.checkForm = true

      // Stop if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return
      }

      // Notify if form is valid
      alert('Thank you for the review!')
    }
  }
}
</script>