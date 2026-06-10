<template>
    <div class="my-account-account-details">
        <form @submit.prevent="handleSubmit" novalidate="true" class="edit-account">
            <div class="form-row">
                <label>First name <span class="required">*</span></label>
                <input type="text" name="account_first_name" v-model="form.firstName" :class="['input-text', { 'is-invalid': checkForm && $v.form.firstName.$error }]">
                <div v-if="$v.form.firstName.required.$invalid" class="invalid-feedback">First name is required</div>
            </div>
            <div class="form-row">
                <label>Last name <span class="required">*</span></label>
                <input type="text" name="account_last_name" v-model="form.lastName" :class="['input-text', { 'is-invalid': checkForm && $v.form.lastName.$error }]">
                <div v-if="$v.form.lastName.required.$invalid" class="invalid-feedback">Last name is required</div>
            </div>
            <div class="clear"></div>
            <div class="form-row">
                <label>Display name <span class="required">*</span></label>
                <input type="text" name="account_display_name" v-model="form.displayName" :class="['input-text', { 'is-invalid': checkForm && $v.form.displayName.$error }]">
                <div v-if="$v.form.displayName.required.$invalid" class="invalid-feedback">Display name is required</div>
                <span><em>This will be how your name will be displayed in the account section and in reviews</em></span>
            </div>
            <div class="clear"></div>
            <div class="form-row">
                <label>Email address <span class="required">*</span></label>
                <input type="email" name="account_email" v-model="form.email" :class="['input-text', { 'is-invalid': checkForm && $v.form.email.$error }]">
                <div v-if="$v.form.email.required.$invalid" class="invalid-feedback">Email is required</div>
                <div v-if="$v.form.email.email.$invalid" class="invalid-feedback">Email is invalid</div>
            </div>
            <fieldset>
                <legend>Password change</legend>
                <div class="form-row">
                    <label>Current password (leave blank to leave unchanged)</label>
                    <input type="password" name="password_current" v-model="form.passwordCurrent" class="input-text" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>New password (leave blank to leave unchanged)</label>
                    <input type="password" name="password_1" v-model="form.password1" class="input-text" autocomplete="off">
                </div>
                <div class="form-row">
                    <label>Confirm new password</label>
                    <input type="password" name="password_2" v-model="form.password2" class="input-text" autocomplete="off">
                </div>
            </fieldset>
            <div class="clear"></div>
            <div class="form-row">
                <button type="submit" name="save_account_details" class="button" value="Save changes">Save changes</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

// Validate form
const checkForm = ref(false);
const form = reactive({ 
    firstName: 'Rosie', 
    lastName: 'Packer', 
    displayName: 'Rosie', 
    email: 'rosie2082@gmail.com', 
    passwordCurrent: '', 
    password1: '', 
    password2: '' 
});
const rules = {
    form: { 
        firstName: { required }, 
        lastName: { required }, 
        displayName: { required }, 
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

        alert('Changes saved successfully!');
    }
};
</script>