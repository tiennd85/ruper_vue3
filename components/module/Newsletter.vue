<template>
    <div :class="['block block-newsletter', 'layout-' + layout, { 'one-col' : oneCol }, { 'align-left' : alignLeft }, { 'position-center' : positionCenter }, modClass]">
        <div v-if="title || subTitle" class="block-title">
            <h2>{{ title }}</h2>
            <div v-if="subTitle" class="sub-title">{{ subTitle }}</div>
        </div>
        <div v-if="layout == '1'" class="block-content">
            <div v-if="description" class="newsletter-text">{{ description }}</div>
            <form class="newsletter-form" @submit.prevent="handleSubmit" novalidate="true" :class="{ 'is-invalid': checkForm && $v.form.nEmail.$error }">
                <input type="email" v-model="form.nEmail" :class="[{ 'bg-white' : bgWhite }]" name="your-email" size="40" :placeholder="placeholder" />
                <span class="btn-submit">
                    <input type="submit" value="Subscribe">
                </span>
            </form>
            <div v-if="checkForm && $v.form.nEmail.$error" class="invalid-feedback">
                <span v-if="$v.form.nEmail.required.$invalid">Email is required</span>
                <span v-if="$v.form.nEmail.email.$invalid">Email is invalid</span>
            </div>
        </div>
        <div v-else-if="layout == '2'" class="block-content">
            <div class="row">
                <div class="col-lg-6">
                    <div class="banners-effect">
                        <div class="block-widget-banner">
                            <div class="bg-banner">
                                <div class="banner-wrapper banners">
                                    <div v-if="image" class="banner-image">
                                        <a href="#">
                                            <img width="961" height="452" :src="image" alt="Banner Image">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="block block-newsletter position-center">
                        <div class="newsletter-wrap">
                            <div v-if="nSubTitle" class="sub-title">{{ nSubTitle }}</div>
                            <div v-if="nTitle" class="title">{{ nTitle }}</div>
                            <div class="newsletter-content">
                                <form class="newsletter-form" @submit.prevent="handleSubmit" novalidate="true" :class="{ 'is-invalid': checkForm && $v.form.nEmail.$error }">
                                    <span class="your-email">
                                        <input type="email" v-model="form.nEmail" name="your-email" size="40" :placeholder="placeholder" />
                                    </span>
                                    <span class="clearfix">
                                        <input type="submit" value="Subscribe">
                                    </span>
                                </form>
                                <div v-if="checkForm && $v.form.nEmail.$error" class="invalid-feedback">
                                    <span v-if="$v.form.nEmail.required.$invalid">Email is required</span>
                                    <span v-if="$v.form.nEmail.email.$invalid">Email is invalid</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="layout == '3'" class="block-widget-wrap">
            <div v-if="oneCol">
                <div class="newsletter-title-wrap">
                    <h2 class="newsletter-title">{{ nTitle }}</h2>
                    <div class="newsletter-text">{{ nSubTitle }}</div>
                </div>
                <form class="newsletter-form" @submit.prevent="handleSubmit" novalidate="true" :class="{ 'is-invalid': checkForm && $v.form.nEmail.$error }">
                    <input type="email" v-model="form.nEmail" name="your-email" size="40" :placeholder="placeholder" />
                    <span class="btn-submit">
                        <input type="submit" value="SUBSCRIBE">
                    </span>
                </form>
                <div v-if="checkForm && $v.form.nEmail.$error" class="invalid-feedback">
                    <span v-if="$v.form.nEmail.required.$invalid">Email is required</span>
                    <span v-if="$v.form.nEmail.email.$invalid">Email is invalid</span>
                </div>
            </div>
            <div v-else class="row">
                <div class="col-md-6">
                    <div class="newsletter-title-wrap">
                        <h2 class="newsletter-title">{{ nTitle }}</h2>
                        <div class="newsletter-text">{{ nSubTitle }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <form class="newsletter-form" @submit.prevent="handleSubmit" novalidate="true" :class="{ 'is-invalid': checkForm && $v.form.nEmail.$error }">
                        <input type="email" v-model="form.nEmail" name="your-email" size="40" :placeholder="placeholder" />
                        <span class="btn-submit">
                            <input type="submit" value="SUBSCRIBE">
                        </span>
                    </form>
                    <div v-if="checkForm && $v.form.nEmail.$error" class="invalid-feedback">
                        <span v-if="$v.form.nEmail.required.$invalid">Email is required</span>
                        <span v-if="$v.form.nEmail.email.$invalid">Email is invalid</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

const props = defineProps({
    title: String,
    subTitle: String,
    modClass: String,
    nTitle: String,
    nSubTitle: String,
    description: String,
    placeholder: String,
    image: String,
    button: { type: String, default: 'Subscribe' },
    layout: { type: Number, default: 1 },
    bgWhite: { type: Boolean, default: false },
    oneCol: { type: Boolean, default: false },
    alignLeft: { type: Boolean, default: false },
    positionCenter: { type: Boolean, default: false }
})

const checkForm = ref(false);
const form = reactive({ nEmail: '' });
const rules = {
    form: { nEmail: { required, email } }
};

const $v = useVuelidate(rules, { form });

const handleSubmit = async () => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;

        $v.value.form.$touch(); 
        
        checkForm.value = true; 
        
        const isFormCorrect = await $v.value.form.$validate();
        if (!isFormCorrect) {
            console.log("Form invalid:", $v.value.form.$errors);
            return;
        }

        alert('You’re now subscribed to our newsletter!');
    }
};
</script>