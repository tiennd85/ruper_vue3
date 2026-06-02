<template>
    <div :class="['block', 'block-banners', { 'slider': slider }, 'layout-' + layout, 'banners-effect', { 'full-height' : fullHeight }, modClass]">
        <div v-if="title || subTitle" :class="['block-title', { 'title-big' : titleBig }]">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div :class="['block-content', { 'full-height' : fullHeight }]">
            <!-- Slider -->
            <div v-if="slider" class="section-column-wrap">
                <div class="block-widget-wrap">
                    <div v-if="banners" class="slick-wrap">
                        <div class="slick-sliders" ref="sliderElement">
                            <div class="item" v-for="(banner, index) in banners" :key="index">
                                <div class="block-widget-banner">
                                    <div class="bg-banner">
                                        <div class="banner-wrapper banners">
                                            <div class="banner-image">
                                                <NuxtLink v-if="banner.link" :to="banner.link">
                                                    <img :width="banner.image.width" :height="banner.image.height" :src="banner.image.src" :alt="banner.image.alt">
                                                </NuxtLink>
                                            </div>
                                            <div class="banner-wrapper-infor">
                                                <div class="info">
                                                    <div class="content">
                                                        <NuxtLink v-if="banner.link" :to="banner.link" class="link-title">
                                                            <h3 v-html="banner.title" class="title-banner"></h3>
                                                        </NuxtLink>
                                                        <div v-html="banner.description" class="banner-image-description"></div>
                                                        <NuxtLink v-if="banner.button.link" :to="banner.button.link" :class="banner.button.class">
                                                            {{ banner.button.text }}
                                                        </NuxtLink>                    
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

            <!-- Layout 1 -->
            <div v-else-if="layout === 1" class="section-row">
                <div class="section-column left sm-m-b">
                    <div class="section-column-wrap">
                        <div class="block-widget-wrap">
                            <div class="block-widget-banner layout-1">
                                <div class="bg-banner">
                                    <div v-if="banners[0]" class="banner-wrapper banners">
                                        <div class="banner-image">
                                            <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                                <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                            </NuxtLink>
                                        </div>
                                        <div class="banner-wrapper-infor">
                                            <div class="info">
                                                <div class="content">
                                                    <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                        {{ banners[0].button.text }}
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-column right">
                    <div class="section-column-wrap">
                        <div class="block-widget-wrap p-0">
                            <div class="block-section m-b-15">
                                <div class="section-container">
                                    <div class="section-row">
                                        <div class="section-column column-50 sm-m-b">
                                            <div class="block-widget-wrap">
                                                <div class="block-widget-banner layout-1">
                                                    <div class="bg-banner">
                                                        <div v-if="banners[1]" class="banner-wrapper banners">
                                                            <div class="banner-image">
                                                                <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                                                    <img :width="banners[1].image.width" :height="banners[1].image.height" :src="banners[1].image.src" :alt="banners[1].image.alt">
                                                                </NuxtLink>
                                                            </div>
                                                            <div class="banner-wrapper-infor">
                                                                <div class="info">
                                                                    <div class="content">
                                                                        <NuxtLink v-if="banners[1].button.link" :to="banners[1].button.link" :class="banners[1].button.class">
                                                                            {{ banners[1].button.text }}
                                                                        </NuxtLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="section-column column-50">
                                            <div class="block-widget-wrap">
                                                <div class="block-widget-banner layout-1">
                                                    <div class="bg-banner">
                                                        <div v-if="banners[2]" class="banner-wrapper banners">
                                                            <div class="banner-image">
                                                                <NuxtLink v-if="banners[2].link" :to="banners[2].link">
                                                                    <img :width="banners[2].image.width" :height="banners[2].image.height" :src="banners[2].image.src" :alt="banners[2].image.alt">
                                                                </NuxtLink>
                                                            </div>
                                                            <div class="banner-wrapper-infor">
                                                                <div class="info">
                                                                    <div class="content">
                                                                        <NuxtLink v-if="banners[2].button.link" :to="banners[2].button.link" :class="banners[2].button.class">
                                                                            {{ banners[2].button.text }}
                                                                        </NuxtLink>
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
                            <div class="block-section">
                                <div class="section-container">
                                    <div class="section-row">
                                        <div class="section-column">
                                            <div class="block-widget-wrap">
                                                <div class="block-widget-banner layout-1">
                                                    <div class="bg-banner">
                                                        <div v-if="banners[3]" class="banner-wrapper banners">
                                                            <div class="banner-image">
                                                                <NuxtLink v-if="banners[3].link" :to="banners[3].link">
                                                                    <img :width="banners[3].image.width" :height="banners[3].image.height" :src="banners[3].image.src" :alt="banners[3].image.alt">
                                                                </NuxtLink>
                                                            </div>
                                                            <div class="banner-wrapper-infor">
                                                                <div class="info">
                                                                    <div class="content">
                                                                        <NuxtLink v-if="banners[3].button.link" :to="banners[3].button.link" :class="banners[3].button.class">
                                                                            {{ banners[3].button.text }}
                                                                        </NuxtLink>
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
                </div>
            </div>

            <!-- Layout 2 -->
            <div v-else-if="layout === 2" class="section-row">
                <div class="section-column left sm-m-b">
                    <div class="section-column-wrap">
                        <div class="block-widget-wrap">
                            <div class="block-widget-banner layout-2">
                                <div class="bg-banner">
                                    <div class="banner-wrapper banners">
                                        <div class="banner-image">
                                            <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                                <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                            </NuxtLink>
                                        </div>
                                        <div class="banner-wrapper-infor">
                                            <div class="info">
                                                <div class="content">
                                                    <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                                        <h3 v-html="banners[0].title" class="title-banner"></h3>
                                                    </NuxtLink>
                                                    <div v-html="banners[0].description" class="banner-image-description"></div>
                                                    <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                        {{ banners[0].button.text }}
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section-column right">
                    <div class="section-column-wrap">
                        <div class="block-widget-wrap">
                            <div class="block-widget-banner layout-3">
                                <div class="bg-banner">
                                    <div class="banner-wrapper banners">
                                        <div class="banner-image">
                                            <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                                <img :width="banners[1].image.width" :height="banners[1].image.height" :src="banners[1].image.src" :alt="banners[1].image.alt">
                                            </NuxtLink>
                                        </div>
                                        <div class="banner-wrapper-infor">
                                            <div class="info">
                                                <div class="content">
                                                    <NuxtLink v-if="banners[1].link" :to="banners[1].link" class="link-title">
                                                        <h3 v-html="banners[1].title" class="title-banner"></h3>
                                                    </NuxtLink>
                                                    <div v-html="banners[1].description" class="banner-image-description"></div>
                                                    <NuxtLink v-if="banners[1].button.link" :to="banners[1].button.link" :class="banners[1].button.class">
                                                        {{ banners[1].button.text }}
                                                    </NuxtLink>
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

            <!-- Layout 3 -->
            <div v-else-if="layout === 3" class="block-widget-wrap small-space">
                <div class="row">
                    <div class="col-md-4 sm-m-b" v-for="(banner, index) in banners" :key="index">
                        <div class="block-widget-banner layout-4">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banner.link" :to="banner.link">
                                            <img :width="banner.image.width" :height="banner.image.height" :src="banner.image.src" :alt="banner.image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div :class="['banner-wrapper-infor', { 'text-center' : index % 2 == 1 }]">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banner.link" :to="banner.link" class="link-title">
                                                    <h3 v-html="banner.title" class="title-banner"></h3>
                                                </NuxtLink>
                                                <NuxtLink v-if="banner.button.link" :to="banner.button.link" :class="banner.button.class">
                                                    {{ banner.button.text }}
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 4 -->
            <div v-else-if="layout === 4" class="block-widget-wrap">
                <div class="row">
                    <div class="col-md-4 sm-m-b-50">
                        <div class="block-widget-banner layout-5">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                            <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                                    <h3 v-html="banners[0].title" class="title-banner"></h3>
                                                </NuxtLink>
                                                <div v-html="banners[0].description" class="banner-image-description"></div>
                                                <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                    {{ banners[0].button.text }}
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 sm-m-b-50">
                        <div class="block-widget-banner layout-5">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                            <img :width="banners[1].image.width" :height="banners[1].image.height" :src="banners[1].image.src" :alt="banners[1].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor text-center">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[1].link" :to="banners[1].link" class="link-title">
                                                    <h3 v-html="banners[1].title" class="title-banner"></h3>
                                                </NuxtLink>
                                                <div v-html="banners[1].description" class="banner-image-description"></div>
                                                <NuxtLink v-if="banners[1].button.link" :to="banners[1].button.link" :class="banners[1].button.class">
                                                    {{ banners[1].button.text }}
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="block-widget-banner layout-5">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[2].link" :to="banners[2].link">
                                            <img :width="banners[2].image.width" :height="banners[2].image.height" :src="banners[2].image.src" :alt="banners[2].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[2].link" :to="banners[2].link" class="link-title">
                                                    <h3 v-html="banners[2].title" class="title-banner"></h3>
                                                </NuxtLink>
                                                <div v-html="banners[2].description" class="banner-image-description"></div>
                                                <NuxtLink v-if="banners[2].button.link" :to="banners[2].button.link" :class="banners[2].button.class">
                                                    {{ banners[2].button.text }}
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 5 -->
            <div v-else-if="layout === 5">
                <div class="block-widget-banner layout-6 m-b-15">
                    <div class="bg-banner">
                        <div class="banner-wrapper banners">
                            <div class="banner-image">
                                <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                    <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                </NuxtLink>
                            </div>
                            <div class="banner-wrapper-infor">
                                <div class="info">
                                    <div class="content">
                                        <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                            <h3 v-html="banners[0].title" class="title-banner"></h3>
                                        </NuxtLink>
                                        <div v-html="banners[0].description" class="banner-image-description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block-widget-banner layout-6">
                    <div class="bg-banner">
                        <div class="banner-wrapper banners">
                            <div class="banner-image">
                                <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                    <img :width="banners[1].image.width" :height="banners[1].image.height" :src="banners[1].image.src" :alt="banners[1].image.alt">
                                </NuxtLink>
                            </div>
                            <div class="banner-wrapper-infor right">
                                <div class="info">
                                    <div class="content">
                                        <NuxtLink v-if="banners[1].link" :to="banners[1].link" class="link-title">
                                            <h3 v-html="banners[1].title" class="title-banner"></h3>
                                        </NuxtLink>
                                        <div v-html="banners[1].description" class="banner-image-description"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 6 -->
            <div v-else-if="layout === 6">
                <div class="block-widget-wrap">
                    <div class="row">
                        <div class="col-md-6 sm-m-b-50">
                            <div class="block-widget-banner layout-7">
                                <div class="bg-banner">
                                    <div class="banner-wrapper banners">
                                        <div class="banner-image">
                                            <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                                <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                            </NuxtLink>
                                        </div>
                                        <div class="banner-wrapper-infor">
                                            <div class="info">
                                                <div class="content">
                                                    <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                                        <h3 v-html="banners[0].title" class="title-banner"></h3>
                                                    </NuxtLink>
                                                    <div v-html="banners[0].description" class="banner-image-description"></div>
                                                    <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                        {{ banners[0].button.text }}
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="block-widget-banner layout-7">
                                <div class="bg-banner">
                                    <div class="banner-wrapper banners">
                                        <div class="banner-image">
                                            <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                                <img :width="banners[1].image.width" :height="banners[1].image.height" :src="banners[1].image.src" :alt="banners[1].image.alt">
                                            </NuxtLink>
                                        </div>
                                        <div class="banner-wrapper-infor">
                                            <div class="info">
                                                <div class="content">
                                                    <NuxtLink v-if="banners[1].link" :to="banners[1].link" class="link-title">
                                                        <h3 v-html="banners[1].title" class="title-banner"></h3>
                                                    </NuxtLink>
                                                    <div v-html="banners[1].description" class="banner-image-description"></div>
                                                    <NuxtLink v-if="banners[1].button.link" :to="banners[1].button.link" :class="banners[1].button.class">
                                                        {{ banners[1].button.text }}
                                                    </NuxtLink>
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

            <!-- Layout 7 -->
            <div v-else-if="layout === 7" class="no-space">
                <div class="row">
                    <div class="col-md-6 left">
                        <div class="block-widget-banner layout-8">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                            <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <div class="banner-image-subtitle" v-html="banners[0].description">
                                                </div>
                                                <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                                    <h3 class="title-banner" v-html="banners[0].title"></h3>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 right">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="block-widget-banner layout-8">
                                    <div class="bg-banner">
                                        <div class="banner-wrapper banners">
                                            <div class="banner-image">
                                                <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                                    <img :width="banners[1].image.width" :height="banners[1].image.height" :src="banners[1].image.src" :alt="banners[1].image.alt">
                                                </NuxtLink>
                                            </div>
                                            <div class="banner-wrapper-infor">
                                                <div class="info">
                                                    <div class="content">
                                                        <div class="banner-image-subtitle" v-html="banners[1].description">
                                                        </div>
                                                        <NuxtLink v-if="banners[1].link" :to="banners[1].link" class="link-title">
                                                            <h3 class="title-banner" v-html="banners[1].title"></h3>
                                                        </NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="block-widget-banner layout-8">
                                    <div class="bg-banner">
                                        <div class="banner-wrapper banners">
                                            <div class="banner-image">
                                                <NuxtLink v-if="banners[2].link" :to="banners[2].link">
                                                    <img :width="banners[2].image.width" :height="banners[2].image.height" :src="banners[2].image.src" :alt="banners[2].image.alt">
                                                </NuxtLink>
                                            </div>
                                            <div class="banner-wrapper-infor">
                                                <div class="info">
                                                    <div class="content">
                                                        <div class="banner-image-subtitle" v-html="banners[2].description">
                                                        </div>
                                                        <NuxtLink v-if="banners[2].link" :to="banners[2].link" class="link-title">
                                                            <h3 class="title-banner" v-html="banners[2].title"></h3>
                                                        </NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="block-widget-banner layout-8">
                                    <div class="bg-banner">
                                        <div class="banner-wrapper banners">
                                            <div class="banner-image">
                                                <NuxtLink v-if="banners[3].link" :to="banners[3].link">
                                                    <img :width="banners[3].image.width" :height="banners[3].image.height" :src="banners[3].image.src" :alt="banners[3].image.alt">
                                                </NuxtLink>
                                            </div>
                                            <div class="banner-wrapper-infor">
                                                <div class="info">
                                                    <div class="content">
                                                        <div class="banner-image-subtitle" v-html="banners[3].description">
                                                        </div>
                                                        <NuxtLink v-if="banners[3].link" :to="banners[3].link" class="link-title">
                                                            <h3 class="title-banner" v-html="banners[3].title"></h3>
                                                        </NuxtLink>
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

            <!-- Layout 8 -->
            <div v-else-if="layout === 8" class="block-widget-wrap">
                <div class="row">
                    <div class="col-md-4 sm-m-b-50">
                        <div class="block-widget-banner layout-9">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                            <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                                    <h3 class="title-banner" v-html="banners[0].title"></h3>
                                                </NuxtLink>
                                                <div class="banner-image-description" v-html="banners[0].description"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 sm-m-b-50">
                        <div class="block-widget-banner layout-9">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                            <img :width="banners[1].image.width" :height="banners[1].image.height" :src="banners[1].image.src" :alt="banners[1].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[1].link" :to="banners[1].link" class="link-title">
                                                    <h3 class="title-banner" v-html="banners[1].title"></h3>
                                                </NuxtLink>
                                                <div class="banner-image-description" v-html="banners[1].description"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="block-widget-banner layout-9">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[2].link" :to="banners[2].link">
                                            <img :width="banners[2].image.width" :height="banners[2].image.height" :src="banners[2].image.src" :alt="banners[2].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[2].link" :to="banners[2].link" class="link-title">
                                                    <h3 class="title-banner" v-html="banners[2].title"></h3>
                                                </NuxtLink>
                                                <div class="banner-image-description" v-html="banners[2].description"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 9 -->
            <div v-else-if="layout === 9" class="block-widget-banner layout-10">
                <div class="bg-banner">
                    <div class="banner-wrapper banners">
                        <div class="banner-image">
                            <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                <img :src="banners[0].image.src" :alt="banners[0].image.alt">
                            </NuxtLink>
                        </div>
                        <div class="banner-wrapper-infor">
                            <div class="info">
                                <div class="content">
                                    <h5 class="subtitle-banner" v-html="banners[0].description"></h5>
                                    <h3 class="title-banner" v-html="banners[0].title"></h3>
                                    <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                        {{ banners[0].button.text }}
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 10 -->
            <div v-else-if="layout === 10" class="block-widget-banner layout-11 full-height" :style="'background-image: url(' + require('@/assets/img/' + banners[0].image.src) + ');' + 'background-position: center left; background-repeat: no-repeat; background-size: cover'">
                <div class="bg-banner">
                    <div class="banner-wrapper banners">
                        <div class="banner-wrapper-infor">
                            <div class="info">
                                <div class="content">
                                    <h3 class="title-banner" v-html="banners[0].title"></h3>             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 11 -->
            <div v-else-if="layout === 11" class="block-widget-wrap">
                <div class="row">
                    <div class="col-md-4 sm-m-b">
                        <div class="block-widget-banner layout-12">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                            <img :src="banners[0].image.src" :alt="banners[0].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                                    <h3 class="title-banner" v-html="banners[0].title"></h3>  
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 sm-m-b">
                        <div class="block-widget-banner layout-12">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                            <img :src="banners[1].image.src" :alt="banners[1].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor text-center">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                                    <h3 class="title-banner" v-html="banners[1].title"></h3>  
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 sm-m-b">
                        <div class="block-widget-banner layout-12">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[2].link" :to="banners[2].link">
                                            <img :src="banners[2].image.src" :alt="banners[2].image.alt">
                                        </NuxtLink> 
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[2].link" :to="banners[2].link">
                                                    <h3 class="title-banner" v-html="banners[2].title"></h3>  
                                                </NuxtLink>      
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 12 -->
            <div v-else-if="layout === 12" class="block-widget-wrap">
                <div class="row">
                    <div class="col-md-6">
                        <div class="block-widget-banner layout-13 m-b-15">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                            <img :src="banners[0].image.src" :alt="banners[0].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[0].link" class="link-title" :to="banners[0].link">
                                                    <h3 class="title-banner" v-html="banners[0].title"></h3>  
                                                </NuxtLink>
                                                <div v-html="banners[0].description" class="banner-image-description"></div>
                                                <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                    {{ banners[0].button.text }}
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="block-widget-banner layout-13">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                            <img :src="banners[1].image.src" :alt="banners[1].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[1].link" class="link-title" :to="banners[1].link">
                                                    <h3 class="title-banner" v-html="banners[1].title"></h3>  
                                                </NuxtLink>
                                                <div v-html="banners[1].description" class="banner-image-description"></div>
                                                <NuxtLink v-if="banners[1].button.link" :to="banners[1].button.link" :class="banners[1].button.class">
                                                    {{ banners[1].button.text }}
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 13 -->
            <div v-else-if="layout === 13" class="block-widget-banner layout-14 no-space">
                <div class="banners">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="banner-image">
                                <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                    <img :src="banners[0].image.src" :alt="banners[0].image.alt">
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-md-6 banner-infor">
                            <div class="banner-wrapper-infor">
                                <div class="info">
                                    <div class="content">
                                        <NuxtLink v-if="banners[0].link" class="link-title" :to="banners[0].link">
                                            <h3 class="title-banner" v-html="banners[0].title"></h3>  
                                        </NuxtLink>
                                        <div v-html="banners[0].description" class="banner-image-description"></div>
                                        <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                            {{ banners[0].button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 banner-infor">
                            <div class="banner-wrapper-infor">
                                <div class="info">
                                    <div class="content">
                                        <NuxtLink v-if="banners[1].link" class="link-title" :to="banners[1].link">
                                            <h3 class="title-banner" v-html="banners[1].title"></h3>  
                                        </NuxtLink>
                                        <div v-html="banners[1].description" class="banner-image-description"></div>
                                        <NuxtLink v-if="banners[1].button.link" :to="banners[1].button.link" :class="banners[1].button.class">
                                            {{ banners[1].button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="banner-image">
                                <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                    <img :src="banners[1].image.src" :alt="banners[1].image.alt">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="banner-image">
                                <NuxtLink v-if="banners[2].link" :to="banners[2].link">
                                    <img :src="banners[2].image.src" :alt="banners[2].image.alt">
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-md-6 banner-infor">
                            <div class="banner-wrapper-infor">
                                <div class="info">
                                    <div class="content">
                                        <NuxtLink v-if="banners[2].link" class="link-title" :to="banners[2].link">
                                            <h3 class="title-banner" v-html="banners[2].title"></h3>  
                                        </NuxtLink>
                                        <div v-html="banners[2].description" class="banner-image-description"></div>
                                        <NuxtLink v-if="banners[2].button.link" :to="banners[2].button.link" :class="banners[2].button.class">
                                            {{ banners[2].button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 banner-infor">
                            <div class="banner-wrapper-infor">
                                <div class="info">
                                    <div class="content">
                                        <NuxtLink v-if="banners[3].link" class="link-title" :to="banners[3].link">
                                            <h3 class="title-banner" v-html="banners[3].title"></h3>  
                                        </NuxtLink>
                                        <div v-html="banners[3].description" class="banner-image-description"></div>
                                        <NuxtLink v-if="banners[3].button.link" :to="banners[3].button.link" :class="banners[3].button.class">
                                            {{ banners[3].button.text }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="banner-image">
                                <NuxtLink v-if="banners[3].link" :to="banners[3].link">
                                    <img :src="banners[3].image.src" :alt="banners[3].image.alt">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 14 -->
            <div v-else-if="layout === 14" class="no-space">
                <div class="row">
                    <div class="col-md-6">
                        <div class="block-widget-banner layout-15">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                            <img :src="banners[0].image.src" :alt="banners[0].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[0].link" class="link-title" :to="banners[0].link">
                                                    <h3 class="title-banner" v-html="banners[0].title"></h3>  
                                                </NuxtLink>
                                                <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                    {{ banners[0].button.text }}
                                                </NuxtLink>                      
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="block-widget-banner layout-15">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div class="banner-image">
                                        <NuxtLink v-if="banners[1].link" :to="banners[1].link">
                                            <img :src="banners[1].image.src" :alt="banners[1].image.alt">
                                        </NuxtLink>
                                    </div>
                                    <div class="banner-wrapper-infor">
                                        <div class="info">
                                            <div class="content">
                                                <NuxtLink v-if="banners[1].link" class="link-title" :to="banners[1].link">
                                                    <h3 class="title-banner" v-html="banners[1].title"></h3>  
                                                </NuxtLink>
                                                <NuxtLink v-if="banners[1].button.link" :to="banners[1].button.link" :class="banners[1].button.class">
                                                    {{ banners[1].button.text }}
                                                </NuxtLink>      
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 15 -->
            <div v-else-if="layout === 15" class="block-widget-wrap">
                <div class="block-widget-banner">
                    <div class="bg-banner">
                        <div class="banner-wrapper banners">
                            <div class="banner-image">
                                <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                    <img :src="banners[0].image.src" :alt="banners[0].image.alt">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Layout 16 -->
            <div v-else-if="layout === 16" class="block-widget-wrap">
                <div class="block-widget-banner layout-16 no-space">
                    <div class="banners">
                        <div v-if="position == 'left'" class="row">
                            <div class="col-md-6">
                                <div class="banner-image">
                                    <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                        <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
                                    </NuxtLink>
                                </div>
                            </div>
                            <div :class="'col-md-6 banner-infor background-' + background">
                                <div class="banner-wrapper-infor">
                                    <div class="info">
                                        <div class="content">
                                            <div class="banner-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path xmlns="http://www.w3.org/2000/svg" d="m125.533 372.73a6 6 0 1 0 -8.484 8.486l14.821 14.821a6 6 0 1 0 8.484-8.486z" fill="" data-original="" style=""></path><path xmlns="http://www.w3.org/2000/svg" d="m128.675 241.7a6 6 0 0 0 8.484-8.485l-63.036-63.036 20.662-20.433 17.063 17.063 77.822 77.822-123.2 123.2a16 16 0 0 0 0 22.628l56.15 56.15a16.02 16.02 0 0 0 22.627 0l123.2-123.2 88.818 88.818a5.933 5.933 0 0 0 .83.678c.081.057.163.11.247.162a5.957 5.957 0 0 0 .806.425c.043.018.084.043.128.061a6.09 6.09 0 0 0 .8.257l64.1 15.793a6 6 0 0 0 7.261-7.261l-15.794-64.1a6.042 6.042 0 0 0 -.257-.8c-.018-.044-.043-.085-.062-.129a6 6 0 0 0 -.424-.805c-.052-.084-.106-.166-.163-.248a5.965 5.965 0 0 0 -.678-.83l-88.817-88.817 122.458-122.449a16 16 0 0 0 0-22.628l-56.15-56.151a16.019 16.019 0 0 0 -22.627 0l-32.188 32.187-90.267 90.268-99.037-99.04a6 6 0 0 0 -8.485 0l-2.936 2.936-8.126-8.262a29.823 29.823 0 0 0 -21.4-8.976h-.022a30.042 30.042 0 0 0 -21.241 51.285l8.319 8.317-32.14 31.789a6 6 0 0 0 -.024 8.509zm272.66 117.978-39.824 39.822-236.934-236.932 39.823-39.824zm-264.57 78.451a4.008 4.008 0 0 1 -5.659 0l-56.15-56.15a4 4 0 0 1 0-5.657l83.967-83.967 26.8 26.8a6 6 0 1 0 8.484-8.486l-26.8-26.8 30.751-30.75 61.808 61.807zm236.511-33.423 33.264-33.263 10.875 44.138zm-92.984-233.72 26.8 26.8a6 6 0 1 0 8.484-8.486l-26.8-26.8 52.2-52.2 15.861 15.861a6 6 0 1 0 8.484-8.485l-15.861-15.859 27.946-27.946a4.007 4.007 0 0 1 5.658 0l56.151 56.15a4.006 4.006 0 0 1 0 5.657l-122.454 122.455-61.808-61.808zm-124.376-56.727-39.824 39.824-12.728-12.728 39.824-39.824zm-62.207 3.041a18.042 18.042 0 0 1 12.757-30.8h.013a17.911 17.911 0 0 1 12.85 5.391l8.2 8.332-24.329 24.324-1.13 1.117z" fill="" data-original="" style=""></path></g></svg>
                                            </div>
                                            <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                                <h3 v-html="banners[0].title" class="title-banner"></h3>
                                            </NuxtLink>
                                            <div v-html="banners[0].description" class="banner-image-description"></div>
                                            <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                {{ banners[0].button.text }}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="row">
                            <div :class="'col-md-6 banner-infor background-' + background">
                                <div class="banner-wrapper-infor">
                                    <div class="info">
                                        <div class="content">
                                            <div class="banner-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 256 256" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="m128 149.2c-4.2 0-8.3-.6-12.3-1.9-5.2-1.7-9.9-4.3-14-7.8-3.9-3.4-7.1-7.5-9.6-12.1-2.4-4.7-3.8-9.6-4.3-14.8-.5-5.4.1-10.7 1.8-15.9s4.3-9.9 7.8-14c3.4-3.9 7.5-7.1 12.1-9.6 4.7-2.4 9.6-3.8 14.8-4.3 5.4-.5 10.7.1 15.9 1.8 1.8.6 2.9 2.6 2.3 4.4s-2.6 2.9-4.4 2.3c-4.3-1.4-8.7-1.9-13.1-1.5-4.3.4-8.4 1.6-12.3 3.6s-7.2 4.7-10 7.9c-2.9 3.4-5.1 7.3-6.4 11.5-1.4 4.3-1.9 8.7-1.5 13.1.4 4.3 1.6 8.4 3.6 12.3s4.6 7.2 7.9 10c3.4 2.9 7.3 5.1 11.5 6.4 4.3 1.4 8.7 1.9 13.1 1.5 4.3-.4 8.4-1.6 12.3-3.6s7.2-4.7 10-7.9c2.9-3.4 5.1-7.3 6.4-11.5 1.4-4.3 1.9-8.7 1.5-13.1-.2-1.9 1.2-3.6 3.2-3.8 1.9-.2 3.6 1.2 3.8 3.2.5 5.4-.1 10.7-1.8 15.9s-4.3 9.9-7.8 14c-3.4 3.9-7.5 7.2-12.1 9.6-4.7 2.4-9.7 3.8-14.8 4.3-1.2-.1-2.4 0-3.6 0z" fill="" data-original="" style=""></path></g><g><path d="m128 193.4c-7.3 0-13-5.8-17.9-10.9-3.2-3.3-6.3-6.5-9.3-7.7-3.2-1.3-8-1.3-12.6-1.3-7.3.1-14.9.1-19.9-4.8-5-5-4.9-12.5-4.8-19.9 0-4.6.1-9.4-1.3-12.6-1.2-3-4.4-6.1-7.7-9.3-5.1-5-10.9-10.6-10.9-18 0-7.3 5.8-13 10.9-17.9 3.3-3.2 6.5-6.3 7.7-9.3 1.3-3.2 1.3-8 1.3-12.6-.1-7.3-.1-14.9 4.8-19.9 5-5 12.5-4.9 19.9-4.8 4.6 0 9.4.1 12.6-1.3 3-1.2 6.1-4.4 9.3-7.7 5-5.1 10.6-10.9 18-10.9 7.3 0 13 5.8 17.9 10.9 3.2 3.3 6.3 6.5 9.3 7.7 3.2 1.3 8 1.3 12.6 1.3 7.3-.1 14.9-.1 19.9 4.8 5 5 4.9 12.5 4.8 19.9 0 4.6-.1 9.4 1.3 12.6 1.2 3 4.4 6.1 7.7 9.3 5.1 5 10.9 10.6 10.9 18 0 7.3-5.8 13-10.9 17.9-3.3 3.2-6.5 6.3-7.7 9.3-1.3 3.2-1.3 8-1.3 12.6.1 7.3.1 14.9-4.8 19.9-5 5-12.5 4.9-19.9 4.8-4.6 0-9.4-.1-12.6 1.3-3 1.2-6.1 4.4-9.3 7.7-5 5-10.7 10.9-18 10.9zm-37.4-27c4.5 0 9 .2 12.8 1.8 4.3 1.8 8.1 5.6 11.6 9.3 4.2 4.3 8.6 8.8 12.9 8.8 4.4 0 8.7-4.5 12.9-8.8 3.6-3.7 7.3-7.5 11.6-9.3 4.5-1.9 10-1.8 15.3-1.8 6.2.1 12 .1 14.9-2.8s2.8-8.7 2.8-14.9c0-5.3-.1-10.8 1.8-15.3 1.8-4.3 5.6-8.1 9.3-11.6 4.3-4.2 8.8-8.6 8.8-12.9 0-4.4-4.5-8.7-8.8-12.9-3.7-3.6-7.5-7.3-9.3-11.6-1.9-4.5-1.8-10-1.8-15.3.1-6.2.1-12-2.8-14.9s-8.7-2.8-14.9-2.8c-5.3 0-10.8.1-15.3-1.8-4.3-1.8-8.1-5.6-11.6-9.3-4.2-4.3-8.5-8.8-12.9-8.8s-8.7 4.5-12.9 8.8c-3.6 3.7-7.3 7.5-11.6 9.3-4.5 1.9-10 1.8-15.3 1.8-6.2-.1-12-.1-14.9 2.8s-2.8 8.7-2.8 14.9c0 5.3.1 10.8-1.8 15.3-1.8 4.3-5.6 8.1-9.3 11.6-4.3 4.2-8.8 8.5-8.8 12.9s4.5 8.7 8.8 12.9c3.7 3.6 7.5 7.3 9.3 11.6 1.9 4.5 1.8 10 1.8 15.3-.1 6.2-.1 12 2.8 14.9s8.7 2.8 14.9 2.8z" fill="" data-original="" style=""></path></g><g><path d="m165 231.5c-.7 0-1.5-.2-2.1-.5l-34.4-18.2-34.4 18.2c-1.4.7-3.1.7-4.4-.1-1.4-.8-2.2-2.3-2.2-3.9v-38.8c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v34.6l34-18 34 18v-34.6c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5v38.8c0 1.6-.8 3-2.2 3.9-.7.4-1.5.6-2.3.6z" fill="" data-original="" style=""></path></g><g><path d="m127.3 122.8-21-21c-1.4-1.4-1.4-3.6 0-4.9 1.4-1.4 3.6-1.4 4.9 0l16 16 38-37.9c1.4-1.4 3.6-1.4 5 0s1.4 3.6 0 4.9z" fill="" data-original="" style=""></path></g></g></g></svg>
                                            </div>
                                            <NuxtLink v-if="banners[0].link" :to="banners[0].link" class="link-title">
                                                <h3 v-html="banners[0].title" class="title-banner"></h3>
                                            </NuxtLink>
                                            <div v-html="banners[0].description" class="banner-image-description"></div>
                                            <NuxtLink v-if="banners[0].button.link" :to="banners[0].button.link" :class="banners[0].button.class">
                                                {{ banners[0].button.text }}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="banner-image">
                                    <NuxtLink v-if="banners[0].link" :to="banners[0].link">
                                        <img :width="banners[0].image.width" :height="banners[0].image.height" :src="banners[0].image.src" :alt="banners[0].image.alt">
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

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const sliderElement = ref(null)

const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    banners: Array,
    titleBig: { type: Boolean, default: false },
    layout: { type: Number, default: 1 },
    position: { type: String, default: 'left' },
    background: { type: Number, default: 1 },
    slider: { type: Boolean, default: false },
    fullHeight: { type: Boolean, default: false }
})

onMounted(async() => {
    await nextTick()

    if (process.client && sliderElement.value) {
        const $ = window.$ || (await import('jquery')).default;
        await import('slick-carousel')
        
        $(sliderElement.value).slick({
            slidesToShow: 1,
            autoplay: false,
            infinite: true,
            arrows: true,
            dots: false,
            center: true,
            draggable: true,
            pauseOnHover: false,
            pauseOnFocus: false,
            prevArrow: '<i class="slick-arrow fa fa-angle-left"></i>',
            nextArrow: '<i class="slick-arrow fa fa-angle-right"></i>'
        })
    }
})

onBeforeUnmount(() => {
    if (process.client && sliderElement.value) {
        const $slider = $(sliderElement.value);
    
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
    }
})
</script>