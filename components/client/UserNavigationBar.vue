<template>
    <div class="navbar-container">
        <div class="navbar-navigation-container">
            <img src="/icons/hamburger.svg" class="navbar-navigation-hamburger" @click="toggleHamburger" />
            <div class="navbar-navigation-logo">
                <img src="/images/logo-shodart.png" />
                <h1>SHOD-ART</h1>
            </div>
        </div>
        <div class="navbar-additional-container" v-if="!isMobile">
            <template v-for="button in additionalPartButtons">
                <AppButton label="" :image-icon="`/icons/${button.icon}.svg`" type="stock"
                    class="navbar-additional-button" />
            </template>
            <AppButton :badge="userCart.length" label="" image-icon="/icons/bag-2.svg" type="stock"
                class="navbar-additional-button" @click="toggleCartsMenu" />
        </div>
    </div>
    <div class="navbar-navigation-footer">
        <AppButton prefix-icon="filter" :class="{
            'navbar-navigation-footer-button': true,
            'has-active-filter': typeof activeFilters !== 'undefined' && activeFilters.length > 0
        }" type="custom" label="Filterlar" @click="toggleFiltersMenu" />
        <AppButton prefix-icon="shopping-bag" :class="{
            'navbar-navigation-footer-button': true,
            'has-active-filter': typeof activeFilters !== 'undefined' && activeFilters.length > 0
        }" type="custom" label="Savatingiz" @click="toggleCartsMenu" :badge="String(userCart.length)" />
    </div>

    <PrimeSidebar v-model:visible="isCartVisible" :modal="true" class="cart-sidebar" position="right">
        <template #container="{ closeCallback }">
            <div class="cart-sidebar-header">
                <h1><img src="/icons/bag-2.svg" />{{ userCart.length }} tovar(lar)</h1>
                <AppButton prefix-icon="times" @click="closeCallback" type="stock" class="border-none w-max" />
            </div>
            <Divider style="margin: 0;
            padding: 0;" />
            <div class="cart-sidebar-container">
                <div v-if="userCart.length > 0" class="cart-items-list">
                    <div v-for="item in userCart" :key="item.id" class="cart-item">
                        <div class="cart-item-image">
                            <img :src="getProductById(item.id)?.imageUrl" :alt="getProductById(item.id)?.name" />
                        </div>
                        <div class="cart-item-info">
                            <h4>{{ getProductById(item.id)?.name }}</h4>
                            <div class="flex items-center gap-5 mt-5">
                                <InputNumber v-model="item.quantity" inputId="horizontal-buttons" showButtons
                                    buttonLayout="horizontal" :step="1" class="custom-inputnumber">
                                    <template #incrementbuttonicon>
                                        <span class="pi pi-plus text-sm" />
                                    </template>
                                    <template #decrementbuttonicon>
                                        <span class="pi pi-minus text-sm" />
                                    </template>
                                </InputNumber>
                                <p class="cart-items-delete" @click="removeFromCart(item.id)">Olib tashlash</p>
                            </div>
                        </div>
                        <div class="cart-item-price">
                            ${{ (getProductById(item.id)?.price) * item.quantity }}
                        </div>
                    </div>
                </div>
                <div v-else class="empty-cart">
                    <p>Ваша корзина пуста</p>
                </div>
            </div>
        </template>
    </PrimeSidebar>
    <PrimeSidebar v-model:visible="isSidebarVisible" :modal="true">
        <template #container="{ closeCallback }">
            <div class="navbar-nav-container">
                <AppIcon icon="times" @click="closeCallback" class="ml-auto hover:cursor-pointer" />
                <div class="navbar-navigation-links">
                    <RouterLink :to="{ name: el.to }" v-for="(el, idx) in navLinks" :key="idx"
                        v-motion-slide-visible-left :initial="{
                            x: -100,
                            opacity: 0
                        }" :enter="{
                            x: 0,
                            opacity: 1,
                            rotate: 0,
                            transition: {
                                type: 'spring',
                                delay: idx * 0.1,
                            }
                        }" class="navbar-navigation-link" :class="{
                            'navbar-navigation-link-bordered': idx !== 11,
                            active: $route.name === el.to
                        }">
                        {{ el.name }}
                    </RouterLink>
                </div>
            </div>
        </template>
    </PrimeSidebar>
    <PrimeSidebar v-model:visible="isFiltersVisible" :modal="true" position="full">
        <template #container="{ closeCallback }">
            <div class="navbar-nav-container">
                <AppIcon icon="times" @click="closeCallback" class="ml-auto hover:cursor-pointer" />
                <AppFilters @provideActiveFilters="handleFilters" />
            </div>
        </template>
    </PrimeSidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PrimeSidebar from 'primevue/sidebar';
import { RouterPaths } from '~/types/router';
import { useIsMobile } from '~/composable/helpers';
import type { IAnyObject } from '~/types/helpers';

const isSidebarVisible = ref(false);
const isFiltersVisible = ref(false)
const isCartVisible = ref(false)
const value3 = ref()
const activeFilters = ref()
const { isMobile } = useIsMobile()
const { userCart, getProductById, removeFromCart } = useProductStore()

const toggleHamburger = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
};
const toggleFiltersMenu = () => {
    isFiltersVisible.value = !isFiltersVisible.value;
};
const toggleCartsMenu = () => {
    isCartVisible.value = !isCartVisible.value;
};
const handleFilters = (filters: IAnyObject[]) => {
    activeFilters.value = filters
}

const additionalPartButtons = ref([
    { icon: "search-normal" },
    { icon: "heart" },
    { icon: "user" },
]);

const navLinks = ref([
    {
        to: RouterPaths.DASHBOARD,
        name: "Главная"
    },
    {
        to: RouterPaths.DEV_TEST,
        name: "Каталог"
    },
    {
        to: RouterPaths.DEV_TEST,
        name: "О нас"
    },
    {
        to: RouterPaths.DEV_TEST,
        name: "Услуги"
    },
    {
        to: RouterPaths.DEV_TEST,
        name: "Акции"
    },
    {
        to: RouterPaths.DEV_TEST,
        name: "Отзывы"
    },
    {
        to: RouterPaths.DEV_TEST,
        name: "Доставка"
    },
    {
        to: RouterPaths.DEV_TEST,
        name: "Контакты"
    },
])

</script>

<style src="~/assets/stylus/components/client/usernavigationbar.styl" />
