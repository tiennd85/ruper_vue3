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
          <div v-if="cartItems.length" class="shop-checkout">
            <form class="checkout" @submit.prevent="handleSubmit" novalidate="true">
              <div class="row">
                <div class="col-xl-8 col-lg-7 col-md-12 col-12">
                  <div class="customer-details">
                    <div class="billing-fields">
                      <h3>Billing details</h3>
                      <div class="billing-fields-wrapper">
                        <p class="form-row form-row-first">
                          <label>First name <span class="required" title="required">*</span></label>
                          <span class="input-wrapper">
                            <input type="text" v-model="form.bFname" name="billing_first_name" :class="['input-text', { 'is-invalid': checkForm && $v.form.bFname.$error }]" />
                            <div v-if="checkForm && $v.form.bFname.$error" class="invalid-feedback">First name is required</div>
                          </span>
                        </p>
                        <p class="form-row form-row-last">
                          <label>Last name <span class="required" title="required">*</span></label>
                          <span class="input-wrapper">
                            <input type="text" v-model="form.bLname" name="billing_last_name" :class="['input-text', { 'is-invalid': checkForm && $v.form.bLname.$error }]" />
                            <div v-if="checkForm && $v.form.bLname.$error" class="invalid-feedback">Last name is required</div>
                          </span>
                        </p>
                        <p class="form-row form-row-wide">
                          <label>Company name</label>
                          <span class="input-wrapper">
                            <input type="text" v-model="form.company" class="input-text" name="billing_company" />
                          </span>
                        </p>
                        <p class="form-row form-row-wide validate-email">
                          <label>Email address <span class="required" title="required">*</span></label>
                          <span class="input-wrapper">
                            <input type="email" v-model="form.email" name="billing_email" :class="['input-text', { 'is-invalid': checkForm && $v.form.email.$error }]" />
                            <div v-if="checkForm && $v.form.email.$error" class="invalid-feedback">
                              <span v-if="$v.form.email.required.$invalid">Email is required</span>
                              <span v-if="$v.form.email.email.$invalid">Email is invalid</span>
                            </div>
                          </span>
                        </p>
                        <p class="form-row form-row-wide">
                          <label>Country<span class="required" title="required">*</span></label>
                          <span class="input-wrapper">
                            <VueMultiselect
                              v-model="form.bCountry"
                              :options="countries.map(c => c.id)"
                              :custom-label="opt => countries.find(x => x.id === opt)?.text"
                              placeholder="Select a country"
                              :class="{ 'is-invalid': checkForm && $v.form.bCountry.$error }"
                            />
                            <div v-if="checkForm && $v.form.bCountry.$error" class="invalid-feedback">Country is required</div>
                          </span>
                        </p>
                        <p class="form-row address-field form-row-wide">
                          <label for="billing_city" class="">City <span class="required" title="required">*</span></label>
                          <span class="input-wrapper">
                            <input type="text" v-model="form.bCity" name="billing_city" :class="['input-text', { 'is-invalid': checkForm && $v.form.bCity.$error }]" />
                            <div v-if="checkForm && $v.form.bCity.$error" class="invalid-feedback">City is required</div>
                          </span>
                        </p>
                        <p class="form-row address-field form-row-wide">
                          <label>Full Address <span class="required" title="required">*</span></label>
                          <span class="input-wrapper">
                            <input type="text" v-model="form.bAddress" name="billing_address_1" :class="['input-text', { 'is-invalid': checkForm && $v.form.bAddress.$error }]" />
                            <div v-if="checkForm && $v.form.bAddress.$error" class="invalid-feedback">Full address is required</div>
                          </span>
                        </p>
                        <p class="form-row address-field validate-postcode form-row-wide">
                          <label>Postcode / ZIP</label>
                          <span class="input-wrapper">
                            <input type="text" v-model="form.bPostcode" class="input-text" name="billing_postcode" />
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="account-fields">
                      <p class="form-row form-row-wide">
                        <label class="checkbox">
                          <input class="input-checkbox" type="checkbox" @change="toggleCreateAccount" name="createaccount" value="1"> 
                          <span>Create an account?</span>
                        </label>
                      </p>
                      <div v-if="createAccount" class="create-account">
                        <p class="form-row">
                          <label>Create account password <span class="required" title="required">*</span></label>
                          <span class="input-wrapper password-input">
                            <input type="password" v-model="form.password" name="account_password" :class="['input-text', { 'is-invalid': checkForm && $v.form.password.$error }]" />
                            <div v-if="checkForm && $v.form.password.$error" class="invalid-feedback">Password is required</div>
                          </span>
                        </p>
                        <div class="clear"></div>
                      </div>
                    </div>
                  </div>
                  <div class="shipping-fields">
                    <p class="form-row form-row-wide ship-to-different-address">
                      <label class="checkbox">
                        <input class="input-checkbox" type="checkbox" @change="toggleShipDifferentAddress" name="ship_to_different_address" value="1"> 
                        <span>Ship to a different address?</span>
                      </label>
                    </p>
                    <div v-if="shipDifferentAddress" class="shipping-address">
                      <p class="form-row form-row-first">
                        <label>First name <span class="required" title="required">*</span></label>
                        <span class="input-wrapper">
                          <input type="text" v-model="form.sFname" name="shipping_first_name" :class="['input-text', { 'is-invalid': checkForm && $v.form.sFname.$error }]" />
                          <div v-if="checkForm && $v.form.sFname.$error" class="invalid-feedback">First name is required</div>
                        </span>
                      </p>
                      <p class="form-row form-row-last">
                        <label>Last name <span class="required" title="required">*</span></label>
                        <span class="input-wrapper">
                          <input type="text" v-model="form.sLname" name="shipping_last_name" :class="['input-text', { 'is-invalid': checkForm && $v.form.sLname.$error }]" />
                          <div v-if="checkForm && $v.form.sLname.$error" class="invalid-feedback">Last name is required</div>
                        </span>
                      </p>
                      <p class="form-row form-row-wide">
                        <label>Country<span class="required" title="required">*</span></label>
                        <span class="input-wrapper">
                          <VueMultiselect
                            v-model="form.sCountry"
                            :options="countries.map(c => c.id)"
                            :custom-label="opt => countries.find(x => x.id === opt)?.text"
                            placeholder="Select a country"
                            :class="{ 'is-invalid': checkForm && $v.form.sCountry.$error }"
                          />
                          <div v-if="checkForm && $v.form.sCountry.$error" class="invalid-feedback">Country is required</div>
                        </span>
                      </p>
                      <p class="form-row address-field form-row-wide">
                        <label for="shipping_city" class="">City <span class="required" title="required">*</span></label>
                        <span class="input-wrapper">
                          <input type="text" v-model="form.sCity" name="shipping_city" :class="['input-text', { 'is-invalid': checkForm && $v.form.sCity.$error }]" />
                          <div v-if="checkForm && $v.form.sCity.$error" class="invalid-feedback">City is required</div>
                        </span>
                      </p>
                      <p class="form-row address-field form-row-wide">
                        <label>Full Address <span class="required" title="required">*</span></label>
                        <span class="input-wrapper">
                          <input type="text" v-model="form.sAddress" name="shipping_address_1" :class="['input-text', { 'is-invalid': checkForm && $v.form.sAddress.$error }]" />
                          <div v-if="checkForm && $v.form.sAddress.$error" class="invalid-feedback">Full address is required</div>
                        </span>
                      </p>
                      <p class="form-row address-field validate-postcode form-row-wide">
                        <label>Postcode / ZIP</label>
                        <span class="input-wrapper">
                          <input type="text" v-model="form.sPostcode" class="input-text" name="shipping_postcode" />
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="additional-fields">
                    <p class="form-row notes">
                      <label>Order notes <span class="optional">(optional)</span></label>
                      <span class="input-wrapper">
                        <textarea name="order_comments" class="input-text" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea>
                      </span>
                    </p>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5 col-md-12 col-12">
                  <div class="checkout-review-order">
                    <div class="checkout-review-order-table">
                      <div class="review-order-title">Product</div>
                      <div class="cart-items">
                        <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
                          <div class="info-product">
                            <div class="product-thumbnail">
                              <img v-if="item.images[0]" width="600" height="600" :src="item.images[0]" :alt="item.title">
                            </div>
                            <div class="product-name">
                              {{ item.title }}
                              <strong class="product-quantity">QTY : {{ item.quantity }}</strong>                     
                            </div>
                          </div>
                          <div class="product-total">
                            <span>{{ $helpers.productPrice(item.salePrice * item.quantity) }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="cart-subtotal">
                        <h2>Subtotal</h2>
                        <div class="subtotal-price">
                          <span>{{ $helpers.productPrice(totalPrice) }}</span>
                        </div>
                      </div>
                      <div class="shipping-totals shipping">
                        <h2>Shipping</h2>
                        <div data-title="Shipping">
                          <ul class="shipping-methods custom-radio">
                            <li v-for="(shipping, index) in shippings" :key="index" @click="shippingMethod(shipping.cost)">
                              <input type="radio" name="shipping_method" value="shipping.cost" :checked="shippingCost == shipping.cost">
                              <label v-if="shipping.cost > 0">{{ shipping.name }}: <span>{{ $helpers.productPrice(shipping.cost) }}</span></label>
                              <label v-else>{{ shipping.name }}</label>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="order-total">
                        <h2>Total</h2>
                        <div class="total-price">
                          <strong>
                            <span>{{ $helpers.productPrice(totalPrice + shippingCost) }}</span>
                          </strong> 
                        </div>
                      </div>
                    </div>
                    <div id="payment" class="checkout-payment">
                      <ul class="payment-methods methods custom-radio">
                        <li class="payment-method" v-for="(payment, index) in payments" :key="index" @click="paymentMethod(payment.id)">
                          <input type="radio" name="payment_method" value="payment.id" :checked="index == 0">
                          <label>{{ payment.name }}</label>
                          <div v-if="selectedPayment == payment.id" class="payment-box">
                            <p>{{ payment.description }}</p>
                          </div>
                        </li>
                      </ul>
                      <div class="form-row place-order">
                        <div class="terms-and-conditions-wrapper">
                          <div class="privacy-policy-text"></div>
                        </div>
                        <button type="submit" class="button alt" name="checkout_place_order" value="Place order">Place order</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div v-else class="shop-cart-empty">
            <div class="notices-wrapper">
              <p class="cart-empty">Your cart is currently empty.</p>
            </div>  
            <div class="return-to-shop">
              <NuxtLink to="/products" class="button">
                Return to shop    
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import { useCartStore } from '~/stores/cart'
import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const title = 'Checkout';
const breadcrumbItems = [
  { text: 'Home', to: '/' },
  { text: 'Checkout', active: true }
]

// Data Shippings
const { data: shippingsData } = await useAsyncData('shippings', () => 
  queryContent('settings', 'shippings').findOne()
)
const shippings = computed(() => shippingsData.value?.body || [])

// Data Payments
const { data: paymentsData } = await useAsyncData('payments', () => 
  queryContent('settings', 'payments').findOne()
)
const payments = computed(() => paymentsData.value?.body || [])

// Data Countries
const { data: countriesData } = await useAsyncData('countries', () => 
  queryContent('settings', 'countries').findOne()
)
const countries = computed(() => countriesData.value?.body.map(item => { return {id:item.code, text:item.name} }) || [])

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const totalPrice = computed(() => cartStore.totalPrice)
const shippingCost = computed(() => cartStore.shippingCost)

// State
const createAccount = ref(false)
const shipDifferentAddress = ref(false)
const selectedPayment = ref(1)

const checkForm = ref(false)
const form = reactive({
  bFname: '', 
  bLname: '', 
  company: '', 
  email: '',
  bCountry: '', 
  bCity: '', 
  bAddress: '', 
  bPostcode: '',
  sFname: '', 
  sLname: '', 
  sCountry: '', 
  sCity: '', 
  sAddress: '', 
  sPostcode: '',
  password: ''
})

// Dynamic Validation Schema
const rules = computed(() => {
  const baseRules = {
    bFname: { required },
    bLname: { required },
    email: { required, email },
    bCountry: { required },
    bCity: { required },
    bAddress: { required }
  }

  // Ship Different Address
  if (shipDifferentAddress.value) {
    Object.assign(baseRules, {
      sFname: { required },
      sLname: { required },
      sCountry: { required },
      sCity: { required },
      sAddress: { required }
    })
  }

  // Create Account
  if (createAccount.value) {
    Object.assign(baseRules, { password: { required } })
  }

  return { form: baseRules }
})

const $v = useVuelidate(rules, { form })

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

    alert('Order placed successfully! Thank you for shopping.')
  }
};

const shippingMethod = (cost: number | string) => {
  cartStore.setShippingCost(parseFloat(cost as string))
}
const toggleCreateAccount = () => {
  createAccount.value = !createAccount.value
}
const toggleShipDifferentAddress = () => {
  shipDifferentAddress.value = !shipDifferentAddress.value
}
const paymentMethod = (payment: number) => {
  selectedPayment.value = payment
}

onMounted(async () => {
  if (process.client) {
    const $ = window.$ || (await import('jquery')).default;
    
    // Close the cart popup
    $('.dropdown.top-cart').removeClass('show')
    $('.dropdown.top-cart .dropdown-menu').removeClass('show')

    $('.custom-radio li').on('click', function(e) {
      $(this).closest('.custom-radio').find('li input').prop('checked', false)
      $(this).find('input').prop('checked', true)
    })
  }
})

definePageMeta({
  currentMenu: 'shop'
})

useHead({
  bodyAttrs: {
    class: 'shop'
  }
})
</script>