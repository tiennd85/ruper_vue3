<template>
    <div :class="['block', 'block-lookbook', 'layout-' + layout, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <!-- Layout 1 -->
            <div v-if="layout == 1">
                <div :class="['background-overlay', 'background-' + background]"></div>
                <div v-if="lookbooks[0]" class="row">
                    <div class="col-md-6">
                        <div class="lookbook-wrap default"> 
                            <div class="lookbook-container">
                                <div class="lookbook-content">
                                    <div class="item">
                                        <img :width="lookbooks[0].image.width" :height="lookbooks[0].image.height" :src="require('@/assets/img/' + lookbooks[0].image.src)" :alt="lookbooks[0].image.alt">
                                        <div class="item-lookbook" v-for="(item, index) in lookbooks[0].items" :key="index" :style="'width:30px; height:30px; top:' + item.position.top + '; left:' + item.position.left">
                                            <span class="number-lookbook">{{ index + 1 }}</span>
                                            <div class="content-lookbook" :style="'top:' + item.content.position.top + '; bottom:' + item.content.position.bottom + '; left:' + item.content.position.left + '; right:' + item.content.position.right">
                                                <div class="item-thumb">
                                                    <nuxt-link :to="item.content.link">
                                                        <img width="1000" height="1000" :src="require('@/assets/img/' + item.content.image)" alt="">
                                                    </nuxt-link>
                                                </div>
                                                <div class="content-lookbook-bottom">
                                                    <div class="item-title">
                                                        <nuxt-link :to="item.content.link">
                                                            {{ item.content.title }}
                                                        </nuxt-link>
                                                    </div>
                                                    <div v-if="item.content.price > item.content.salePrice" class="price">
                                                        <del aria-hidden="true"><span>{{ $helpers.productPrice(item.content.price) }}</span></del> 
                                                        <ins><span>{{ $helpers.productPrice(item.content.salePrice) }}</span></ins>
                                                    </div>
                                                    <div v-else class="price">
                                                        {{ $helpers.productPrice(item.content.salePrice) }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="lookbook-intro-wrap position-center text-center">
                            <div class="lookbook-intro">
                                <h4 class="sub-title">{{ lookbooks[0].subtitle }}</h4>
                                <h2 v-html="lookbooks[0].title" class="title"></h2>
                                <nuxt-link v-if="lookbooks[0].button.link" :to="lookbooks[0].button.link" :class="lookbooks[0].button.class">
                                    {{ lookbooks[0].button.text }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div v-else-if="layout == 2" class="block-widget-wrap">
                <div class="row">
                    <div class="col-md-6">
                        <div v-if="lookbooks[0]" class="lookbook-wrap default"> 
                            <div class="lookbook-container">
                                <div class="lookbook-content">
                                    <div class="item">
                                        <img :width="lookbooks[0].image.width" :height="lookbooks[0].image.height" :src="require('@/assets/img/' + lookbooks[0].image.src)" :alt="lookbooks[0].image.alt">
                                        <div class="item-lookbook" v-for="(item, index) in lookbooks[0].items" :key="index" :style="'width:30px; height:30px; top:' + item.position.top + '; left:' + item.position.left">
                                            <span class="number-lookbook">{{ index + 1 }}</span>
                                            <div class="content-lookbook" :style="'top:' + item.content.position.top + '; bottom:' + item.content.position.bottom + '; left:' + item.content.position.left + '; right:' + item.content.position.right">
                                                <div class="item-thumb">
                                                    <nuxt-link :to="item.content.link">
                                                        <img width="1000" height="1000" :src="require('@/assets/img/' + item.content.image)" alt="">
                                                    </nuxt-link>
                                                </div>
                                                <div class="content-lookbook-bottom">
                                                    <div class="item-title">
                                                        <nuxt-link :to="item.content.link">
                                                            {{ item.content.title }}
                                                        </nuxt-link>
                                                    </div>
                                                    <div v-if="item.content.price > item.content.salePrice" class="price">
                                                        <del aria-hidden="true"><span>{{ $helpers.productPrice(item.content.price) }}</span></del> 
                                                        <ins><span>{{ $helpers.productPrice(item.content.salePrice) }}</span></ins>
                                                    </div>
                                                    <div v-else class="price">
                                                        {{ $helpers.productPrice(item.content.salePrice) }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div v-if="lookbooks[1]" class="lookbook-wrap default right">
                            <div class="lookbook-container">
                                <div class="lookbook-intro-wrap position-center text-center">
                                    <div class="lookbook-intro">
                                        <h2 class="title">{{ lookbooks[1].title }}</h2>
                                        <h4 class="sub-title">{{ lookbooks[1].subtitle }}</h4>
                                        <nuxt-link v-if="lookbooks[1].button.link" :to="lookbooks[1].button.link" :class="lookbooks[1].button.class">
                                            {{ lookbooks[1].button.text }}
                                        </nuxt-link>
                                    </div>
                                </div>
                                <div class="lookbook-content">
                                    <div class="item">
                                        <img :width="lookbooks[1].image.width" :height="lookbooks[1].image.height" :src="require('@/assets/img/' + lookbooks[1].image.src)" :alt="lookbooks[1].image.alt">
                                        <div class="item-lookbook" v-for="(item, index) in lookbooks[1].items" :key="index" :style="'width:30px; height:30px; top:' + item.position.top + '; left:' + item.position.left">
                                            <span class="number-lookbook">{{ index + 1 }}</span>
                                            <div class="content-lookbook" :style="'top:' + item.content.position.top + '; bottom:' + item.content.position.bottom + '; left:' + item.content.position.left + '; right:' + item.content.position.right">
                                                <div class="item-thumb">
                                                    <nuxt-link :to="item.content.link">
                                                        <img width="1000" height="1000" :src="require('@/assets/img/' + item.content.image)" alt="">
                                                    </nuxt-link>
                                                </div>
                                                <div class="content-lookbook-bottom">
                                                    <div class="item-title">
                                                        <nuxt-link :to="item.content.link">
                                                            {{ item.content.title }}
                                                        </nuxt-link>
                                                    </div>
                                                    <div v-if="item.content.price > item.content.salePrice" class="price">
                                                        <del aria-hidden="true"><span>{{ $helpers.productPrice(item.content.price) }}</span></del> 
                                                        <ins><span>{{ $helpers.productPrice(item.content.salePrice) }}</span></ins>
                                                    </div>
                                                    <div v-else class="price">
                                                        {{ $helpers.productPrice(item.content.salePrice) }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="layout == 3">
                <div class="block-widget-wrap">
                    <div class="lookbook-wrap default"> 
                        <div class="lookbook-container">
                            <div class="lookbook-content">
                                <div v-if="lookbooks[0]" class="item">
                                    <img :width="lookbooks[0].image.width" :height="lookbooks[0].image.height" :src="require('@/assets/img/' + lookbooks[0].image.src)" :alt="lookbooks[0].image.alt">
                                    <div class="item-lookbook" v-for="(item, index) in lookbooks[0].items" :key="index" :style="'width:30px; height:30px; top:' + item.position.top + '; left:' + item.position.left">
                                        <span class="number-lookbook">{{ index + 1 }}</span>
                                        <div class="content-lookbook" :style="'top:' + item.content.position.top + '; bottom:' + item.content.position.bottom + '; left:' + item.content.position.left + '; right:' + item.content.position.right">
                                            <div class="item-thumb">
                                                <nuxt-link :to="item.content.link">
                                                    <img width="1000" height="1000" :src="require('@/assets/img/' + item.content.image)" alt="">
                                                </nuxt-link>
                                            </div>
                                            <div class="content-lookbook-bottom">
                                                <div class="item-title">
                                                    <nuxt-link :to="item.content.link">
                                                        {{ item.content.title }}
                                                    </nuxt-link>
                                                </div>
                                                <div v-if="item.content.price > item.content.salePrice" class="price">
                                                    <del aria-hidden="true"><span>{{ $helpers.productPrice(item.content.price) }}</span></del> 
                                                    <ins><span>{{ $helpers.productPrice(item.content.salePrice) }}</span></ins>
                                                </div>
                                                <div v-else class="price">
                                                    {{ $helpers.productPrice(item.content.salePrice) }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="layout == 4">
                <div class="background-overlay"></div>
                <div v-if="lookbooks[0]" class="row">
                    <div class="col-md-6">
                        <div class="lookbook-intro-wrap">
                            <div class="lookbook-intro">
                                <h2 v-html="lookbooks[0].title" class="title"></h2>
                                <div class="description">{{ lookbooks[0].description }}</div>
                                <nuxt-link v-if="lookbooks[0].button.link" :to="lookbooks[0].button.link" :class="lookbooks[0].button.class">
                                    {{ lookbooks[0].button.text }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="lookbook-wrap default"> 
                            <div class="lookbook-container">
                                <div class="lookbook-content">
                                    <div class="item">
                                        <img :width="lookbooks[0].image.width" :height="lookbooks[0].image.height" :src="require('@/assets/img/' + lookbooks[0].image.src)" :alt="lookbooks[0].image.alt">
                                        <div class="item-lookbook" v-for="(item, index) in lookbooks[0].items" :key="index" :style="'width:30px; height:30px; top:' + item.position.top + '; left:' + item.position.left">
                                            <span class="number-lookbook">{{ index + 1 }}</span>
                                            <div class="content-lookbook" :style="'top:' + item.content.position.top + '; bottom:' + item.content.position.bottom + '; left:' + item.content.position.left + '; right:' + item.content.position.right">
                                                <div class="item-thumb">
                                                    <nuxt-link :to="item.content.link">
                                                        <img width="1000" height="1000" :src="require('@/assets/img/' + item.content.image)" alt="">
                                                    </nuxt-link>
                                                </div>
                                                <div class="content-lookbook-bottom">
                                                    <div class="item-title">
                                                        <nuxt-link :to="item.content.link">
                                                            {{ item.content.title }}
                                                        </nuxt-link>
                                                    </div>
                                                    <div v-if="item.content.price > item.content.salePrice" class="price">
                                                        <del aria-hidden="true"><span>{{ $helpers.productPrice(item.content.price) }}</span></del> 
                                                        <ins><span>{{ $helpers.productPrice(item.content.salePrice) }}</span></ins>
                                                    </div>
                                                    <div v-else class="price">
                                                        {{ $helpers.productPrice(item.content.salePrice) }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
    name: 'LookbookModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        lookbooks: Array,
        layout: {
            type: Number,
            default: 1
        },
        background: {
            type: Number,
            default: 1
        }
    }
}
</script>