<template>
    <div :class="['block block-countdown', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="row">
                <div class="col-md-6">
                    <div class="countdown-wrap">
                        <h2 class="countdown-title">{{ countdownTitle }}</h2>
                        <div class="countdown-content-wrap">
                            <h2 class="product-title">
                                <NuxtLink :to="'/product/' + productId">{{ productTitle }}</NuxtLink>
                            </h2>
                            <div class="product-price">
                                {{ productPrice }}
                            </div>
                            <div class="countdown">
                                <div class="countdown-deal">
                                    <div class="product-countdown" data-day="Days" data-hour="Hours" data-min="Mins" data-sec="Secs" data-date="1668008467" data-sttime="1668008467" data-cdtime="1668008467">
                                        <div class="countdown">
                                            <div class="countdown-deal">
                                                <div class="product-countdown">
                                                    <span class="countdown-content">
                                                        <span class="days">
                                                            <span class="countdown-amount">{{ days }}</span>
                                                            <span class="countdown-text">Days</span>
                                                        </span>
                                                        <span class="countdown-section hours">
                                                            <span class="countdown-amount">{{ hours }}</span>
                                                            <span class="countdown-text">Hours</span>
                                                        </span>
                                                        <span class="countdown-section mins">
                                                            <span class="countdown-amount">{{ minutes }}</span>
                                                            <span class="countdown-text">Mins</span>
                                                        </span>
                                                        <span class="countdown-section secs">
                                                            <span class="countdown-amount">{{ seconds }}</span>
                                                            <span class="countdown-text">Secs</span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="countdown-button">
                                <NuxtLink :to="'/product/' + productId">View Details</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="position-center">
                        <div class="countdown-img">
                            <img width="720" height="393" :src="image" calt="">
                            <div class="sub-img">
                                <img class="animation-round" width="105" height="105" :src="subImage1" alt="">
                                <img class="image-center" width="17" height="20" :src="subImage2" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    countdownTitle: String,
    productTitle: String,
    productPrice: String,
    productId: String,
    image: String,
    subImage1: String,
    subImage2: String,
    endDate: String
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let timer: ReturnType<typeof setInterval>

const updateRemaining = (distance: number) => {
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

const tick = () => {
    const currentTime = new Date().getTime()
    const endDate = new Date(props.endDate).getTime()
    const distance = Math.max(endDate - currentTime, 0)

    updateRemaining(distance)

    if (distance === 0) {
        clearInterval(timer)
    }
}

onMounted(() => {
    tick()
    timer = setInterval(tick, 1000)
})

onUnmounted(() => {
    clearInterval(timer)
})
</script>