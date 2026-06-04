<template>
    <div :class="['block block-product-cats', 'layout-' + layout, { 'slider' : view == 'slider' || layout == '5' }, { 'round-border': roundBorder }, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div :class="padding ? 'block-widget-wrap' : ''">
                <div v-if="view == 'sidebar'" class="product-cats-list">
                    <ul>
                        <li v-for="(item, index) in items" :key="index" :class="item.id == currentCat ? 'current' : ''">
                            <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                {{ item.title }} <span class="count">{{ item.count }}</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <div v-else-if="view == 'slider'" class="product-cats-list slick-wrap">
                    <slick class="slick-sliders content-category" ref="slick" :options="slickOptions">
                        <div v-for="(item, index) in items" :key="index" class="item item-product-cat">
                            <div class="item-product-cat-content">
                                <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                    <div class="item-image">
                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                    </div>
                                </NuxtLink>
                                <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">  
                                    <div class="item-image">
                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                    </div>
                                </NuxtLink>
                                <div class="product-cat-content-info">
                                    <h2 class="item-title">
                                        <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                        <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </slick>
                </div>
                <div v-else>
                    <div v-if="layout == '3'" class="row">
                        <div class="col-md-4 sm-m-b-50">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                        <img width="407" height="553" :src="items[0].image" :alt="items[0].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                        <h3>{{ items[0].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 center sm-m-b-50">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                        <img width="407" height="249" :src="items[1].image" :alt="items[1].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                        <h3>{{ items[1].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                        <img width="407" height="249" :src="items[2].image" :alt="items[2].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                        <h3>{{ items[2].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                        <img width="407" height="553" :src="items[3].image" :alt="items[3].title">
                                    </NuxtLink>
                                </div>
                                <div class="cat-title">
                                    <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                        <h3>{{ items[3].title }}</h3>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '4'" class="row">
                        <div v-for="(item, index) in items" :key="index" class="col-md-3 col-sm-6 sm-m-b-30">
                            <div class="item-product-cat-content">
                                <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                    <div class="item-image">
                                        <img width="330" height="300" :src="item.image" alt="item.title">
                                    </div>
                                </NuxtLink>        
                                <div class="product-cat-content-info">
                                    <h2 class="item-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '5'">
                        <div class="row">
                            <div class="col-md-3 sm-m-b-50">
                                <div class="product-cats-intro-wrap">
                                    <div class="product-cats-intro">
                                        <h2 class="title" v-html="introTitle"></h2>
                                        <div class="description" v-html="introDesc"></div>
                                        <div class="link">
                                            <NuxtLink :to="introBtnLink">
                                                {{ introBtnTitle }}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="product-cats-list slick-wrap">
                                    <slick class="slick-sliders content-category" ref="slick" :options="slickOptions2" @init="handleInit">
                                        <div v-for="(item, index) in items" :key="index" class="item item-product-cat">
                                            <div class="item-product-cat-content">
                                                <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                                    <div class="item-image">
                                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                                    </div>
                                                </NuxtLink>
                                                <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">  
                                                    <div class="item-image">
                                                        <img width="258" height="258" :src="item.image" :alt="item.title">
                                                    </div>
                                                </NuxtLink>
                                                <div class="product-cat-content-info">
                                                    <h2 class="item-title">
                                                        <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                                            {{ item.title }}
                                                        </NuxtLink>
                                                        <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                                            {{ item.title }}
                                                        </NuxtLink>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </slick>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '6'">
                        <div class="row">
                            <div v-for="(item, index) in items" :key="index" class="col-lg-3 col-md-6 md-b-10">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                            <img width="469" height="475" :src="item.image" :alt="item.title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: item.id } }">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="layout == '7'">
                        <div class="row">
                            <div class="col-md-4 sm-m-b-15">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                            <img width="407" height="553" :src="items[0].image" :alt="items[0].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[0].id } }">
                                            <h3>{{ items[0].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 center sm-m-b-15">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                            <img width="407" height="249" :src="items[1].image" :alt="items[1].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[1].id } }">
                                            <h3>{{ items[1].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                            <img width="407" height="249" :src="items[2].image" :alt="items[2].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[2].id } }">
                                            <h3>{{ items[2].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="cat-item">
                                    <div class="cat-image">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                            <img width="407" height="553" :src="items[3].image" :alt="items[3].title">
                                        </NuxtLink>
                                    </div>
                                    <div class="cat-title">
                                        <NuxtLink :to="{ path: '/products', query: { cat: items[3].id } }">
                                            <h3>{{ items[3].title }}</h3>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="row">
                        <div v-for="(item, index) in items" :key="index" class="col-md-3 sm-m-b-30">
                            <div class="cat-item">
                                <div class="cat-image">
                                    <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                        <img width="303" height="366" :src="item.image" :alt="item.title">
                                    </NuxtLink>
                                    <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                        <img width="303" height="366" :src="item.image" :alt="item.title">
                                    </NuxtLink>  
                                </div>
                                <div class="cat-title">
                                    <NuxtLink v-if="type == 'style'" :to="{ path: '/products', query: { style: item.id } }">
                                        <h3>{{ item.title }}</h3>
                                    </NuxtLink>
                                    <NuxtLink v-else :to="{ path: '/products', query: { cat: item.id } }">
                                        <h3>{{ item.title }}</h3>
                                    </NuxtLink>  
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
    name: 'ProductCatModule',
    props: {
        title: String,
        subTitle: String,
        introTitle: String,
        introDesc: String,
        introBtnTitle: String,
        introBtnLink: String,
        modClass: String,
        layout: {
            type: Number,
            default: 1
        },
        source: {
            type: Number,
            default: 1
        },
        type: {
            type: String,
            default: 'category'
        },
        limit: Number,
        view: String,
        roundBorder: {
            type: Boolean,
            default: false
        },
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
                responsive: [
                    { breakpoint: 1441, settings: { slidesToShow: 5, slidesToScroll: 5 } }, 
                    { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } }, 
                    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } }, 
                    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } }, 
                    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
                ]
            },
            slickOptions2: {
                slidesToShow: 3,
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
                    { breakpoint: 1441, settings: { slidesToShow: 3, slidesToScroll: 3 } }, 
                    { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } }, 
                    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } }, 
                    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } }, 
                    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
                ]
            }
        }
    },
    computed: {
        items() {
            let products = this.$store.state.products.allItems
            
            if (this.type == 'style') {
                let styles = this.limit ? this.$store.state.products.styles.slice(0, this.limit) : this.$store.state.products.styles
                return styles
            } else {
                let cats = [];
                if (this.source == '1') {
                    cats = this.limit ? this.$store.state.products.categories.slice(0, this.limit) : this.$store.state.products.categories
                } else if (this.source == '2') {
                    cats = this.limit ? this.$store.state.products.categories2.slice(0, this.limit) : this.$store.state.products.categories2
                } else if (this.source == '3') {
                    cats = this.limit ? this.$store.state.products.categories3.slice(0, this.limit) : this.$store.state.products.categories3
                } else if (this.source == '4') {
                    cats = this.limit ? this.$store.state.products.categories4.slice(0, this.limit) : this.$store.state.products.categories4
                } else if (this.source == '5') {
                    cats = this.limit ? this.$store.state.products.categories5.slice(0, this.limit) : this.$store.state.products.categories5
                } else if (this.source == '6') {
                    cats = this.limit ? this.$store.state.products.categories6.slice(0, this.limit) : this.$store.state.products.categories6
                } else if (this.source == '7') {
                    cats = this.limit ? this.$store.state.products.categories7.slice(0, this.limit) : this.$store.state.products.categories7
                }

                if (cats.length) {
                    cats.forEach(function (cat) {
                        let catProducts = products.filter(product => product.category == cat.id)
                        cat.count = catProducts.length
                    })
                }
                return cats
            }
        },
        currentCat() {
            return this.$route.query.cat ? this.$route.query.cat : 0
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
    }
}
</script>