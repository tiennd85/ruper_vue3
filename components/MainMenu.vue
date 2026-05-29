<template>
    <ul id="menu-main-menu" class="menu">
        <li :class="['level-0 menu-item menu-item-has-children mega-menu', { 'current-menu-item': currentMenu == 'home' }]">
            <NuxtLink to="/"><span class="menu-item-text">Home</span></NuxtLink>
            <span class="toggle-submenu"></span>
            <div class="sub-menu">
                <div class="row">
                    <div class="col-md-6">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Furniture 1</h2>
                            <ul class="menu-list">
                                <li>
                                    <NuxtLink to="/"><span class="menu-item-text">Home Categories</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-2"><span class="menu-item-text">Home Clean</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-3"><span class="menu-item-text">Home Collection</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-4"><span class="menu-item-text">Home Grid</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-5"><span class="menu-item-text">Home Minimal</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-6"><span class="menu-item-text">Home Modern</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-7"><span class="menu-item-text">Home Stylish</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-8"><span class="menu-item-text">Home Unique</span></NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Furniture 2</h2>
                            <ul class="menu-list">
                                <li>
                                    <NuxtLink to="/home-9"><span class="menu-item-text">Home Split</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-10"><span class="menu-item-text">Home Gothic</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-11"><span class="menu-item-text">Home Luxury</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-12"><span class="menu-item-text">Home Scandinavian</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-13"><span class="menu-item-text">Home Mid-Century</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-14"><span class="menu-item-text">Home Retro</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/home-15"><span class="menu-item-text">Home Color Block</span></NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li :class="['level-0 menu-item menu-item-has-children', { 'current-menu-item': currentMenu == 'shop' }]">
            <NuxtLink to="/products"><span class="menu-item-text">Shop</span></NuxtLink>
            <span class="toggle-submenu"></span>
            <ul class="sub-menu">
                <li class="level-1 menu-item menu-item-has-children">
                    <NuxtLink to="/products"><span class="menu-item-text">Shop - Products</span></NuxtLink>
                    <ul class="sub-menu">
                        <li>
                            <NuxtLink to="/products"><span class="menu-item-text">Shop Grid - Left Sidebar</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path: '/products', query: { view: 'list' } }"><span class="menu-item-text">Shop List - Left Sidebar</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path :'/products', query: { sidebar: 'right'} }"><span class="menu-item-text">Shop Grid - Right Sidebar</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path :'/products', query: { sidebar: 'right', view: 'list' } }"><span class="menu-item-text">Shop List - Right Sidebar</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="{ path :'/products', query: { sidebar: 'none' } }"><span class="menu-item-text">Shop Grid - No Sidebar</span></NuxtLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/product/1"><span class="menu-item-text">Shop Details</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/cart"><span class="menu-item-text">Shop - Cart</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/checkout"><span class="menu-item-text">Shop - Checkout</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/wishlist"><span class="menu-item-text">Shop - Wishlist</span></NuxtLink>
                </li>
            </ul>
        </li>
        <li :class="['level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth', { 'align-center': positionMenu == 'center' }, { 'current-menu-item': currentMenu == 'blog' }]">
            <NuxtLink to="/blog-grid-left"><span class="menu-item-text">Blog</span></NuxtLink>
            <span class="toggle-submenu"></span>
            <div class="sub-menu">
                <div class="row">
                    <div class="col-md-5">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Blog Category</h2>
                            <ul class="menu-list">
                                <li>
                                    <NuxtLink to="/blogs"><span class="menu-item-text">Blog Grid - Left Sidebar</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="{ path: '/blogs', query: { view: 'list' } }"><span class="menu-item-text">Blog List - Left Sidebar</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="{ path :'/blogs', query: { sidebar: 'right'} }"><span class="menu-item-text">Blog Grid - Right Sidebar</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="{ path :'/blogs', query: { sidebar: 'right', view: 'list' } }"><span class="menu-item-text">Blog List - Right Sidebar</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="{ path :'/blogs', query: { sidebar: 'none' } }"><span class="menu-item-text">Blog Grid - No Sidebar</span></NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Blog Details</h2>
                            <ul class="menu-list">
                                <li>
                                    <NuxtLink to="/blog/1"><span class="menu-item-text">Blog Details - Left Sidebar</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="{ path: '/blog/1', query: { sidebar: 'right' } }"><span class="menu-item-text">Blog Details - Right Sidebar</span></NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink :to="{ path: '/blog/1', query: { sidebar: 'none' } }"><span class="menu-item-text">Blog Details - No Sidebar</span></NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="menu-section">
                            <h2 class="sub-menu-title">Recent Posts</h2>
                            <ModulesBlog :limit="3" />
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li :class="['level-0 menu-item menu-item-has-children', { 'current-menu-item': currentMenu == 'pages' }]">
            <NuxtLink to="#"><span class="menu-item-text">Pages</span></NuxtLink>
            <span class="toggle-submenu"></span>
            <ul class="sub-menu">
                <li>
                    <NuxtLink to="/login"><span class="menu-item-text">Login</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/register"><span class="menu-item-text">Register</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/forgot-password"><span class="menu-item-text">Forgot Password</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/my-account"><span class="menu-item-text">My Account</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about-us"><span class="menu-item-text">About Us</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact"><span class="menu-item-text">Contact</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/faq"><span class="menu-item-text">FAQ</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/page-404"><span class="menu-item-text">Page 404</span></NuxtLink>
                </li>
            </ul>
        </li>
        <li :class="['level-0 menu-item', { 'current-menu-item': currentMenu == 'contact' }]">
            <NuxtLink to="/contact"><span class="menu-item-text">Contact</span></NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

defineProps({
    currentMenu: {
        type: String,
        default: 'home'
    },
    positionMenu: {
        type: String,
        default: 'center'
    }
})

onMounted(async () => {
    if (process.client) {
        const $ = window.$ || (await import('jquery')).default;

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
});

onBeforeUnmount(() => {
    if (process.client) {
        $(window).off('resize');
    }
});
</script>