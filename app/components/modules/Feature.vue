<template>
    <div :class="['block', 'block-feature', 'layout-' + layout, { 'no-border' : noBorder }, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="block-widget-wrap">
                <div class="row lg-m-lr">
                    <div v-for="(feature, index) in items" :key="index" :class="limit == '4' ? 'col-lg-3 col-md-6 col-sm-6 md-b-15 lg-p-lr' : 'col-md-4 sm-m-b-50'">
                        <div class="box">
                            <div class="box-icon">
                                <span>
                                    <img :src="require('@/assets/img/' + feature.icon)" :alt="feature.title" />
                                </span>
                            </div>
                            <div class="box-title-wrap">
                                <h3 class="box-title">
                                    {{ feature.title }}
                                </h3>
                                <p v-if="!noDesc" class="box-description">
                                    {{ feature.description }}
                                </p>
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
    name: 'FeatureModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        features: Array,
        layout: {
            type: Number,
            default: 1
        },
        limit: {
            type: Number,
            default: 4
        },
        noBorder: {
            type: Boolean,
            default: false
        },
        noDesc: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        items() {
            return this.limit ? this.features.slice(0, this.limit) : this.features
        }
    },
}
</script>