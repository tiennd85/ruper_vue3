<template>
  <footer v-if="footerLayout == 1" id="site-footer" class="site-footer">
    <div class="footer">
      <div class="section-padding">
        <div class="section-container">
          <div class="block-widget-wrap">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <ImageModule width="100" :image="require('@/assets/img/logo.png')" alt="Ruper – Furniture VueJs Template" :padding="false" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
                
                <ImageModule width="400" height="79" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                  <SocialModule />
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
                <MenuModule title="About" :menus="menuFooter3" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" modClass="m-b-30" />

                <SocialModule />
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
                  <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                <MenuModule title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <SocialModule />
              </div>
              <div class="col-lg-3 col-md-6">
                <TextModule title="Showroom" content="<p>1000 84th Street SW , Byron Center, MI 49315</p><p>AmericasMart Bldg. #1</p><p>Suite 5C-1, Atlanta, GA 30303</p>" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" /> 

                <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                <MenuModule title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Connect" :menus="menuFooter5" />
              </div>
              <div class="col-lg-12 col-md-12 text-center">
                <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                  <MenuModule :menus="menuFooter6" />
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
                <MenuModule title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <SocialModule />
              </div>
              <div class="col-lg-3 col-md-6">
                <TextModule title="Showroom" content="<p>1000 84th Street SW , Byron Center, MI 49315</p><p>AmericasMart Bldg. #1</p><p>Suite 5C-1, Atlanta, GA 30303</p>" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
                
                <ImageModule width="400" height="79" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                <ImageModule width="100" :image="require('@/assets/img/logo.png')" alt="Ruper – Furniture VueJs Template" :padding="false" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
                
                <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                  <SocialModule />
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
                      <MenuModule title="Contact Us" :menus="menuFooter1" />
                    </div>
                    <div class="col-lg-6">
                      <MenuModule title="Services" :menus="menuFooter2" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 column-center">
                <div class="column-wrap">
                  <ImageModule width="100" :image="require('@/assets/img/logo.png')" modClass="m-b-20" alt="Ruper – Furniture VueJs Template" :padding="false" />
                  
                  
                </div>
              </div>
              <div class="col-lg-4 column-right">
                <div class="column-wrap">
                  <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />

                  <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                <MenuModule title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <SocialModule />
              </div>
              <div class="col-lg-3 col-md-6 column-2">
                <MenuModule title="Categories" :menus="menuFooter7" />
              </div>
              <div class="col-lg-3 col-md-6 column-3">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6 column-4">
                <MapModule title="Visit Our Store" address="London Eye, London, United Kingdom" />
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
                  <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                <ImageModule width="100" :image="require('@/assets/img/logo-white.png')" alt="Ruper – Furniture VueJs Template" :padding="false" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" />
              
                <ImageModule width="400" height="79" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                  <SocialModule />
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
                  <ImageModule width="100" :image="require('@/assets/img/logo.png')" alt="Ruper – Furniture VueJs Template" :padding="false" />
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />
              
                <ImageModule width="400" height="79" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                  <SocialModule />
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
                <MenuModule title="Contact Us" :menus="menuFooter1" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Connect" :menus="menuFooter5" />
              </div>
              <div class="col-lg-12 col-md-12 text-center">
                <ImageModule width="400" height="79" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                  <MenuModule :menus="menuFooter6" />
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
                <MenuModule title="About" :menus="menuFooter3" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Help" :menus="menuFooter4" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" modClass="m-b-30" />
              
                <SocialModule />
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
                  <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                <MenuModule title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <SocialModule />
              </div>
              <div class="col-lg-3 col-md-6">
                <TextModule title="Showroom" content="<p>1000 84th Street SW , Byron Center, MI 49315</p><p>AmericasMart Bldg. #1</p><p>Suite 5C-1, Atlanta, GA 30303</p>" />
              </div>
              <div class="col-lg-3 col-md-6">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6">
                <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" :bgWhite="true" />
                
                <ImageModule width="400" height="79" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                      <MenuModule title="Contact Us" :menus="menuFooter1" />
                    </div>
                    <div class="col-lg-6">
                      <MenuModule title="Services" :menus="menuFooter2" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 column-center">
                <div class="column-wrap">
                  <ImageModule width="100" :image="require('@/assets/img/logo.png')" alt="Ruper – Furniture VueJs Template" :padding="false" modClass="m-b-20" />
                  
                  <SocialModule />
                </div>
              </div>
              <div class="col-lg-4 column-right">
                <div class="column-wrap">
                  <NewsletterModule title="Newsletter" description="Enter your email below to be the first to know about new collections and product launches." placeholder="Email address" />

                  <ImageModule width="400" height="79" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
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
                <MenuModule title="Contact Us" :menus="menuFooter1" modClass="m-b-20" />

                <SocialModule />
              </div>
              <div class="col-lg-3 col-md-6 column-2">
                <MenuModule title="Categories" :menus="menuFooter7" />
              </div>
              <div class="col-lg-3 col-md-6 column-3">
                <MenuModule title="Services" :menus="menuFooter2" />
              </div>
              <div class="col-lg-3 col-md-6 column-4">
                <MapModule title="Visit Our Store" address="London Eye, London, United Kingdom" />
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
                  <ImageModule width="309" height="32" :image="require('@/assets/img/payments.png')" alt="Payments" :padding="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MenuModule from '~/components/modules/MenuModule'
import NewsletterModule from '~/components/modules/NewsletterModule'
import ImageModule from '~/components/modules/ImageModule'
import SocialModule from '~/components/modules/SocialModule'
import TextModule from '~/components/modules/TextModule'
import MapModule from '~/components/modules/MapModule'

export default {
  name: 'Footer',
  components: {
    MenuModule,
    NewsletterModule,
    ImageModule,
    SocialModule,
    TextModule,
    MapModule
  },
  props: {
    footerLayout: {
      type: Number,
      default: 1
    }
  },
  computed: {
    menuFooter1() {
      return this.$store.state.menus.footer1
    },
    menuFooter2() {
      return this.$store.state.menus.footer2
    },
    menuFooter3() {
      return this.$store.state.menus.footer3
    },
    menuFooter4() {
      return this.$store.state.menus.footer4
    },
    menuFooter5() {
      return this.$store.state.menus.footer5
    },
    menuFooter6() {
      return this.$store.state.menus.footer6
    },
    menuFooter7() {
      return this.$store.state.menus.footer7
    }
  },
  mounted () {
    $(document).ready(function() {
      $(window).scroll(function() {
        // Show/Hide Back Top button
        if ($(this).scrollTop() > 100) {
          $('.back-top').addClass('button-show')
        } else {
          $('.back-top').removeClass('button-show')
        }
      });
    });
  }
}
</script>