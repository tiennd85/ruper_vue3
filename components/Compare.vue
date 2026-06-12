<template>
    <div class="modal fade compare" id="products-compare" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="compare-popup">
                        <div class="compare-popup-inner">
                            <div class="compare-table">
                                <div class="compare-table-inner">
                                    <span id="compare-table-close" class="compare-table-close">
                                        <span @click="closeModal" class="compare-table-close-icon"></span>
                                    </span>
                                    <div class="compare-table-items">
                                        <table id="product-table" class="product-table">
                                            <thead>
                                                <tr>
                                                    <th width="250">
                                                        <span class="compare-table-settings">Settings</span>
                                                    </th>
                                                    <th v-for="(product, index) in compareStore.compareItems" :key="index">
                                                        <NuxtLink :to="'/product/' + product.id">
                                                            {{ product.title }}
                                                        </NuxtLink>
                                                        <span @click="removeCompareItem(product)" class="remove"><i class="icon_close"></i></span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="tr-image">
                                                    <td class="td-label">Image</td>
                                                    <td v-for="(product, index) in compareStore.compareItems" :key="index">
                                                        <NuxtLink :to="'/product/' + product.id">
                                                            <img v-if="product.images[0]" width="600" height="600" :src="product.images[0]" :alt="product.title">
                                                        </NuxtLink>
                                                    </td>
                                                </tr>
                                                <tr class="tr-sku">
                                                    <td class="td-label">SKU</td>
                                                    <td v-for="(product, index) in compareStore.compareItems" :key="index">
                                                        {{ product.sku }}
                                                    </td>
                                                </tr>
                                                <tr class="tr-rating">
                                                    <td class="td-label">Rating</td>
                                                    <td v-for="(product, index) in compareStore.compareItems" :key="index">
                                                        <Rating :product="product" />
                                                    </td>
                                                </tr>
                                                <tr class="tr-price">
                                                    <td class="td-label">Price</td>
                                                    <td v-for="(product, index) in compareStore.compareItems" :key="index">
                                                        <div v-if="product.price > product.salePrice" class="price">
                                                            <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del> 
                                                            <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
                                                        </div>
                                                        <div v-else class="price">
                                                            {{ $helpers.productPrice(product.salePrice) }}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="tr-add-to-cart">
                                                    <td class="td-label">Add to cart</td>
                                                    <td v-for="(product, index) in compareStore.compareItems" :key="index">
                                                        <div v-if="!cartStore.cartItems.some(item => item.id === product.id)" data-title="Add to cart">
                                                            <button @click="addCartItem(product, $event)" class="button">
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                        <div v-else data-title="View cart">
                                                            <NuxtLink to="/cart" class="button">
                                                                View cart
                                                            </NuxtLink>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr class="tr-description">
                                                    <td class="td-label">Description</td>
                                                    <td v-for="(product, index) in compareStore.compareItems" :key="index">
                                                        {{ product.shortDescription }}
                                                    </td>
                                                </tr>
                                                <tr class="tr-content">
                                                    <td class="td-label">Content</td>
                                                    <td v-for="(product, index) in compareStore.compareItems" :key="index" v-html="product.description">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useCompareStore } from '~/stores/compare'

// Init stores
const cartStore = useCartStore()
const compareStore = useCompareStore()

const { $helpers } = useNuxtApp();

const closeModal = () => {
    if (process.client) {
        $('#products-compare').modal('hide')
    }
}

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