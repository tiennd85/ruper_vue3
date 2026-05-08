<template>
    <ul id="menu-main-menu" class="menu">
        <li :class="['level-0 menu-item menu-item-has-children mega-menu', { 'current-menu-item': currentMenu == 'home' }]">
            <nuxt-link to="/"><span class="menu-item-text">Home</span></nuxt-link>
            <span class="toggle-submenu"></span>
            <div class="sub-menu">
                <div class="row">
                    <div class="col-md-6">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Furniture 1</h2>
                            <ul class="menu-list">
                                <li>
                                    <nuxt-link to="/"><span class="menu-item-text">Home Categories</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-2"><span class="menu-item-text">Home Clean</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-3"><span class="menu-item-text">Home Collection</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-4"><span class="menu-item-text">Home Grid</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-5"><span class="menu-item-text">Home Minimal</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-6"><span class="menu-item-text">Home Modern</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-7"><span class="menu-item-text">Home Stylish</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-8"><span class="menu-item-text">Home Unique</span></nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Furniture 2</h2>
                            <ul class="menu-list">
                                <li>
                                    <nuxt-link to="/home-9"><span class="menu-item-text">Home Split</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-10"><span class="menu-item-text">Home Gothic</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-11"><span class="menu-item-text">Home Luxury</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-12"><span class="menu-item-text">Home Scandinavian</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-13"><span class="menu-item-text">Home Mid-Century</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-14"><span class="menu-item-text">Home Retro</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/home-15"><span class="menu-item-text">Home Color Block</span></nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li :class="['level-0 menu-item menu-item-has-children', { 'current-menu-item': currentMenu == 'shop' }]">
            <nuxt-link to="/products"><span class="menu-item-text">Shop</span></nuxt-link>
            <span class="toggle-submenu"></span>
            <ul class="sub-menu">
                <li class="level-1 menu-item menu-item-has-children">
                    <nuxt-link to="/products"><span class="menu-item-text">Shop - Products</span></nuxt-link>
                    <ul class="sub-menu">
                        <li>
                            <nuxt-link to="/products"><span class="menu-item-text">Shop Grid - Left Sidebar</span></nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path: '/products', query: { view: 'list' } }"><span class="menu-item-text">Shop List - Left Sidebar</span></nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path :'/products', query: { sidebar: 'right'} }"><span class="menu-item-text">Shop Grid - Right Sidebar</span></nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path :'/products', query: { sidebar: 'right', view: 'list' } }"><span class="menu-item-text">Shop List - Right Sidebar</span></nuxt-link>
                        </li>
                        <li>
                            <nuxt-link :to="{ path :'/products', query: { sidebar: 'none' } }"><span class="menu-item-text">Shop Grid - No Sidebar</span></nuxt-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <nuxt-link to="/product/1"><span class="menu-item-text">Shop Details</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/cart"><span class="menu-item-text">Shop - Cart</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/checkout"><span class="menu-item-text">Shop - Checkout</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/wishlist"><span class="menu-item-text">Shop - Wishlist</span></nuxt-link>
                </li>
            </ul>
        </li>
        <li :class="['level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth', { 'align-center': positionMenu == 'center' }, { 'current-menu-item': currentMenu == 'blog' }]">
            <nuxt-link to="/blog-grid-left"><span class="menu-item-text">Blog</span></nuxt-link>
            <span class="toggle-submenu"></span>
            <div class="sub-menu">
                <div class="row">
                    <div class="col-md-5">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Blog Category</h2>
                            <ul class="menu-list">
                                <li>
                                    <nuxt-link to="/blogs"><span class="menu-item-text">Blog Grid - Left Sidebar</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path: '/blogs', query: { view: 'list' } }"><span class="menu-item-text">Blog List - Left Sidebar</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path :'/blogs', query: { sidebar: 'right'} }"><span class="menu-item-text">Blog Grid - Right Sidebar</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path :'/blogs', query: { sidebar: 'right', view: 'list' } }"><span class="menu-item-text">Blog List - Right Sidebar</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path :'/blogs', query: { sidebar: 'none' } }"><span class="menu-item-text">Blog Grid - No Sidebar</span></nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Blog Details</h2>
                            <ul class="menu-list">
                                <li>
                                    <nuxt-link to="/blog/1"><span class="menu-item-text">Blog Details - Left Sidebar</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path: '/blog/1', query: { sidebar: 'right' } }"><span class="menu-item-text">Blog Details - Right Sidebar</span></nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link :to="{ path: '/blog/1', query: { sidebar: 'none' } }"><span class="menu-item-text">Blog Details - No Sidebar</span></nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Recent Posts</h2>
                            <BlogModule :limit="3" />
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li :class="['level-0 menu-item menu-item-has-children', { 'current-menu-item': currentMenu == 'pages' }]">
            <nuxt-link to="#"><span class="menu-item-text">Pages</span></nuxt-link>
            <span class="toggle-submenu"></span>
            <ul class="sub-menu">
                <li>
                    <nuxt-link to="/login"><span class="menu-item-text">Login</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/register"><span class="menu-item-text">Register</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/forgot-password"><span class="menu-item-text">Forgot Password</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/my-account"><span class="menu-item-text">My Account</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/about-us"><span class="menu-item-text">About Us</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact"><span class="menu-item-text">Contact</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/faq"><span class="menu-item-text">FAQ</span></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/page-404"><span class="menu-item-text">Page 404</span></nuxt-link>
                </li>
            </ul>
        </li>
        <li :class="['level-0 menu-item', { 'current-menu-item': currentMenu == 'contact' }]">
            <nuxt-link to="/contact"><span class="menu-item-text">Contact</span></nuxt-link>
        </li>
    </ul>
</template>

<script>
import $ from 'jquery'
import BlogModule from '~/components/modules/BlogModule'

export default {
    name: 'MainMenu',
    components: {
        BlogModule
    },
    props: {
        currentMenu: {
            type: String,
            default: 'home'
        },
        positionMenu: {
            type: String,
            default: 'center'
        }
    },
    mounted() {
        function mobileMenu() {
            var wd_width = $(window).width();
            var $main_menu = $('.menu', '#main-navigation');

            if (wd_width <= 991) {
                // Load mobile menu
                if ($('#mobile-main-menu').length < 1 && $main_menu.length > 0) {
                    var $menu = $main_menu.parent().clone();
                    $menu.attr('id', 'mobile-main-menu');
                    $($menu).find('.menu').removeAttr('id');
                    $('#page').append('<div class="site-mobile-navigation"><span id="remove-megamenu" class="remove-megamenu icon-remove">Close</span></div>');
                    $('.site-mobile-navigation').append($menu);
                }
            } else {
                $('.site-mobile-navigation').remove();
            }

            // Close mobile menu
            $('#remove-megamenu').on('click', function() {
                $('.site-mobile-navigation').removeClass('active');
                
                return !1
            });

            // Toggle submenu
            $('.toggle-submenu').off('click').on('click', function() { 
                $(this).toggleClass('open');
                $(this).closest('.menu-item').find('.sub-menu').slideToggle();

                return !1
            });
        }

        mobileMenu();
        $(window).resize(mobileMenu);
    }
}
</script>