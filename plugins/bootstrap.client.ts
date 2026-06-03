import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default defineNuxtPlugin(() => {
  window.$ = window.jQuery = jQuery;
});