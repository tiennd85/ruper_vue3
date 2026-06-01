<template>
    <div :class="['block block-post-cats', modClass]">
        <div class="block-widget-wrap">
            <div v-if="title || subTitle" class="block-title">
                <h2>{{ title }}</h2>
                <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
            </div>
            <div class="block-content">
                <div class="post-cats-list">
                    <ul>
                        <li v-for="(item, index) in items" :key="index" :class="item.id == currentCat ? 'current' : ''">
                            <nuxt-link :to="{ path: '/blogs', query: { cat: item.id } }">
                                {{ item.title }} <span class="count">{{ item.count }}</span>
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
    name: 'BlogCatModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String,
        limit: Number
    },
    computed: {
        items() {
            let blogs = this.$store.state.blogs.allItems
            let cats = this.limit ? this.$store.state.blogs.categories.slice(0, this.limit) : this.$store.state.blogs.categories
            if (cats.length) {
                cats.forEach(function (cat) {
                    let catBlogs = blogs.filter(blog => blog.category == cat.id)
                    cat.count = catBlogs.length
                })
            }
            return cats
        },
        currentCat() {
            return this.$route.query.cat ? this.$route.query.cat : 0
        }
    }
}
</script>