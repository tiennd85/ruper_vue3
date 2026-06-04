<template>
    <div :class="['block block-testimonial layout-' + layout, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="block-widget-wrap">
                <div class="testimonial-wrap slick-wrap">
                    <slick class="slick-sliders" ref="slick" :options="slickOptions">
                        <div class="testimonial-content" v-for="(testimonial, index) in testimonials" :key="index">
                            <div v-if="layout == '1'" class="item">
                                <div class="testimonial-item">
                                    <div class="rating">
                                        <div :class="'star star-' + testimonial.rating"></div>
                                    </div>
                                    <div class="testimonial-excerpt">
                                        ” {{ testimonial.content }} “
                                    </div>                              
                                </div>
                                <div class="testimonial-image image-position-top">
                                    <div class="thumbnail">
                                        <img width="62" height="62" :src="testimonial.image" :alt="testimonial.name">
                                    </div>
                                    <div class="testimonial-info">
                                        <h2 class="testimonial-customer-name">{{ testimonial.name }}</h2>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="item">
                                <div class="testimonial-item">
                                    <div class="testimonial-icon">
                                        <div class="rating">
                                            <div :class="'star star-' + testimonial.rating"></div>
                                        </div>
                                        <span class="icon-quote"></span>
                                    </div>
                                    <h2 class="testimonial-title">Amazing piece of history</h2>
                                    <div class="testimonial-excerpt">
                                        ” {{ testimonial.content }} “
                                    </div>                              
                                </div>
                                <div class="testimonial-image image-position-top">
                                    <div class="thumbnail">
                                        <img width="62" height="62" :src="testimonial.image" :alt="testimonial.name">                         
                                    </div>
                                    <div class="testimonial-info">
                                        <h2 class="testimonial-customer-name">{{ testimonial.name }}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </slick>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestimonialModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        testimonials: Array,
        itemsShow: {
            type: Number,
            default: 1
        },
        layout: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            slickOptions: {
                slidesToShow: this.itemsShow,
                slidesToScroll: this.itemsShow,
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
                    { breakpoint: 1441, settings: { slidesToShow: (this.itemsShow > 1) ? this.itemsShow : 1, slidesToScroll: (this.itemsShow > 1) ? this.itemsShow : 1 } }, 
                    { breakpoint: 1200, settings: { slidesToShow: (this.itemsShow > 1) ? 2 : 1, slidesToScroll: (this.itemsShow > 1) ? 2 : 1 } }, 
                    { breakpoint: 1024, settings: { slidesToShow: (this.itemsShow > 1) ? 2 : 1, slidesToScroll: (this.itemsShow > 1) ? 2 : 1 } }, 
                    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, vertical: !1, verticalSwiping: !1 } }, 
                    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, vertical: !1, verticalSwiping: !1 } }
                ]
            }
        }
    }
}
</script>