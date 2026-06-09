<template>
    <div :class="['block block-product-filter clearfix', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>

        <div class="block-content">
            <div v-if="filter === 'price'" class="price-filter">
                <div ref="sliderRef"></div>
                <div class="price-slider-range">
                    Price: ${{ priceValues[0] }} - ${{ priceValues[1] }}
                </div>
            </div>

            <ul v-else-if="filter === 'size'" class="filter-items text">
                <li 
                    v-for="size in sizes" 
                    :key="size" 
                    @click="filterItemsBySize(size)" 
                    :class="{'active': size === activeSize}"
                    >
                    <span>{{ size }}</span>
                </li>
            </ul>

            <ul v-else-if="filter === 'brand'" class="filter-items image">
                <li 
                    v-for="brand in productStore.brands" 
                    :key="brand.id" 
                    @click="filterItemsByBrand(brand.id)" 
                    :class="{'active': brand.id === activeBrand}"
                >
                    <span>
                        <img :src="brand.image" :alt="brand.title">
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'
import { useProductStore } from '~/stores/product'

const props = defineProps<{
    title?: string
    subTitle?: string
    modClass?: string
    filter?: 'price' | 'size' | 'brand'
}>()

const sliderRef = ref(null)
const priceValues = ref([0, 300])
const productStore = useProductStore()

// State
const priceRange = ref([0, 300])
const sizes = ref(['S', 'M', 'L'])
const activeSize = ref('')
const activeBrand = ref('')

// Methods
const filterItemsByPrice = (value: number[]) => {
    productStore.filterItemsByPrice(value)
}

const filterItemsBySize = (size: string) => {
    activeSize.value = size
    productStore.filterItemsBySize(size)
}

const filterItemsByBrand = (brandId: string) => {
    activeBrand.value = brandId
    productStore.filterItemsByBrand(brandId)
}

onMounted(() => {
  if (sliderRef.value) {
    const slider = noUiSlider.create(sliderRef.value, {
        start: [0, 300],
        connect: true,
        range: {
            'min': 0,
            'max': 300
        },
        cssPrefix: 'noUi-', 
    })

    slider.on('update', (values: any) => {
        priceValues.value = [
            Math.round(values[0]), 
            Math.round(values[1])
        ]
    })

    slider.on('change', (values: any) => {
        productStore.filterItemsByPrice([parseFloat(values[0]), parseFloat(values[1])])
    })
  }
})
</script>

<style>
.noUi-connect { 
    background: black; 
}
.noUi-horizontal {
    height: 6px;
    margin-bottom: 6px;
}
.noUi-horizontal .noUi-handle {
    width: 12px;
    height: 12px;
    box-shadow: none;
    right: -9px;
    top: -4px;
    background: black; 
    border-radius: 50%; 
    cursor: pointer;
}
.noUi-horizontal .noUi-handle:before, 
.noUi-horizontal .noUi-handle:after {
    content: none;
}
</style>