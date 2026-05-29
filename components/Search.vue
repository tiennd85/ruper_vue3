<template>
    <div v-if="toggle" :class="[{ 'hidden-lg' : hiddenLg }]">
        <div class="search-box">
            <div class="search-toggle" @click="openSearch"><i class="icon-search"></i></div>
        </div>
        <div class="search-overlay">
            <div class="wrapper-search">
                <div class="close-search" @click="closeSearch">
                    <i class="icon_close"></i>
                </div>
                <form role="search" method="get" class="search-from ajax-search" action="">
                    <div class="search-box">
                        <button class="btn" type="submit">
                            <i class="icon-search"></i>
                        </button>
                        <input type="text" v-model="keyword" @keyup="searchProduct" name="s" class="input-search s" placeholder="Search..." autocomplete="off">
                        <div v-if="searchItems.length" class="search-result">
                            <ul class="items">
                                <li class="item" v-for="(item, index) in searchItems" :key="index">
                                    <NuxtLink :to="'/product/' + item.id" class="product-image">
                                        <img v-if="item.images[0]" width="600" height="600" :src="item.images[0]" :alt="item.title">
                                    </NuxtLink>
                                    <NuxtLink :to="'/product/' + item.id" class="product-name">
                                        {{ item.title }}
                                    </NuxtLink>
                                    <div v-if="item.price > item.salePrice" class="price">
                                        <del aria-hidden="true"><span>{{ $helpers.productPrice(item.price) }}</span></del> 
                                        <ins><span>{{ $helpers.productPrice(item.salePrice) }}</span></ins>
                                    </div>
                                    <div v-else class="price">
                                        {{ $helpers.productPrice(item.salePrice) }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div v-else class="search-suggestion">
                            <label>Suggested</label>
                            <ul class="menu">
                                <li><NuxtLink to="#">Furniture</NuxtLink></li>
                                <li><NuxtLink to="#">Home Décor</NuxtLink></li>
                                <li><NuxtLink to="#">Industrial</NuxtLink></li>
                                <li><NuxtLink to="#">Kitchen</NuxtLink></li>
                            </ul>           
                        </div>
                    </div>
                </form> 
            </div>  
        </div>
    </div>
    <div v-else class="header-search-form hidden-md hidden-sm hidden-xs">
        <form role="search" method="get" class="search-from ajax-search" action="">
            <div class="search-box">
                <input type="text" v-model="keyword" @keyup="searchProduct" name="s" class="input-search s" placeholder="What are you looking for?" autocomplete="off">
                <div v-if="searchItems.length" class="search-result">
                    <ul class="items">
                        <li class="item" v-for="(item, index) in searchItems" :key="index">
                            <NuxtLink :to="'/product/' + item.id" class="product-image">
                                <img v-if="item.images[0]" width="600" height="600" :src="item.images[0]" :alt="item.title">
                            </NuxtLink>
                            <NuxtLink :to="'/product/' + item.id" class="product-name">
                                {{ item.title }}
                            </NuxtLink>
                            <div v-if="item.price > item.salePrice" class="price">
                                <del aria-hidden="true"><span>{{ $helpers.productPrice(item.price) }}</span></del> 
                                <ins><span>{{ $helpers.productPrice(item.salePrice) }}</span></ins>
                            </div>
                            <div v-else class="price">
                                {{ $helpers.productPrice(item.salePrice) }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <button id="search-submit" class="btn" type="submit">
                <span class="search-icon">
                    <i class="icon-search"></i>
                </span>
                <span>Search</span>
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '~/stores/search';

const { $helpers } = useNuxtApp();

const props = defineProps({
    toggle: { type: Boolean, default: true },
    hiddenLg: { type: Boolean, default: false }
});

const keyword = ref('');
const searchStore = useSearchStore();

const { searchItems } = storeToRefs(searchStore);

const openSearch = async () => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;

        $('.page-wrapper').addClass('opacity-style');
        $('.search-overlay').addClass('search-visible');
    }
};

const closeSearch = async () => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;

        $('.page-wrapper').removeClass('opacity-style');
        $('.search-overlay').removeClass('search-visible');
    }
};

const searchProduct = async () => {
    searchStore.searchProducts(keyword.value);
};
</script>