<template>
    <div :class="['rating', { 'small' : size == 'small' }]">
        <div :class="'star star-' + rating"></div>
        <div v-if="reviewsCount && showCount" class="review-count">
            ({{ reviewsCount }}<span> reviews</span>)
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rating',
    props: {
        product: Object,
        showCount: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'normal'
        }
    },
    computed: {
        rating() {
            let rating = 0
            let reviewSum = 0
            
            if (this.product.reviews.length) { 
                this.product.reviews.forEach((review) => reviewSum += parseInt(review.rating))
                rating = Math.round(reviewSum / this.product.reviews.length)
            }
            
            return rating
        },
        reviewsCount() {
            return this.product.reviews.length
        }
    }
}
</script>