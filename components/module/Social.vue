<template>
    <div :class="['block block-social', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <ul class="social-link">
                <li v-for="(social, index) in socials" :key="index">
                    <NuxtLink v-if="social.link" :to="social.link">
                        <span v-html="social.icon"></span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String
})

const { data: socialsData } = await useAsyncData('socials', () => 
  queryContent('socials', 'socials').findOne()
)
const socials = computed(() => socialsData.value?.body || [])
</script>