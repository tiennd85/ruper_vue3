<template>
    <b-modal :id="'product-modal-' + product.id" modal-class="quickview" centered hide-header hide-footer>
        <div class="quickview-popup">
            <div class="quickview-container">
                <span @click="$bvModal.hide('product-modal-' + product.id)" class="quickview-close"></span>
                <div class="product single-product product-type-simple">
                    <div class="product-detail">
                        <div class="row">
                            <div class="img-quickview">
                                <div class="product-images-slider">
                                    <div id="quickview-slick-carousel">
                                        <div class="images">
                                            <div class="scroll-image">
                                                <div class="slick-wrap">
                                                    <slick class="slick-sliders image-additional" ref="slick" :options="slickOptions">
                                                        <img v-for="(image, i) in product.images" :key="i" width="900" height="900" :src="require('@/assets/img/' + image)" :alt="product.title">
                                                    </slick>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quickview-single-info">
                                <div class="product-content-detail entry-summary">
                                    <h1 class="product-title entry-title">{{ product.title }}</h1>
                                    <Rating :product="product" :showCount="true" />
                                    <div class="price-single">
                                        <div v-if="product.price > product.salePrice" class="price">
                                            <del aria-hidden="true"><span>{{ $helpers.productPrice(product.price) }}</span></del>
                                            <ins><span>{{ $helpers.productPrice(product.salePrice) }}</span></ins>
                                        </div>
                                        <div v-else class="price">
                                            {{ $helpers.productPrice(product.salePrice) }}
                                        </div>
                                    </div>
                                    <div class="description">
                                        <p>{{ product.shortDescription }}</p>
                                    </div>
                                    <div class="cart">
                                        <div class="quantity-button">
                                            <div class="quantity">
                                                <button @click="plusQuantity" type="button" class="plus">+</button>
                                                <input type="number" :value="addCartNum" class="input-text qty text" title="Qty" size="4" inputmode="numeric" autocomplete="off">
                                                <button @click="minusQuantity" type="button" class="minus">-</button>
                                            </div>
                                            <button type="submit" @click="addCartItem(product, $event)" class="single-add-to-cart-button button alt">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div> 
        </div>
    </b-modal>
</template>

<script>
/*
export default {
    name: 'Quickview',
    props: {
        product: Object
    },
    computed: { 
        ...mapGetters({
            cartItems: 'cart/cartItems'
        })
    },
    data() {
        return {
            addCartNum: 1,
            slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: true,
                arrows: true,
                dots: true,
                draggable: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                cssEase: 'linear',
                prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
                nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>'
            }
        }
    },
    methods: {
        plusQuantity() {
            this.addCartNum++
        },
        minusQuantity() {
            if (this.addCartNum > 1) {
                this.addCartNum--
            }
        },
        addCartItem: function(product, event) { 
            const t = this
            const btn_atc = $(event.target)
            btn_atc.addClass('loading')
            setTimeout(function() {
                // Add item to cart
                for (let j = 0; j < t.addCartNum; j++) {
                    t.$store.dispatch('cart/addCartItem', product)
                }
                
                btn_atc.removeClass('loading')
                
                // Display message
                $('body').append('<div class="cart-product-added"><div class="added-message">Product was added to cart successfully!</div>')
                setTimeout(function() {
                    $('.cart-product-added').remove()
                }, 1000)
            }, 1000)
        }
    }
}
*/
</script>