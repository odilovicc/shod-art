<template>
    <div class="navbar-container">
        <div class="navbar-navigation-container">
            <img src="/icons/hamburger.svg" class="navbar-navigation-hamburger" @click="toggleHamburger" />
            <div class="navbar-navigation-logo">
                <h1>SHOD-ART</h1>
            </div>
        </div>
        <div class="navbar-additional-container" v-if="!isMobile">
            <OverlayBadge>
                <AppButton label="" :image-icon="`/icons/${button.icon}.svg`" type="stock"
                    class="navbar-additional-button" v-for="button in additionalPartButtons" :key="button.icon" />
            </OverlayBadge>
        </div>
    </div>
    <div class="navbar-navigation-footer" v-if="isMobile">
        <AppButton prefix-icon="filter" :class="{
            'navbar-navigation-footer-button': true,
            'has-active-filter': typeof activeFilters !== 'undefined' && activeFilters.length > 0
        }" type="custom" label="Filterlar" @click="toggleFiltersMenu" />
        <AppButton prefix-icon="shopping-bag" :class="{
            'navbar-navigation-footer-button': true,
            'has-active-filter': typeof activeFilters !== 'undefined' && activeFilters.length > 0
        }" type="custom" label="Savatingiz" @click="toggleFiltersMenu" />
    </div>

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
const activeFilters = ref()
const { isMobile } = useIsMobile()

const toggleHamburger = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
};
const toggleFiltersMenu = () => {
    isFiltersVisible.value = !isFiltersVisible.value;
};
const handleFilters = (filters: IAnyObject[]) => {
    activeFilters.value = filters
}

const additionalPartButtons = ref([
    { icon: "search-normal" },
    { icon: "heart" },
    { icon: "user" },
    { icon: "bag-2" }
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
