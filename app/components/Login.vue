<template>
    <div class="login-header">
        <a v-if="icon" :class="['active-login icon', { 'black': black }]" href="#"><i class="icon-user"></i></a>
        <a v-else :class="['active-login', { 'black': black }]" href="#">Login</a>
        <div class="form-login-register">
            <div class="box-form-login">
                <div class="active-login"></div>
                <div class="box-content">
                    <div class="form-login active">
                        <form @submit.prevent="handleSubmitLogin" novalidate="true" id="login_ajax" class="login">
                            <h2>Sign in</h2>
                            <p class="status"></p>
                            <div class="content">
                                <div class="username">
                                    <input type="text" name="login_username" v-model="formLogin.username" placeholder="Username" :class="['input-text', { 'is-invalid': checkFormLogin && $v.formLogin.username.$error }]" />
                                    <div v-if="checkFormLogin && $v.formLogin.username.$error" class="invalid-feedback">Username is required</div>
                                </div>
                                <div class="password">
                                    <input type="password" name="login_password" v-model="formLogin.password" placeholder="Password" :class="['input-text', { 'is-invalid': checkFormLogin && $v.formLogin.password.$error }]" />
                                    <div v-if="checkFormLogin && $v.formLogin.password.$error" class="invalid-feedback">Password is required</div>
                                </div>
                                <div class="rememberme-lost">
                                    <div class="rememberme">
                                        <input name="rememberme" type="checkbox" id="rememberme" value="forever"/>
                                        <label for="rememberme" class="inline">Remember me</label>
                                    </div>
                                    <div class="lost_password">
                                        <NuxtLink to="/forgot-password">Lost your password?</NuxtLink>
                                    </div>
                                </div>
                                <div class="button-login">
                                    <input type="submit" class="button" name="login" value="Login"/>
                                </div>
                                <div class="button-next-reregister">Create An Account</div>
                            </div>
                        </form>
                    </div>
                    <div class="form-register">
                        <form @submit.prevent="handleSubmitRegister" novalidate="true" class="register">
                            <h2>REGISTER</h2>
                            <div class="content">
                                <div class="username">
                                    <input type="text" name="register_username" v-model="formRegister.username" placeholder="Username" :class="['input-text', { 'is-invalid': checkFormRegister && $v.formRegister.username.$error }]" />
                                    <div v-if="checkFormRegister && $v.formRegister.username.$error" class="invalid-feedback">Username is required</div>
                                </div>
                                <div class="password">
                                    <input type="password" name="register_password" v-model="formRegister.password" placeholder="Password" :class="['input-text', { 'is-invalid': checkFormRegister && $v.formRegister.password.$error }]" />
                                    <div v-if="checkFormRegister && $v.formRegister.password.$error" class="invalid-feedback">Password is required</div>
                                </div>                                                          
                                <div class="button-register">
                                    <input type="submit" class="button" name="register" value="Register"/>
                                </div>
                                <div class="button-next-login">Already has an account</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const checkFormLogin = ref(false);
const checkFormRegister = ref(false);

const formLogin = reactive({ username: '', password: '' });
const formRegister = reactive({ username: '', password: '' });

const rules = {
    formLogin: { username: { required }, password: { required } },
    formRegister: { username: { required }, password: { required } }
};

const $v = useVuelidate(rules, { formLogin, formRegister });

onMounted(async () => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;
        
        $('.active-login').on('click', (e) => {
            e.preventDefault();
            $('.form-login-register').toggleClass('active');
        });

        $('.remove-form-login-register').on('click', () => {
            $('.form-login-register').removeClass('active');
        });

        $('.button-next-reregister').on('click', () => {
            $('.form-login').removeClass('active');
            $('.form-register').addClass('active');
        });

        $('.button-next-login').on('click', () => {
            $('.form-register').removeClass('active');
            $('.form-login').addClass('active');
        });
    }
});

const handleSubmitLogin = async () => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;

        $v.value.formLogin.$touch(); 
        
        checkFormLogin.value = true; 
        
        const isFormCorrect = await $v.value.formLogin.$validate();
        if (!isFormCorrect) {
            console.log("Form invalid:", $v.value.formLogin.$errors);
            return;
        }

        $('.form-login-register').removeClass('active');
        navigateTo('/my-account');
    }
};

const handleSubmitRegister = async () => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;
        
        $v.value.formRegister.$touch(); 

        checkFormRegister.value = true;

        const isFormCorrect = await $v.value.formRegister.$validate();
        if (!isFormCorrect) {
            console.log("Form invalid:", $v.value.formRegister.$errors);
            return;
        }

        $('.form-login-register').removeClass('active');
        alert('Register successfully! You can login now.');
    }
};
</script>