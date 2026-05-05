<template>
    <div :class="['block block-post-tags', modClass]">
        <div class="block-widget-wrap">
            <div v-if="title || subTitle" class="block-title">
                <h2>{{ title }}</h2>
                <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
            </div>
            <div class="block-content">
                <div class="post-tags-list">
                    <ul>
                        <li v-for="(tag, index) in tags" :key="index">
                            <nuxt-link :to="{ path: '/blogs', query: { tag: tag.toLowerCase() } }">
                                {{ tag }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogTagModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String
    },
    data() {
        return {
            tag: this.$route.query.tag ? this.$route.query.tag : ''
        }
    },
    computed: {
        tags () {
            let tags = []
            let blogs = this.$store.state.blogs.allItems
            blogs.forEach(function (blog) {
                blog.tags.forEach(function (tag) {
                    if (!tags.includes(tag)) {
                        tags.push(tag)
                    }
                })
            })

            return tags
        }
    }
}
</script>