<template>
    <li v-if="view == 'sidebar'" class="product-item">
        <nuxt-link :to="'/product/' + product.id" class="product-image">
            <img v-if="product.images[0]" :src="require('@/assets/img/' + product.images[0])" :alt="product.title">
        </nuxt-link>
        <div class="product-content">
            <h2 class="product-title">
                <nuxt-link :to="'/product/' + product.id">
                    {{ product.title }}
                </nuxt-link>
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
                <nuxt-link :to="'/product/' + product.id">
                    <img v-if="product.images[0]" width="600" height="600" :src="require('@/assets/img/' + product.images[0])" class="post-image" :alt="product.title">
                    <img v-if="product.images[1]" width="600" height="600" :src="require('@/assets/img/' + product.images[1])" class="hover-image back" :alt="product.title">
                </nuxt-link>
            </div>
            <div class="product-button">
                <div v-if="layout == 1" class="btn-add-to-cart" :data-title="!cartItems.includes(product) ? 'Add to cart' : 'View cart'">
                    <nuxt-link v-if="!cartItems.includes(product)" event="" to="#" @click.native="addCartItem(product, $event)" class="product-btn button">
                        Add to cart
                    </nuxt-link>
                    <nuxt-link  v-else to="/cart" class="added-to-cart product-btn button">
                        View cart
                    </nuxt-link>
                </div>
                <div class="btn-wishlist" data-title="Wishlist">
                    <button v-if="!wishlistItems.includes(product)" @click="addWishlistItem(product, $event)" class="product-btn">Add to wishlist</button>
                    <button v-else class="product-btn added">Wishlist added</button>
                </div>
                <div class="btn-compare" data-title="Compare">
                    <button @click="addCompareItem(product, $event)" class="product-btn">Compare</button>
                </div>
                <div class="product-quickview" data-title="Quick View">
                    <nuxt-link event="" to="#" @click.native="$bvModal.show('product-modal-' + product.id)" class="quickview quickview-button">
                        Quick View <i class="icon-search"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="products-content">
            <div :class="['contents', { 'text-center' : layout == 1 }]">
                <h3 class="product-title">
                    <nuxt-link :to="'/product/' + product.id">
                        {{ product.title }}
                    </nuxt-link>
                </h3>
                <div v-if="product.price > product.salePrice" class="price">
                    <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del> 
                    <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
                </div>
                <div v-else class="price">
                    {{ $helpers.productPrice(product.salePrice) }}
                </div>
                <div v-if="layout == 2" class="btn-add-to-cart" :data-title="!cartItems.includes(product) ? 'Add to cart' : 'View cart'">
                    <nuxt-link v-if="!cartItems.includes(product)" event="" to="#" @click.native="addCartItem(product, $event)" class="button">
                        Add to cart
                    </nuxt-link>
                    <nuxt-link  v-else to="/cart" class="added-to-cart product-btn">
                        View cart
                    </nuxt-link>
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
                        <nuxt-link :to="'/product/' + product.id">
                            <img v-if="product.images[0]" width="600" height="600" :src="require('@/assets/img/' + product.images[0])" class="post-image" :alt="product.title">
                            <img v-if="product.images[1]" width="600" height="600" :src="require('@/assets/img/' + product.images[1])" class="hover-image back" :alt="product.title">
                        </nuxt-link>
                    </div>
                    <span class="product-quickview" data-title="Quick View">
                        <nuxt-link event="" to="#" @click.native="$bvModal.show('product-modal-' + product.id)" class="quickview quickview-button">
                            Quick View <i class="icon-search"></i>
                        </nuxt-link>
                    </span>
                </div>
            </div>
            <div class="col-md-8">
                <div class="products-content">
                    <h3 class="product-title">
                        <nuxt-link :to="'/product/' + product.id">
                            {{ product.title }}
                        </nuxt-link>
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
                            <nuxt-link v-if="!cartItems.includes(product)" event="" to="#" @click.native="addCartItem(product, $event)" class="product-btn button">
                                Add to cart
                            </nuxt-link>
                            <nuxt-link v-else to="/cart" class="added-to-cart product-btn button">
                                View cart
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
                    <div class="product-description">
                        {{ product.excerpt }}
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from '~/components/Rating'

export default {
    name: 'Product',
    props: {
        product: Object,
        view: {
            type: String,
            default: 'grid'
        },
        layout: {
            type: Number,
            default: 1
        }
    },
    computed: {
        ...mapGetters({
            cartItems: 'cart/cartItems',
            wishlistItems: 'wishlist/wishlistItems'
        })
    },
    methods: {
        // Add product to cart
        addCartItem: function(product, event) {
            const t = this
            const btn_atc = $(event.target)
            btn_atc.addClass('loading')
            setTimeout(function() {
                // Add item to cart
                t.$store.dispatch('cart/addCartItem', product)

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
        }
    }
}
</script>