<template>
    <div :class="['block block-product-filter clearfix', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div v-if="filter == 'price'" class="price-filter">
                <vue-slider
                    v-model="priceRange"
                    :min="0"
                    :max="300"
                    ref="slider"
                    :dot-style="{ background: 'black', boxShadow: 'none' }"
                    :dotSize="12"
                    :tooltip-style="{ background: 'black', borderColor: 'black' }"
                    :process-style="{ background: 'black' }"
                    @drag-end="filterItemsByPrice($refs.slider.getValue())">
                </vue-slider>
                <div class="price-slider-range">Price: ${{priceRange[0]}} - ${{priceRange[1]}}</div>
            </div>
            <ul v-else-if="filter == 'size'" class="filter-items text">
                <li v-for="(size, index) in sizes" :key="index" @click="filterItemsBySize(size)" :class="{'active' : size == activeSize}">
                    <span>{{ size }}</span>
                </li>
            </ul>
            <ul v-else-if="filter == 'brand'" class="filter-items image">
                <li v-for="(brand, index) in brands" :key="index" @click="filterItemsByBrand(brand.id)" :class="{'active' : brand.id == activeBrand}">
                    <span>
                        <img :src="require('@/assets/img/' + brand.image)" alt="brand.title">
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductFilterModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        filter: {
            type: String,
            default: 'price'
        }
    },
    computed: {
        brands() {
            return this.$store.state.products.brands
        }
    },
    data() {
        return { 
            priceRange: [0, 300],
            sizes: ['S', 'M', 'L'],
            activeSize: '',
            activeBrand: ''
        }
    },
    methods: {
        filterItemsByPrice(value) {
            this.$store.dispatch('products/filterItemsByPrice', value)
        },
        filterItemsBySize(size) {
            this.activeSize = size
            this.$store.dispatch('products/filterItemsBySize', size)
        },
        filterItemsByBrand(brand) {
            this.activeBrand = brand
            this.$store.dispatch('products/filterItemsByBrand', brand)
        }
    }
}
</script>