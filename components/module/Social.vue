<template>
    <div :class="['block block-social', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <ul class="social-link">
                <li v-for="(social, index) in socials" :key="index">
                    <NuxtLink v-if="social.link" :to="social.link" v-html="social.icon">
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialModule',
    props: {
        title: String,
        subTitle: String,
        modClass: String
    },
    computed: {
        socials() {
            return this.$store.state.socials.socials
        }
    }
}
</script>