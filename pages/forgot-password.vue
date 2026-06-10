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
          <div class="page-forget-password">
            <form @submit.prevent="handleSubmit" novalidate="true" class="reset-password">
              <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
              <div class="form-row form-row-first">
                <label>Username or email</label>
                <input type="email" v-model="form.email" name="user_login" :class="['input-text', { 'is-invalid': checkForm && $v.form.email.$error }]">
                <div v-if="checkForm && $v.form.email.$error" class="invalid-feedback">
                  <span v-if="$v.form.email.required.$invalid">Email is required</span>
                  <span v-if="$v.form.email.email.$invalid">Email is invalid</span>
                </div>
              </div>
              <div class="clear"></div>
              <p class="form-row">
                <button type="submit" class="button" value="Reset password">Reset password</button>
              </p>
            </form>
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

const title = 'Forgot Password';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Forgot Password', active: true }
]

// Validate form
const checkForm = ref(false);
const form = reactive({ 
  email: '' 
});
const rules = {
  form: { 
    email: { required, email } 
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

    alert('The reset password has been sent to your email successfully!')
  }
};

definePageMeta({
  currentMenu: 'pages'
})

useHead({
  bodyAttrs: {
    class: 'login'
  }
})
</script>
