<template>
    <div :class="['block', 'block-image', { 'slider': images }, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div :class="padding ? 'block-widget-wrap' : ''">
                <div v-if="images" class="slick-wrap">
                    <slick class="slick-sliders" ref="slick" :options="slickOptions">
                        <div class="item" v-for="(image, index) in images" :key="index">
                            <div class="item-image">
                                <a :href="image.link">
                                    <img width="450" height="450" :src="require('@/assets/img/' + image.image)" :alt="image.title">
                                </a>
                            </div>
                        </div>
                    </slick>
                </div>
                <img v-else :class="[imgClass]" :width="width" :height="height" :src="image" :alt="alt">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageModule',
    props: {
        title: String,
        subTitle: String,
        image: String,
        images: Array,
        width: String,
        height: String,
        alt: String,
        modClass: String,
        imgClass: String,
        padding: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 5,
                autoplay: false,
                infinite: true,
                arrows: true,
                dots: false,
                draggable: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
                nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',
                responsive: [{
                    breakpoint: 1441,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }]
            }
        }
    }
}
</script>