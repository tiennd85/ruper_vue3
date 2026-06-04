<template>
    <div :class="['block block-map', modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div class="block-content">
            <iframe v-if="address" :src="'https://maps.google.com/maps?q=' + address + '&t=m&z=10&output=embed&iwloc=near'" :aria-label="address"></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    address: String
})
</script>