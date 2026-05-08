<template>
    <div v-if="layout == '1'" class="post-entry clearfix post-wapper">
        <div class="post-image">
            <nuxt-link v-if="blog.image" :to="'/blog/' + blog.id">
                <img :src="require('@/assets/img/' + blog.image)" :alt="blog.title">
            </nuxt-link>
        </div>
        <div class="post-content">
            <div class="post-categories">
                <nuxt-link :to="{ path: '/blogs', query: { cat: category.id } }">
                    {{ category.title }}
                </nuxt-link>
            </div>
            <h2 class="post-title">
                <nuxt-link :to="'/blog/' + blog.id">
                    {{ blog.title }}
                </nuxt-link>
            </h2>
            <div class="post-meta">
                <span class="post-time">{{ blog.date }}</span>
                <span class="post-comment">
                    {{ blog.comments.length }} Comment<span v-if="blog.comments.length > 1">s</span>
                </span>                             
            </div>
        </div>
    </div>
    <div v-else-if="layout == '2'" class="post-entry post-wapper">
        <div class="post-image">
            <nuxt-link v-if="blog.image" :to="'/blog/' + blog.id">
                <img :src="require('@/assets/img/' + blog.image)" :alt="blog.title">
            </nuxt-link>
        </div>
        <div class="post-content">
            <h2 class="post-title">
                <nuxt-link :to="'/blog/' + blog.id">
                    {{ blog.title }}
                </nuxt-link>
            </h2>
            <div class="post-meta">
                <span class="post-categories"><i class="icon_folder-alt"></i> <nuxt-link :to="{ path: '/blogs', query: { cat: category.id } }">{{ category.title }}</nuxt-link></span>
                <span class="post-time"><i class="icon_clock_alt"></i> {{ blog.date }}</span>
                <span class="post-comment">
                    <i class="icon_comment_alt"></i> {{ blog.comments.length }} Comment<span v-if="blog.comments.length > 1">s</span>
                </span>                                                            
            </div>
            <div class="post-excerpt">
                {{ blog.excerpt }}
            </div>
            <div class="post-btn">
                <nuxt-link class="button-outline" :to="'/blog/' + blog.id">
                    Read more
                </nuxt-link>
            </div>
        </div>
    </div>
    <div v-else-if="layout == '3'" class="post-grid post">
        <div class="post-inner">
            <div class="post-image">
                <nuxt-link v-if="blog.image" :to="'/blog/' + blog.id" class="post-thumbnail">
                    <img width="720" height="484" :src="require('@/assets/img/' + blog.image)" :alt="blog.title">
                </nuxt-link>
            </div>
            <div class="post-content">
                <div class="post-categories">
                    <nuxt-link :to="{ path: '/blogs', query: { cat: category.id } }">
                        {{ category.title }}
                    </nuxt-link>
                </div>
                <h2 class="post-title">
                    <nuxt-link :to="'/blog/' + blog.id">{{ blog.title }}</nuxt-link>
                </h2>
                <div class="btn-read-more">
                    <nuxt-link class="read-more btn-underline center" :to="'/blog/' + blog.id">Read more</nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <li v-else-if="layout == '4'" class="post-item">
        <nuxt-link v-if="blog.image" :to="'/blog/' + blog.id" class="post-image">
            <img :src="require('@/assets/img/' + blog.image)" :alt="blog.title">
        </nuxt-link>
        <div class="post-content">
            <h2 class="post-title">
                <nuxt-link :to="'/blog/' + blog.id">
                    {{ blog.title }}
                </nuxt-link>
            </h2>
            <div class="post-time">
                <span class="post-date">{{ blog.date }}</span>
                <span class="post-comment">
                    {{ blog.comments.length }} Comment<span v-if="blog.comments.length > 1">s</span>
                </span>
            </div>
        </div>
    </li>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'Blog',
    props: {
        blog: Object,
        layout: {
            type: Number,
            default: 1
        }
    },
    computed: { 
        category: function () {
            return this.$store.getters['blogs/getCategoryById'](
                this.blog.category
            );
        }
    }
}
</script>