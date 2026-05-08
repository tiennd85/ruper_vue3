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
                                    <div v-if="checkFormLogin && !$v.formLogin.username.required" class="invalid-feedback">Username is required</div>
                                </div>
                                <div class="password">
                                    <input type="password" name="login_password" v-model="formLogin.password" placeholder="Password" :class="['input-text', { 'is-invalid': checkFormLogin && $v.formLogin.password.$error }]" />
                                    <div v-if="checkFormLogin && !$v.formLogin.password.required" class="invalid-feedback">Password is required</div>
                                </div>
                                <div class="rememberme-lost">
                                    <div class="rememberme">
                                        <input name="rememberme" type="checkbox" id="rememberme" value="forever"/>
                                        <label for="rememberme" class="inline">Remember me</label>
                                    </div>
                                    <div class="lost_password">
                                        <nuxt-link to="/forgot-password">Lost your password?</nuxt-link>
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
                                    <div v-if="checkFormRegister && !$v.formRegister.username.required" class="invalid-feedback">Username is required</div>
                                </div>
                                <div class="password">
                                    <input type="password" name="register_password" v-model="formRegister.password" placeholder="Password" :class="['input-text', { 'is-invalid': checkFormRegister && $v.formRegister.password.$error }]" />
                                    <div v-if="checkFormRegister && !$v.formRegister.password.required" class="invalid-feedback">Password is required</div>
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

<script>
import $ from 'jquery'
import { required, email } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    props: {
        black: {
          type: Boolean,
          default: false
        },
        icon: {
          type: Boolean,
          default: false
        }
    },
    data() {
        return {
            formLogin: {
                username: '',
                password: ''
            },
            checkFormLogin: false,
            formRegister: {
                username: '',
                password: ''
            },
            checkFormRegister: false
        }
    },
    validations() {
        return {
            formLogin: {
                username: { required },
                password: { required }
            },
            formRegister: {
                username: { required },
                password: { required }
            }
        }
    },
    mounted() {
        // Form Login
        $('.active-login').on('click', function(e) {
            e.preventDefault();

            if ($('.form-login-register').hasClass('active')) {
                $('.form-login-register').removeClass('active')
            } else {
                $('.form-login-register').addClass('active')
            }
        });
        $('.remove-form-login-register').on('click', function() {
            if ($('.form-login-register').hasClass('active')) {
                $('.form-login-register').removeClass('active')
            }
        })
        $('.button-next-reregister').on('click', function() {
            if ($('.form-login').hasClass('active')) {
                $('.form-login').removeClass('active');
                $('.form-register').addClass('active')
            }
        });
        $('.button-next-login').on('click', function() {
            if ($('.form-register').hasClass('active')) {
                $('.form-register').removeClass('active');
                $('.form-login').addClass('active')
            }
        })
    },
    methods: {
        // Handle submit form login
        handleSubmitLogin(e) {
            this.checkFormLogin = true
            
            // Stop if form is invalid
            this.$v.$touch();
            if (this.$v.formLogin.$invalid) {
                return
            }

            $('.form-login-register').removeClass('active')
            this.$router.push('/my-account')
        },
        // Handle submit form register
        handleSubmitRegister(e) {
            this.checkFormRegister = true

            // Stop if form is invalid
            this.$v.$touch();
            if (this.$v.formRegister.$invalid) {
                return
            }

            $('.form-login-register').removeClass('active')

            // Notify if form is valid
            alert('Register successfully! You can login now.')
        }
    }
}
</script>