<template>
    <b-modal v-if="compareItems" id="products-compare" modal-class="compare" centered hide-header hide-footer>
        <div class="compare-popup">
            <div class="compare-popup-inner">
                <div class="compare-table">
                    <div class="compare-table-inner">
                        <span id="compare-table-close" class="compare-table-close">
                            <span @click="$bvModal.hide('products-compare')" class="compare-table-close-icon"></span>
                        </span>
                        <div class="compare-table-items">
                            <table id="product-table" class="product-table">
                                <thead>
                                    <tr>
                                        <th width="250">
                                            <span class="compare-table-settings">Settings</span>
                                        </th>
                                        <th v-for="(item, index) in compareItems" :key="index">
                                            <nuxt-link :to="'/product/' + item.id">
                                                {{ item.title }}
                                            </nuxt-link>
                                            <span @click="removeCompareItem(item)" class="remove"><i class="icon_close"></i></span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="tr-image">
                                        <td class="td-label">Image</td>
                                        <td v-for="(item, index) in compareItems" :key="index">
                                            <nuxt-link :to="'/product/' + item.id">
                                                <img v-if="item.images[0]" width="600" height="600" :src="require('@/assets/img/' + item.images[0])" :alt="item.title">
                                            </nuxt-link>
                                        </td>
                                    </tr>
                                    <tr class="tr-sku">
                                        <td class="td-label">SKU</td>
                                        <td v-for="(item, index) in compareItems" :key="index">
                                            {{ item.sku }}
                                        </td>
                                    </tr>
                                    <tr class="tr-rating">
                                        <td class="td-label">Rating</td>
                                        <td v-for="(item, index) in compareItems" :key="index">
                                            <Rating :product="item" />
                                        </td>
                                    </tr>
                                    <tr class="tr-price">
                                        <td class="td-label">Price</td>
                                        <td v-for="(item, index) in compareItems" :key="index">
                                            <div v-if="item.price > item.salePrice" class="price">
                                                <del aria-hidden="true"><span>{{ $helpers.productPrice(item.price) }}</span></del> 
                                                <ins><span>{{ $helpers.productPrice(item.salePrice) }}</span></ins>
                                            </div>
                                            <div v-else class="price">
                                                {{ $helpers.productPrice(item.salePrice) }}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="tr-add-to-cart">
                                        <td class="td-label">Add to cart</td>
                                        <td v-for="(item, index) in compareItems" :key="index">
                                            <div v-if="!cartItems.includes(item)" data-title="Add to cart">
                                                <nuxt-link event="" to="#" @click.native="addCartItem(item, $event)" class="button">
                                                    Add to cart
                                                </nuxt-link>
                                            </div>
                                            <div v-else data-title="View cart">
                                                <nuxt-link to="/cart" class="button">
                                                    View cart
                                                </nuxt-link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="tr-description">
                                        <td class="td-label">Description</td>
                                        <td v-for="(item, index) in compareItems" :key="index">
                                            {{ item.shortDescription }}
                                        </td>
                                    </tr>
                                    <tr class="tr-content">
                                        <td class="td-label">Content</td>
                                        <td v-for="(item, index) in compareItems" :key="index" v-html="item.description">
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useCompareStore } from '~/stores/compare'

// Init stores
const cartStore = useCartStore()
const compareStore = useCompareStore()

// Show notification
const showNotification = (message: string) => {
    const toast = document.createElement('div')
    toast.className = 'cart-product-added'
    toast.innerHTML = `<div class="added-message">${message}</div>`
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 1000)
}

// Add to Cart
const addCartItem = (product: any, event: Event) => {
    const btn = event.target as HTMLElement
    btn.classList.add('loading')

    setTimeout(() => {
        cartStore.addCartItem(product)
        btn.classList.remove('loading')
        showNotification('Product was added to cart successfully!')
    }, 1000)
}

// Remove from Compare
const removeCompareItem = (product: any) => {
    compareStore.removeCompareItem(product)
}
</script>