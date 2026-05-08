<template>
    <div v-if="dropdown" class="wishlist-box ruper-topcart dropdown light">
        <div class="dropdown mini-cart top-cart">
            <div class="remove-cart-shadow"></div>
            <a class="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="icons-cart">
                    <i class="icon-heart"></i><span class="cart-count">{{ totalItems }}</span>
                </div>
            </a>
            <div class="dropdown-menu cart-popup" @click="preventClosePopup">
                <div v-if="wishlistItems.length" class="cart-list-wrap">
                    <ul class="cart-list ">
                        <li class="mini-cart-item" v-for="(item, index) in wishlistItems" :key="index">
                            <nuxt-link event="" to="#" @click.native="removeWishlistItem(item)" class="remove">
                                <i class="icon_close"></i>
                            </nuxt-link>
                            <nuxt-link :to="'/product/' + item.id" class="product-image">
                                <img v-if="item.images[0]" width="600" height="600" :src="require('@/assets/img/' + item.images[0])" :alt="item.title">
                            </nuxt-link>
                            <nuxt-link :to="'/product/' + item.id" class="product-name">
                                {{ item.title }}
                            </nuxt-link>
                            <div v-if="item.price > item.salePrice" class="price">
                                <del aria-hidden="true"><span>{{ $helpers.productPrice(item.price) }}</span></del> 
                                <ins><span>{{ $helpers.productPrice(item.salePrice) }}</span></ins>
                            </div>
                            <div v-else class="price">
                                {{ $helpers.productPrice(item.salePrice) }}
                            </div>
                        </li>
                    </ul>
                    <div class="buttons">
                        <nuxt-link to="/wishlist" class="button btn view-cart btn-primary">View Wishlist</nuxt-link>
                    </div>
                </div>
                <div v-else class="cart-empty-wrap">
                    <ul class="cart-list">
                        <li class="empty">
                            <span>No products in your wishlist.</span>
                            <nuxt-link to="/products" class="go-shop">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="wishlist-box">
        <nuxt-link to="/wishlist"><i class="wpb-icon-heart"></i></nuxt-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Wishlist',
    props: {
        dropdown: {
            type: Boolean,
            default: true
        }
    },
    computed: { 
        ...mapGetters({
            wishlistItems: 'wishlist/wishlistItems',
            totalItems: 'wishlist/totalItems',
        })
    },
    methods: {
        preventClosePopup: function(e) {
            e.stopPropagation();
        },
        removeWishlistItem: function(product) {
            this.$store.dispatch('wishlist/removeWishlistItem', product);
        }
    }
}
</script>