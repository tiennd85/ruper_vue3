<template>
    <div :class="['block block-post-search', modClass]">
        <div class="block-widget-wrap">
            <div v-if="title || subTitle" class="block-title">
                <h2>{{ title }}</h2>
                <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
            </div>
            <div class="block-content">
                <form class="search-from" @submit.prevent="handleSubmit">
                    <input type="text" v-model="keyword" name="s" class="s" placeholder="Search...">
                    <button class="btn" type="submit">
                        <i class="icon-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogSearchModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String
    },
    data() {
        return {
            keyword: this.$route.query.s ? this.$route.query.s : ''
        }
    },
    methods: {
        handleSubmit(e) {
            this.$router.push('/blogs?s=' + this.keyword);
        }
    }
}
</script>