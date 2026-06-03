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
                            <img width="720" height="393" :src="require('@/assets/img/' + image)" calt="">
                            <div class="sub-img">
                                <img class="animation-round" width="105" height="105" :src="require('@/assets/img/' + subImage1)" alt="">
                                <img class="image-center" width="17" height="20" :src="require('@/assets/img/' + subImage2)" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountdownModule',
    props: {
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
    },
    data() {
        return {
            days: null,
            hours: null,
            minutes: null,
            seconds: null,
        }
    },
    methods: {
        updateRemaining(distance) {
            this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
        },    
        tick() {
            const currentTime = new Date()
            const endDate = new Date(this.endDate);
            const distance = Math.max(endDate - currentTime, 0)
            this.updateRemaining(distance)

            if (distance === 0) {
                clearInterval(this.timer)
            }
        },
    },
    mounted () {
        this.tick()
        this.timer = setInterval(this.tick.bind(this), 1000)
    },
    destroy () {
        clearInterval(this.timer)
    }
}
</script>