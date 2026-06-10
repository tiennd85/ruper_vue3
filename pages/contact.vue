<template>
  <div id="primary" class="content-area">
    <div id="title" class="page-title">
      <div class="section-container">
        <div class="content-title-heading">
          <h1 class="text-title-heading">
            {{ title }}
          </h1>
        </div>
        <div class="breadcrumbs">
          <Breadcrumb :breadcrumbItems="breadcrumbItems" />
        </div>
      </div>
    </div>
    <div id="content" class="site-content" role="main">
      <div class="page-contact">
        <!-- Block Map -->
        <section class="section section-padding">
          <div class="section-container small">
            <ModuleMap address="London Eye, London, United Kingdom" />
          </div>
        </section>

        <!-- Block Contact Info -->
        <section class="section section-padding m-b-70">
          <div class="section-container">
            <ModuleInfo :infos="infos" />
          </div>
        </section>

        <section class="section section-padding contact-background m-b-0">
          <div class="section-container small">
            <!-- Block Contact Form -->
            <div class="block block-contact-form">
              <div class="block-widget-wrap">
                <div class="block-title">
                  <h2>Send Us Your Questions!</h2>
                  <div class="sub-title">We’ll get back to you within two days.</div>
                </div>
                <div class="block-content">
                  <form @submit.prevent="handleSubmit" class="contact-form" novalidate="true">
                    <div class="contact-us-form">
                      <div class="row">
                        <div class="col-sm-12 col-md-6">
                          <label class="required">Name</label><br>
                          <div class="form-control-wrap">
                            <input type="text" name="name" v-model="form.name" size="40" :class="['form-control', { 'is-invalid': checkForm && $v.form.name.$error }]" aria-required="true">
                            <div v-if="$v.form.name.required.$invalid" class="invalid-feedback">Name is required</div>
                          </div>
                        </div>
                        <div class="col-sm-12 col-md-6">
                          <label class="required">Email</label><br>
                          <div class="form-control-wrap">
                            <input type="email" name="email" v-model="form.email" size="40" :class="['form-control', { 'is-invalid': checkForm && $v.form.email.$error }]" aria-required="true">
                            <div v-if="checkForm && $v.form.email.$error" class="invalid-feedback">
                              <span v-if="$v.form.email.required.$invalid">Email is required</span>
                              <span v-if="$v.form.email.email.$invalid">Email is invalid</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <label class="required">Message</label><br>
                          <div class="form-control-wrap">
                            <textarea name="message" cols="40" rows="10" v-model="form.message" :class="['form-control', { 'is-invalid': checkForm && $v.form.message.$error }]" aria-required="true"></textarea>
                            <div v-if="$v.form.message.required.$invalid" class="invalid-feedback">Message is required</div>
                          </div>
                        </div>
                      </div>
                      <div class="form-button">
                        <input type="submit" value="Submit" class="button">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

// Data Infos
const { data: infosData } = await useAsyncData('contact-infos', () => 
  queryContent('infos', 'infos').findOne()
)
const infos = computed(() => infosData.value?.body || [])

const title = 'Contact Us';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Contact Us', active: true }
]

// Validate form
const checkForm = ref(false);
const form = reactive({ 
  name: '', 
  email: '', 
  message: '' 
});
const rules = {
  form: { 
    name: { required }, 
    email: { required, email }, 
    message: { required } 
  }
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

    alert('Your contact has been sent successfully!')
  }
};

definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'contact footer-mt-0'
  }
})
</script>