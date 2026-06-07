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
      <div class="section-padding">
        <div class="section-container p-l-r">
          <div class="page-login-register">
            <div class="row">
              <div class="col-md-6 offset-md-3 col-sm-12">
                <div class="box-form-login">
                  <h2>Register</h2>
                  <div class="box-content">
                    <div class="form-register">
                      <form @submit.prevent="handleSubmit" novalidate="true" class="login">
                        <div class="username">
                          <label>Username <span class="required">*</span></label>
                          <input type="text" name="username" v-model="form.username" :class="['input-text', { 'is-invalid': checkForm && $v.form.username.$error }]">
                          <div v-if="checkForm && $v.form.username.$error" class="invalid-feedback">Username is required</div>
                        </div>
                        <div class="password">
                          <label for="password">Password <span class="required">*</span></label>
                          <input type="password" name="password" v-model="form.password" :class="['input-text', { 'is-invalid': checkForm && $v.form.password.$error }]">
                          <div v-if="checkForm && $v.form.password.$error" class="invalid-feedback">Password is required</div>
                        </div>
                        <div class="button-register">
                          <input type="submit" class="button" name="register" value="Register"> 
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const title = 'Register';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Register', active: true }
]

const checkForm = ref(false);

const form = reactive({ username: '', password: '' });

const rules = {
  form: { username: { required }, password: { required } }
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

    alert('Register successfully! You can login now.');
  }
};

definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'register'
  }
})
</script>
