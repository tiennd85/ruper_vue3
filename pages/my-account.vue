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
          <div class="page-my-account">
            <div class="my-account-wrap clearfix">
              <nav class="my-account-navigation">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#dashboard" role="tab">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#orders" role="tab">Orders</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#addresses" role="tab">Addresses</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#account-details" role="tab">Account details</a>
                  </li>
                  <li class="nav-item">
                    <nuxt-link to="/login" class="nav-link">Logout</nuxt-link>
                  </li>
                </ul>
              </nav>
              <div class="my-account-content tab-content">
                <div class="tab-pane fade show active" id="dashboard" role="tabpanel">
                  <div class="my-account-dashboard">
                    <p>
                      Hello <strong>Rosie</strong> (<nuxt-link to="/login">Log out</nuxt-link>)
                    </p>
                    <p>
                      From your account dashboard you can view your <strong>recent orders</strong>, manage your <strong>shipping and billing addresses</strong>, and edit your password and <strong>account details</strong>.
                    </p>
                  </div>
                </div>
                <div class="tab-pane fade" id="orders" role="tabpanel">
                  <div class="my-account-orders">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#1357</td>
                            <td>March 45, 2020</td>
                            <td>Processing</td>
                            <td>$125.00 for 2 item</td>
                            <td><nuxt-link to="#" class="btn-small d-block">View</nuxt-link></td>
                          </tr>
                          <tr>
                            <td>#2468</td>
                            <td>June 29, 2020</td>
                            <td>Completed</td>
                            <td>$364.00 for 5 item</td>
                            <td><nuxt-link to="#" class="btn-small d-block">View</nuxt-link></td>
                          </tr>
                          <tr>
                            <td>#2366</td>
                            <td>August 02, 2020</td>
                            <td>Completed</td>
                            <td>$280.00 for 3 item</td>
                            <td><nuxt-link to="#" class="btn-small d-block">View</nuxt-link></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="addresses" role="tabpanel">
                  <div class="my-account-addresses">
                    <p>
                      The following addresses will be used on the checkout page by default.
                    </p>
                    <div class="addresses">
                      <div class="addresses-col">
                        <header class="col-title">
                          <h3>Billing address</h3>
                          <nuxt-link to="#" class="edit">Edit</nuxt-link>
                        </header>
                        <address>
                          3522 Interstate<br>
                          75 Business Spur,<br>
                          Sault Ste.<br>
                          Marie, MI 49783
                        </address>
                      </div>
                      <div class="addresses-col">
                        <header class="col-title">
                          <h3>Shipping address</h3>
                          <nuxt-link to="#" class="edit">Edit</nuxt-link>
                        </header>
                        <address>
                          4299 Express Lane<br>
                          Sarasota,<br>
                          FL 34249 USA <br>
                          Phone: 1.941.227.4444
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="account-details" role="tabpanel">
                  <div class="my-account-account-details">
                    <form @submit.prevent="handleSubmit" novalidate="true" class="edit-account">
                      <div class="form-row">
                        <label for="account_first_name">First name <span class="required">*</span></label>
                        <input type="text" name="account_first_name" v-model="form.firstName" :class="['input-text', { 'is-invalid': checkForm && $v.form.firstName.$error }]">
                        <div v-if="checkForm && !$v.form.firstName.required" class="invalid-feedback">First name is required</div>
                      </div>
                      <div class="form-row">
                        <label>Last name <span class="required">*</span></label>
                        <input type="text" name="account_last_name" v-model="form.lastName" :class="['input-text', { 'is-invalid': checkForm && $v.form.lastName.$error }]">
                        <div v-if="checkForm && !$v.form.lastName.required" class="invalid-feedback">Last name is required</div>
                      </div>
                      <div class="clear"></div>
                      <div class="form-row">
                        <label>Display name <span class="required">*</span></label>
                        <input type="text" name="account_display_name" v-model="form.displayName" :class="['input-text', { 'is-invalid': checkForm && $v.form.displayName.$error }]">
                        <div v-if="checkForm && !$v.form.displayName.required" class="invalid-feedback">Display name is required</div>
                        <span><em>This will be how your name will be displayed in the account section and in reviews</em></span>
                      </div>
                      <div class="clear"></div>
                      <div class="form-row">
                        <label>Email address <span class="required">*</span></label>
                        <input type="email" name="account_email" v-model="form.email" :class="['input-text', { 'is-invalid': checkForm && $v.form.email.$error }]">
                        <div v-if="checkForm && !$v.form.email.required" class="invalid-feedback">Email is required</div>
                        <div v-if="checkForm && !$v.form.email.email" class="invalid-feedback">Email is invalid</div>
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
                </div>
              </div>
            </div>
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
  name: 'MyAccount',
  data() {
    return {
      title: 'My Account',
      breadcrumbItems: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'My Account',
          to: '',
        }
      ],
      form: {
        firstName: 'Rosie',
        lastName: 'Packer',
        displayName: 'Rosie',
        email: 'rosie2082@gmail.com',
        passwordCurrent: '',
        password1: '',
        password2: ''
      },
      checkForm: false
    }
  },
  validations() {
    return {
      form: { 
        firstName: { required },
        lastName: { required },
        displayName: { required },
        email: { required, email }
      }
    }
  },
  mounted() {
    // Class of body tag
    $('body').removeClass()
    $('body').addClass('my-account')

    // Current menu
    this.$nuxt.$emit('currentMenu', 'pages')
  },
  methods: {
    // Handle submit form
    handleSubmit(e) {
      this.checkForm = true

      // Stop if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return
      }

      // Notify if form is valid
      alert('Changes saved successfully!')
    }
  }
}
</script>