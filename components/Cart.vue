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
                            <span @click="removeCartItem(item)" class="remove">
                                <i class="icon_close"></i>
                            </span>
                            <NuxtLink :to="'/product/' + item.id" class="product-image">
                                <img v-if="item.images[0]" width="600" height="600" :src="item.images[0]" :alt="item.title">
                            </NuxtLink>
                            <NuxtLink :to="'/product/' + item.id" class="product-name">
                                {{ item.title }}
                            </NuxtLink>
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
                        <NuxtLink to="/cart" class="button btn view-cart btn-primary">View cart</NuxtLink>
                        <NuxtLink to="/checkout" class="button btn checkout btn-default">Check out</NuxtLink>
                    </div>
                </div>
                <div v-else class="cart-empty-wrap">
                    <ul class="cart-list">
                        <li class="empty">
                            <span>No products in the cart.</span>
                            <NuxtLink to="/products" class="go-shop">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '~/stores/cart';

const { $helpers } = useNuxtApp();

const cartStore = useCartStore();

const { cartItems, totalItems, totalPrice } = storeToRefs(cartStore)

// Methods
const preventClosePopup = (e) => {
    e.stopPropagation()
}
const removeCartItem = (product) => {
    cartStore.removeCartItem(product)
}
</script>