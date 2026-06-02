<template>
    <li v-if="view == 'sidebar'" class="product-item">
        <NuxtLink :to="'/product/' + product.id" class="product-image">
            <img v-if="product.images[0]" :src="product.images[0]" :alt="product.title">
        </NuxtLink>
        <div class="product-content">
            <h2 class="product-title">
                <NuxtLink :to="'/product/' + product.id">
                    {{ product.title }}
                </NuxtLink>
            </h2>
            <Rating :product="product" size="small" />
            <div v-if="product.price > product.salePrice" class="price small">
                <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del> 
                <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
            </div>
            <div v-else class="price">
                {{ $helpers.productPrice(product.salePrice) }}
            </div>
        </div>
    </li>
    <div v-else-if="!view || view == 'grid'" class="products-entry clearfix product-wapper">
        <div class="products-thumb">
            <div class="product-lable">
                <div v-if="product.hot" class="hot">Hot</div>
                <div v-if="product.price > product.salePrice" class="onsale">-{{ $helpers.discountPrice(product.price, product.salePrice) }}%</div>
            </div>
            <div class="product-thumb-hover">
                <NuxtLink :to="'/product/' + product.id">
                    <img v-if="product.images[0]" width="600" height="600" :src="product.images[0]" class="post-image" :alt="product.title">
                    <img v-if="product.images[1]" width="600" height="600" :src="product.images[1]" class="hover-image back" :alt="product.title">
                </NuxtLink>
            </div>
            <div class="product-button">
                <div v-if="layout == 1" class="btn-add-to-cart" :data-title="!cartItems.includes(product) ? 'Add to cart' : 'View cart'">
                    <NuxtLink v-if="!cartItems.includes(product)" event="" to="#" @click.native="addCartItem(product, $event)" class="product-btn button">
                        Add to cart
                    </NuxtLink>
                    <NuxtLink  v-else to="/cart" class="added-to-cart product-btn button">
                        View cart
                    </NuxtLink>
                </div>
                <div class="btn-wishlist" data-title="Wishlist">
                    <button v-if="!wishlistItems.includes(product)" @click="addWishlistItem(product, $event)" class="product-btn">Add to wishlist</button>
                    <button v-else class="product-btn added">Wishlist added</button>
                </div>
                <div class="btn-compare" data-title="Compare">
                    <button @click="addCompareItem(product, $event)" class="product-btn">Compare</button>
                </div>
                <div class="product-quickview" data-title="Quick View">
                    <NuxtLink event="" to="#" @click.native="$bvModal.show('product-modal-' + product.id)" class="quickview quickview-button">
                        Quick View <i class="icon-search"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="products-content">
            <div :class="['contents', { 'text-center' : layout == 1 }]">
                <h3 class="product-title">
                    <NuxtLink :to="'/product/' + product.id">
                        {{ product.title }}
                    </NuxtLink>
                </h3>
                <div v-if="product.price > product.salePrice" class="price">
                    <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del> 
                    <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
                </div>
                <div v-else class="price">
                    {{ $helpers.productPrice(product.salePrice) }}
                </div>
                <div v-if="layout == 2" class="btn-add-to-cart" :data-title="!cartItems.includes(product) ? 'Add to cart' : 'View cart'">
                    <NuxtLink v-if="!cartItems.includes(product)" event="" to="#" @click.native="addCartItem(product, $event)" class="button">
                        Add to cart
                    </NuxtLink>
                    <NuxtLink  v-else to="/cart" class="added-to-cart product-btn">
                        View cart
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="products-entry clearfix product-wapper">
        <div class="row">
            <div class="col-md-4">
                <div class="products-thumb">
                    <div class="product-lable">
                        <div v-if="product.hot" class="hot">Hot</div>
                        <div v-if="product.price > product.salePrice" class="onsale">-{{ $helpers.discountPrice(product.price, product.salePrice) }}%</div>
                    </div>
                    <div class="product-thumb-hover">
                        <NuxtLink :to="'/product/' + product.id">
                            <img v-if="product.images[0]" width="600" height="600" :src="product.images[0]" class="post-image" :alt="product.title">
                            <img v-if="product.images[1]" width="600" height="600" :src="product.images[1]" class="hover-image back" :alt="product.title">
                        </NuxtLink>
                    </div>
                    <span class="product-quickview" data-title="Quick View">
                        <NuxtLink event="" to="#" @click.native="$bvModal.show('product-modal-' + product.id)" class="quickview quickview-button">
                            Quick View <i class="icon-search"></i>
                        </NuxtLink>
                    </span>
                </div>
            </div>
            <div class="col-md-8">
                <div class="products-content">
                    <h3 class="product-title">
                        <NuxtLink :to="'/product/' + product.id">
                            {{ product.title }}
                        </NuxtLink>
                    </h3>
                    <Rating :product="product" :showCount="true" />
                    <div v-if="product.price > product.salePrice" class="price">
                        <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del> 
                        <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
                    </div>
                    <div v-else class="price">
                        {{ $helpers.productPrice(product.salePrice) }}
                    </div>
                    <div class="product-button">
                        <div class="btn-add-to-cart" :data-title="!cartItems.includes(product) ? 'Add to cart' : 'View cart'">
                            <NuxtLink v-if="!cartItems.includes(product)" event="" to="#" @click.native="addCartItem(product, $event)" class="product-btn button">
                                Add to cart
                            </NuxtLink>
                            <NuxtLink v-else to="/cart" class="added-to-cart product-btn button">
                                View cart
                            </NuxtLink>
                        </div>
                        <div class="btn-wishlist" data-title="Wishlist">
                            <button v-if="!wishlistItems.includes(product)" @click="addWishlistItem(product, $event)" class="product-btn">Add to wishlist</button>
                            <button v-else class="product-btn added">Wishlist added</button>
                        </div>
                        <div class="btn-compare" data-title="Compare">
                            <button @click="addCompareItem(product, $event)" class="product-btn">Compare</button>
                        </div>
                    </div>
                    <div class="product-description">
                        {{ product.excerpt }}
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
import { useWishlistStore } from '~/stores/wishlist'
import { useCompareStore } from '~/stores/compare'

const props = defineProps({
    product: { type: Object, required: true },
    view: { type: String, default: 'grid' },
    layout: { type: Number, default: 1 }
})

const { $helpers } = useNuxtApp();

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const compareStore = useCompareStore()

/*
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

// Add to Wishlist
const addWishlistItem = (product: any, event: Event) => {
    const btn = event.target as HTMLElement
    btn.classList.add('adding')

    setTimeout(() => {
        wishlistStore.addWishlistItem(product)
        btn.classList.remove('adding')
        showNotification('Product was added to wishlist successfully!')
    }, 1000)
}

// Add to Compare
const addCompareItem = (product: any) => {
    compareStore.addCompareItem(product)
}
*/
</script>