<template>
    <div :class="['block block-video', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <div class="section-row">
                <div class="section-column left">
                    <div class="section-column-wrap">
                        <div class="block-widget-wrap">
                            <div class="block-widget-video">
                                <div class="video-thumb">
                                    <img :width="videos[0].image.width" :height="videos[0].image.height" class="img-responsive" :src="require('@/assets/img/' + videos[0].image.src)" :alt="videos[0].image.alt">
                                </div>
                                <div class="video-wrap">
                                    <div class="video" :data-src="videos[0].video.src" data-toggle="modal" data-target="#video-popup">
                                        <i class="fa fa-play" aria-hidden="true"></i>
                                    </div>
                                    <div class="content-video modal fade" id="video-popup" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <div class="embed-responsive embed-responsive-16by9">
                                                        <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
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
                <div class="section-column right">
                    <div class="section-column-wrap">
                        <div class="block-widget-wrap">
                            <div class="block-widget-video">
                                <div class="video-text">
                                    <h2 v-html="videos[0].title" class="title"></h2>
                                    <div v-html="videos[0].description" class="description"></div>
                                    <NuxtLink v-if="videos[0].button.link" :to="videos[0].button.link" :class="videos[0].button.class">
                                        {{ videos[0].button.text }}
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
    name: 'VideoModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        videos: Array
    }
}
</script>