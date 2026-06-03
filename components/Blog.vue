<template>
    <div v-if="layout == 1" class="post-entry clearfix post-wapper">
        <div class="post-image">
            <NuxtLink v-if="blog.image" :to="'/blog/' + blog.id">
                <img :src="blog.image" :alt="blog.title">
            </NuxtLink>
        </div>
        <div class="post-content">
            <div class="post-categories">
                <NuxtLink :to="{ path: '/blogs', query: { cat: category.id } }">
                    {{ category.title }}
                </NuxtLink>
            </div>
            <h2 class="post-title">
                <NuxtLink :to="'/blog/' + blog.id">
                    {{ blog.title }}
                </NuxtLink>
            </h2>
            <div class="post-meta">
                <span class="post-time">{{ blog.date }}</span>
                <span class="post-comment">
                    {{ blog.comments.length }} Comment<span v-if="blog.comments.length > 1">s</span>
                </span>                             
            </div>
        </div>
    </div>
    <div v-else-if="layout == 2" class="post-entry post-wapper">
        <div class="post-image">
            <NuxtLink v-if="blog.image" :to="'/blog/' + blog.id">
                <img :src="blog.image" :alt="blog.title">
            </NuxtLink>
        </div>
        <div class="post-content">
            <h2 class="post-title">
                <NuxtLink :to="'/blog/' + blog.id">
                    {{ blog.title }}
                </NuxtLink>
            </h2>
            <div class="post-meta">
                <span class="post-categories"><i class="icon_folder-alt"></i> <NuxtLink :to="{ path: '/blogs', query: { cat: category.id } }">{{ category.title }}</NuxtLink></span>
                <span class="post-time"><i class="icon_clock_alt"></i> {{ blog.date }}</span>
                <span class="post-comment">
                    <i class="icon_comment_alt"></i> {{ blog.comments.length }} Comment<span v-if="blog.comments.length > 1">s</span>
                </span>                                                            
            </div>
            <div class="post-excerpt">
                {{ blog.excerpt }}
            </div>
            <div class="post-btn">
                <NuxtLink class="button-outline" :to="'/blog/' + blog.id">
                    Read more
                </NuxtLink>
            </div>
        </div>
    </div>
    <div v-else-if="layout == 3" class="post-grid post">
        <div class="post-inner">
            <div class="post-image">
                <NuxtLink v-if="blog.image" :to="'/blog/' + blog.id" class="post-thumbnail">
                    <img width="720" height="484" :src="blog.image" :alt="blog.title">
                </NuxtLink>
            </div>
            <div class="post-content">
                <div class="post-categories">
                    <NuxtLink :to="{ path: '/blogs', query: { cat: category.id } }">
                        {{ category.title }}
                    </NuxtLink>
                </div>
                <h2 class="post-title">
                    <NuxtLink :to="'/blog/' + blog.id">{{ blog.title }}</NuxtLink>
                </h2>
                <div class="btn-read-more">
                    <NuxtLink class="read-more btn-underline center" :to="'/blog/' + blog.id">Read more</NuxtLink>
                </div>
            </div>
        </div>
    </div>
    <li v-else-if="layout == 4" class="post-item">
        <NuxtLink v-if="blog.image" :to="'/blog/' + blog.id" class="post-image">
            <img :src="blog.image" :alt="blog.title">
        </NuxtLink>
        <div class="post-content">
            <h2 class="post-title">
                <NuxtLink :to="'/blog/' + blog.id">
                    {{ blog.title }}
                </NuxtLink>
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

<script setup lang="ts">
import { computed } from 'vue';
import { useBlogStore } from '~/stores/blog';

const props = defineProps({
    blog: Object,
    layout: { type: Number, default: 1 }
});

const blogStore = useBlogStore();
const category = computed(() => {
    return blogStore.getCategoryById(props.blog.category);
});
</script>