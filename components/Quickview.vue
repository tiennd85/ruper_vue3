<template>
    <div class="modal fade quickview" :id="'product-modal-' + product.id" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="quickview-popup">
                        <div class="quickview-container">
                            <span @click="closeModal(product.id)" class="quickview-close"></span>
                            <div class="product single-product product-type-simple">
                                <div class="product-detail">
                                    <div class="row">
                                        <div class="img-quickview">
                                            <div class="product-images-slider">
                                                <div id="quickview-slick-carousel">
                                                    <div class="images">
                                                        <div class="scroll-image">
                                                            <div class="slick-wrap">
                                                                <div class="slick-sliders image-additional" ref="sliderElement">
                                                                    <img v-for="(image, i) in product.images" :key="i" width="900" height="900" :src="image" :alt="product.title">
                                                                </div>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({
    product: { type: Object, required: true }
})

const sliderElement = ref(null)

const { $helpers } = useNuxtApp();

const cartStore = useCartStore()
const addCartNum = ref(1)

onMounted(async() => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;
        await import('slick-carousel');

        const modalId = `#product-modal-${props.product.id}`;

        $(modalId).on('shown.bs.modal', () => {
            const $slider = $(sliderElement.value);

            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('setPosition');
            } else {
                $slider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    infinite: true,
                    arrows: true,
                    dots: true,
                    prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
                    nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>'
                });
            }
        });
    }

})

onBeforeUnmount(() => {
    if (process.client && sliderElement.value) {
        const $slider = $(sliderElement.value);
    
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
    }
})

const closeModal = (productId: number) => {
    if (process.client) {
        $('#product-modal-' + productId).modal('hide')
    }
}

const plusQuantity = () => addCartNum.value++
const minusQuantity = () => {
    if (addCartNum.value > 1) addCartNum.value--
}

// Show notification
const showNotification = (message: string) => {
    const toast = document.createElement('div')
    toast.className = 'cart-product-added'
    toast.innerHTML = `<div class="added-message">${message}</div>`
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 1000)
}

// Add cart
const addCartItem = (product: any, event: Event) => {
    const btn = event.target as HTMLElement
    btn.classList.add('loading')

    setTimeout(() => {
        for (let j = 0; j < addCartNum.value; j++) {
            cartStore.addCartItem(product)
        }

        btn.classList.remove('loading')
        showNotification('Product was added to cart successfully!')
    }, 1000)
}
</script>