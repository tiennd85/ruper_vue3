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
                            <NuxtLink event="" to="#" @click.native="removeWishlistItem(item)" class="remove">
                                <i class="icon_close"></i>
                            </NuxtLink>
                            <NuxtLink :to="'/product/' + item.id" class="product-image">
                                <img v-if="item.images[0]" width="600" height="600" :src="item.images[0]" :alt="item.title">
                            </NuxtLink>
                            <NuxtLink :to="'/product/' + item.id" class="product-name">
                                {{ item.title }}
                            </NuxtLink>
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
                        <NuxtLink to="/wishlist" class="button btn view-cart btn-primary">View Wishlist</NuxtLink>
                    </div>
                </div>
                <div v-else class="cart-empty-wrap">
                    <ul class="cart-list">
                        <li class="empty">
                            <span>No products in your wishlist.</span>
                            <NuxtLink to="/products" class="go-shop">GO TO SHOP<i aria-hidden="true" class="arrow_right"></i></NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="wishlist-box">
        <NuxtLink to="/wishlist"><i class="wpb-icon-heart"></i></NuxtLink>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useWishlistStore } from '../../stores/wishlist';

const props = defineProps({
    dropdown: { type: Boolean, default: true }
});

const wishlistStore = useWishlistStore();

const { wishlistItems, totalItems } = storeToRefs(wishlistStore);

const preventClosePopup = (e) => {
    e.stopPropagation();
};

const removeWishlistItem = (product) => {
    wishlistStore.removeWishlistItem(product);
};
</script>