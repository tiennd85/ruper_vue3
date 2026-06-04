<template>
  <footer v-if="footerLayout == 1" id="site-footer" class="site-footer">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleImage width="100" image="/img/logo.png" alt="Ruper – Furniture VueJs Template" :padding="false" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
                
                <ModuleImage width="400" height="79" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 2" id="site-footer" class="site-footer background">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container large">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="About" :menus="menuFooter3" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" modClass="m-b-30" />

                <ModuleSocial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container large">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 3" id="site-footer" class="site-footer background">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <ModuleSocial />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleText title="Showroom" content="<p>1000 84th Street SW , Byron Center, MI 49315</p><p>AmericasMart Bldg. #1</p><p>Suite 5C-1, Atlanta, GA 30303</p>" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" /> 

                <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <p class="copyright text-center">Copyright © 2026. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 4" id="site-footer" class="site-footer small-space">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Connect" :menus="menuFooter5" />
              </div>
              <div class="col-lg-12 col-md-12 text-center">
                <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleMenu :menus="menuFooter6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 5" id="site-footer" class="site-footer">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <ModuleSocial />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleText title="Showroom" content="<p>1000 84th Street SW , Byron Center, MI 49315</p><p>AmericasMart Bldg. #1</p><p>Suite 5C-1, Atlanta, GA 30303</p>" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
                
                <ModuleImage width="400" height="79" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <p class="copyright text-center">Copyright © 2026. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 6" id="site-footer" class="site-footer">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleImage width="100" image="/img/logo.png" alt="Ruper – Furniture VueJs Template" :padding="false" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
                
                <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 7" id="site-footer" class="site-footer three-columns">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-4 column-left">
                <div class="column-wrap">
                  <div class="row">
                    <div class="col-lg-6 md-b-20">
                      <ModuleMenu title="Contact Us" :menus="menuFooter1" />
                    </div>
                    <div class="col-lg-6">
                      <ModuleMenu title="Services" :menus="menuFooter2" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 column-center">
                <div class="column-wrap">
                  <ModuleImage width="100" image="/img/logo.png" modClass="m-b-20" alt="Ruper – Furniture VueJs Template" :padding="false" />
                </div>
              </div>
              <div class="col-lg-4 column-right">
                <div class="column-wrap">
                  <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />

                  <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <p class="copyright text-center">Copyright © 2026. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 8" id="site-footer" class="site-footer background four-columns">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6 column-1">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <ModuleSocial />
              </div>
              <div class="col-lg-3 col-md-6 column-2">
                <ModuleMenu title="Categories" :menus="menuFooter7" />
              </div>
              <div class="col-lg-3 col-md-6 column-3">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6 column-4">
                <ModuleMap title="Visit Our Store" address="London Eye, London, United Kingdom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom background-white no-border-top">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 9" id="site-footer" class="site-footer dark">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleImage width="100" image="/img/logo-white.png" alt="Ruper – Furniture VueJs Template" :padding="false" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" />
              
                <ModuleImage width="400" height="79" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 10" id="site-footer" class="site-footer">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="block block-image">
                  <ModuleImage width="100" image="/img/logo.png" alt="Ruper – Furniture VueJs Template" :padding="false" />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
              
                <ModuleImage width="400" height="79" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 11" id="site-footer" class="site-footer small-space">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Connect" :menus="menuFooter5" />
              </div>
              <div class="col-lg-12 col-md-12 text-center">
                <ModuleImage width="400" height="79" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleMenu :menus="menuFooter6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 12" id="site-footer" class="site-footer">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container large">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="About" :menus="menuFooter3" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" modClass="m-b-30" />
              
                <ModuleSocial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container large">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 13" id="site-footer" class="site-footer background">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <ModuleSocial />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleText title="Showroom" content="<p>1000 84th Street SW , Byron Center, MI 49315</p><p>AmericasMart Bldg. #1</p><p>Suite 5C-1, Atlanta, GA 30303</p>" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" />
                
                <ModuleImage width="400" height="79" image="/img/payments.png" alt="Payments" :padding="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <p class="copyright text-center">Copyright © 2026. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 14" id="site-footer" class="site-footer three-columns">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-4 column-left">
                <div class="column-wrap">
                  <div class="row">
                    <div class="col-lg-6 md-b-20">
                      <ModuleMenu title="Contact Us" :menus="menuFooter1" />
                    </div>
                    <div class="col-lg-6">
                      <ModuleMenu title="Services" :menus="menuFooter2" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 column-center">
                <div class="column-wrap">
                  <ModuleImage width="100" image="/img/logo.png" alt="Ruper – Furniture VueJs Template" :padding="false" modClass="m-b-20" />
                  
                  <ModuleSocial />
                </div>
              </div>
              <div class="col-lg-4 column-right">
                <div class="column-wrap">
                  <ModuleNewsletter title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />

                  <ModuleImage width="400" height="79" image="/img/payments.png" alt="Payments" :padding="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <p class="copyright text-center">Copyright © 2026. All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else-if="footerLayout == 15" id="site-footer" class="site-footer background four-columns">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6 column-1">
                <ModuleMenu title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <ModuleSocial />
              </div>
              <div class="col-lg-3 col-md-6 column-2">
                <ModuleMenu title="Categories" :menus="menuFooter7" />
              </div>
              <div class="col-lg-3 col-md-6 column-3">
                <ModuleMenu title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6 column-4">
                <ModuleMap title="Visit Our Store" address="London Eye, London, United Kingdom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom background-white no-border-top">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-md-6">
                <div class="footer-left">
                  <p class="copyright">Copyright © 2026. All Right Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="footer-right">
                  <ModuleImage width="309" height="32" image="/img/payments.png" alt="Payments" :padding="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useMenuStore } from '~/stores/menu'

const props = defineProps({
  footerLayout: { type: Number, default: 1 }
})

// Footer 1 Data
const { data: footer1Data } = await useAsyncData('menu-footer1', () => 
  queryContent('menus', 'footer1').findOne()
)
const menuFooter1 = computed(() => footer1Data.value?.body || [])

// Footer 2 Data
const { data: footer2Data } = await useAsyncData('menu-footer2', () => 
  queryContent('menus', 'footer2').findOne()
)
const menuFooter2 = computed(() => footer2Data.value?.body || [])

// Footer 3 Data
const { data: footer3Data } = await useAsyncData('menu-footer3', () => 
  queryContent('menus', 'footer3').findOne()
)
const menuFooter3 = computed(() => footer3Data.value?.body || [])

// Footer 4 Data
const { data: footer4Data } = await useAsyncData('menu-footer4', () => 
  queryContent('menus', 'footer4').findOne()
)
const menuFooter4 = computed(() => footer4Data.value?.body || [])

// Footer 5 Data
const { data: footer5Data } = await useAsyncData('menu-footer5', () => 
  queryContent('menus', 'footer5').findOne()
)
const menuFooter5 = computed(() => footer5Data.value?.body || [])

// Footer 6 Data
const { data: footer6Data } = await useAsyncData('menu-footer6', () => 
  queryContent('menus', 'footer6').findOne()
)
const menuFooter6 = computed(() => footer6Data.value?.body || [])

// Footer 7 Data
const { data: footer7Data } = await useAsyncData('menu-footer7', () => 
  queryContent('menus', 'footer7').findOne()
)
const menuFooter7 = computed(() => footer7Data.value?.body || [])

// Handle scroll
const handleScroll = async () => {
  if (process.client) {
    const $ = window.$ || (await import('jquery')).default;

    const backTopBtn = $('.back-top')
    if ($(window).scrollTop()! > 100) {
      backTopBtn.addClass('button-show')
    } else {
      backTopBtn.removeClass('button-show')
    }
  }
}

onMounted(async() => {
  if (process.client) {
    $(window).on('scroll', handleScroll)
  }
})

onUnmounted(async() => {
  if (process.client) {
    $(window).off('scroll', handleScroll)
  }
})
</script>