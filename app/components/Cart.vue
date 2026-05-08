<template>
    <div class="ruper-topcart dropdown light">
        <div class="dropdown mini-cart top-cart">
            <div class="remove-cart-shadow"></div>
            <a class="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="icons-cart">
                    <i class="icon-large-paper-bag"></i><span class="cart-count">{{ totalItems }}</span>
                </div>
            </a>
            <div class="dropdown-menu cart-popup" @click="preventClosePopup">
                <div v-if="cartItems.length" class="cart-list-wrap">
                    <ul class="cart-list ">
                        <li class="mini-cart-item" v-for="(item, index) in cartItems" :key="index">
                            <nuxt-link event="" to="#" @click.native="removeCartItem(item)" class="remove">
                                <i class="icon_close"></i>
                            </nuxt-link>
                            <nuxt-link :to="'/product/' + item.id" class="product-image">
                                <img v-if="item.images[0]" width="600" height="600" :src="require('@/assets/img/' + item.images[0])" :alt="item.title">
                            </nuxt-link>
                            <nuxt-link :to="'/product/' + item.id" class="product-name">
                                {{ item.title }}
                            </nuxt-link>
                            <div class="quantity">
                                Qty: {{ item.quantity }}
                            </div>
                            <div class="price">
                                {{ $helpers.productPrice(item.salePrice) }}
                            </div>
                        </li>
                    </ul>
                    <div class="total-cart">
                        <div class="title-total">Total: </div>
                        <div class="total-price"><span>{{ $helpers.productPrice(totalPrice) }}</span></div>
                    </div>
                    <div class="buttons">
                        <nuxt-link to="/cart" class="button btn view-cart btn-primary">View cart</nuxt-link>
                        <nuxt-link to="/checkout" class="button btn checkout btn-default">Check out</nuxt-link>
                    </div>
                </div>
                <div v-else class="cart-empty-wrap">
                    <ul class="cart-list">
                        <li class="empty">
                            <span>No products in the cart.</span>
                            <nuxt-link to="/products" class="go-shop">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    computed: { 
        ...mapGetters({
            cartItems: 'cart/cartItems',
            totalItems: 'cart/totalItems',
            totalPrice: 'cart/totalPrice'
        })
    },
    methods: {
        preventClosePopup: function(e) {
            e.stopPropagation();
        },
        removeCartItem: function(product) {
            this.$store.dispatch('cart/removeCartItem', product);
        }
    }
}
</script>