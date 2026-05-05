<template>
    <div :class="['block block-posts recent-posts', 'layout-' + layout, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div v-if="view == 'list'">
                <div v-if="layout == '3'">
                    <Blog v-for="(item, index) in items" :key="index" :blog="item" :layout="3" />
                </div>
                <ul v-else class="posts-list">
                    <Blog v-for="(item, index) in items" :key="index" :blog="item" :layout="4" />
                </ul>
            </div>
            <div v-else class="posts-wrap block-widget-wrap">
                <div class="slick-wrap">
                    <slick class="slick-sliders products-list grid" ref="slick" :options="slickOptions">
                        <Blog v-for="(item, index) in items" :key="index" :blog="item" :layout="3" />
                    </slick>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        limit: Number,
        view: {
            type: String,
            default: 'list'
        },
        layout: {
            type: Number,
            default: 1
        },
        limit: Number
    },
    computed: {
        items() {
            let blogs = this.$store.state.blogs.items
            return this.limit ? blogs.slice(0, this.limit) : blogs
        }
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: true,
                arrows: true,
                dots: false,
                draggable: true,
                touchMove: false,
                pauseOnHover: false,
                pauseOnFocus: false,
                cssEase: 'linear',
                prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
                nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>',
                responsive: [{
                    breakpoint: 1441,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }, {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        vertical: !1,
                        verticalSwiping: !1,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: !1,
                        verticalSwiping: !1,
                    }
                }]
            }
        }
    },
}
</script>