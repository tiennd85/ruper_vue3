<template>
    <div :class="['block', 'block-products', { 'slider': view == 'slider' }, modClass]">
        <div class="block-widget-wrap">
            <div v-if="title || subTitle" :class="['block-title', { 'title-underline': titleUnderline }]">
                <h2>{{ title }}</h2>
                <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
                <div v-if="titleRightText" class="title-right">
                    <nuxt-link :to="titleRightLink">
                        {{ titleRightText }}
                    </nuxt-link>
                </div>
            </div>
            <div class="block-content">
                <div v-if="navTab" class="">
                    <ul :class="['nav nav-tabs layout-' + navTabLayout, { 'small-text': navTabSmallText }, { 'align-left': navTabAlignLeft }]" role="tablist">
                        <li v-for="(cat, index) in cats" :key="index" class="nav-item">
                            <a :class="['nav-link', { 'active': index == 0 } ]" data-toggle="tab" :href="'#cat-' + cat.id" role="tab" aria-selected="false">{{ cat.title }}</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div v-for="(cat, index) in cats" :key="index" :class="['tab-pane fade', { 'active show': index == 0 } ]" :id="'cat-' + cat.id" role="tabpanel">
                            <div class="products-list grid">
                                <div class="row">
                                    <div :class="cols == '2' ? 'col-xl-6 col-lg-6 col-md-6 col-sm-12' : 'col-xl-3 col-lg-4 col-md-4 col-sm-6'" v-for="(product, productIndex) in cat.products" :key="productIndex">
                                        <ModulesProduct :product="product" :layout="layout" />
                                        
                                        <Quickview :product="product" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="view == 'sidebar'" class="content-product-list">
                    <ul class="products-list">
                        <ModulesProduct v-for="(item, index) in items" :key="index" :product="item" view="sidebar" />
                    </ul>
                </div>
                <div v-else-if="view == 'slider'" class="content-product-list slick-wrap">
                    <slick class="slick-sliders products-list grid" ref="slick" :options="slickOptions" @init="handleInit">
                        <div class="item-product" v-for="(item, index) in items" :key="index">
                            <ModulesProduct :product="item" :layout="layout" />
                            
                            <Quickview :product="item" />
                        </div>
                    </slick>
                    <div v-if="viewAll" class="btn-all">
                        <nuxt-link class="button-outline" to="/products">
                            VIEW ALL
                        </nuxt-link>
                    </div>
                </div>
                <div v-else class="products-list grid">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6" v-for="(item, index) in items" :key="index">
                            <ModulesProduct :product="item" :layout="layout" />

                            <Quickview :product="item" />
                        </div>
                    </div>
                </div>

                <Compare />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        limit: Number,
        filter: String,
        category: Number,
        view: String,
        layout: {
            type: Number,
            default: 1
        },
        cols: {
            type: Number,
            default: 4
        },
        viewAll: {
            type: Boolean,
            default: false
        },
        navTab: {
            type: Boolean,
            default: false
        },
        navTabLayout: {
            type: Number,
            default: 1
        },
        navTabSmallText: {
            type: Boolean,
            default: false
        },
        navTabAlignLeft: {
            type: Boolean,
            default: false
        },
        titleUnderline: {
            type: Boolean,
            default: false
        },
        titleRight: {
            type: Boolean,
            default: false
        },
        titleRightText: String,
        titleRightLink: String
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: 4,
                slidesToScroll: 4,
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
                        slidesToShow: 4,
                        slidesToScroll: 4,
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
                        slidesToShow: 3,
                        slidesToScroll: 3,
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
    computed: {
        cats() {
            let products = this.$store.state.products.allItems
            let cats = this.$store.state.products.categories.filter(cat => cat.tab === true)
            if (cats.length) {
                let limit = this.limit
                cats.forEach(function (cat) {
                    let catProducts = products.filter(product => product.category == cat.id)
                    cat.products = limit ? catProducts.slice(0, limit) : catProducts
                })
            }
            return cats
        },
        items() {
            let products = this.$store.state.products.allItems
            if (this.filter == 'bestSeller') {
                products = products.filter(product => product.bestSeller === true)
            }
            if (this.filter == 'feature') {
                products = products.filter(product => product.feature === true)
            }
            if (this.filter == 'related') {
                products = products.filter(product => product.related.includes(this.category))
            }
            return this.limit ? products.slice(0, this.limit) : products
        }
    },
    methods: {
        // Slick
        handleInit(event, slick) {
            // Move nav outsite
            const $element = window.$(this.$refs.slick.$el);
            if (window.$('.slick-arrow', $element).length > 0) {
                if (window.$('.fa-angle-left', $element).length > 0) {
                    var $prev = window.$('.fa-angle-left', $element).clone();
                    window.$('.fa-angle-left', $element).remove();
                    if ($element.parent().find('.fa-angle-left').length == 0) {
                        $prev.prependTo($element.parent());
                    }
                    $prev.click(function() {
                        $element.slick('slickPrev');
                    });
                }
                if (window.$('.fa-angle-right', $element).length > 0) {
                    var $next = window.$('.fa-angle-right', $element).clone();
                    window.$('.fa-angle-right', $element).remove();
                    if ($element.parent().find('.fa-angle-right').length == 0) {
                        $next.appendTo($element.parent());
                    }
                    $next.click(function() {
                        $element.slick('slickNext');
                    })
                }
            } else {
                window.$('.fa-angle-left', $element.parent()).remove();
                window.$('.fa-angle-right', $element.parent()).remove();
            }
        }
    },
    onMounted () {
        window.$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            window.$(this).closest('.block').find('.slick-sliders').slick('refresh');
        });
    }
}
</script>