<template>
    <div :class="['rating', { 'small' : size == 'small' }]">
        <div :class="'star star-' + rating"></div>
        <div v-if="reviewsCount && showCount" class="review-count">
            ({{ reviewsCount }}<span> reviews</span>)
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
    product: { type: Object, required: true },
    showCount: { type: Boolean, default: false },
    size: { type: String, default: 'normal' }
})

const rating = computed(() => {
    const reviews = props.product?.reviews || []
    if (reviews.length === 0) return 0

    const reviewSum = reviews.reduce((sum: number, review: any) => sum + parseInt(review.rating), 0)
    return Math.round(reviewSum / reviews.length)
})

const reviewsCount = computed(() => {
    return props.product?.reviews?.length || 0
})
</script>