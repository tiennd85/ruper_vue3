<template>
    <div :class="['block block-instagram', { 'slider': slider }, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div v-if="slider" class="slick-wrap">
                <slick class="slick-sliders" ref="slick" :options="slickOptions">
                    <div class="item" v-for="(instagram, index) in instagrams" :key="index">
                        <NuxtLink :to="instagram.link" class="instagram">
                            <img :width="instagram.image.width" :height="instagram.image.height" :src="instagram.image.src" :alt="instagram.image.alt">
                        </NuxtLink>
                    </div>
                </slick>
            </div>
            <div v-else class="block-widget-wrap">
                <div class="row">
                    <div class="col-md-6 left sm-m-b">
                        <NuxtLink :to="instagrams[0].link" class="instagram">
                            <img :width="instagrams[0].image.width" :height="instagrams[0].image.height" :src="instagrams[0].image.src" :alt="instagrams[0].image.alt">
                        </NuxtLink>
                    </div>
                    <div class="col-md-6 right">
                        <div class="row">
                            <div class="col-md-6 sm-m-b">
                                <NuxtLink :to="instagrams[1].link" class="instagram">
                                    <img :width="instagrams[1].image.width" :height="instagrams[1].image.height" :src="instagrams[1].image.src" :alt="instagrams[1].image.alt">
                                </NuxtLink>
                            </div>
                            <div class="col-md-6">
                                <NuxtLink :to="instagrams[2].link" class="instagram">
                                    <img :width="instagrams[2].image.width" :height="instagrams[2].image.height" :src="instagrams[2].image.src" :alt="instagrams[2].image.alt">
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 sm-m-b">
                                <NuxtLink :to="instagrams[3].link" class="instagram">
                                    <img :width="instagrams[3].image.width" :height="instagrams[3].image.height" :src="instagrams[3].image.src" :alt="instagrams[3].image.alt">
                                </NuxtLink>
                            </div>
                            <div class="col-md-6">
                                <NuxtLink :to="instagrams[4].link" class="instagram">
                                    <img :width="instagrams[4].image.width" :height="instagrams[4].image.height" :src="instagrams[4].image.src" :alt="instagrams[4].image.alt">
                                </NuxtLink>
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
    name: 'InstagramModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        instagrams: Array,
        slider: {
            type: Boolean,
            default: false
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
                responsive: [
                    { breakpoint: 1441, settings: { slidesToShow: 5, slidesToScroll: 5 } }, 
                    { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } }, 
                    { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 4 } }, 
                    { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 3 } }, 
                    { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } }
                ]
            }
        }
    }
}
</script>