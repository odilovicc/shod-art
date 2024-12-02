<template>
    <div class="app-product-container">
        <app-filters @provide-active-filters="handleFilters" v-if="!isMobile"/>
        <div class="app-product-content">
            <app-products-header/>
            <div class="flex flex-wrap gap-5">
                <AppProduct :product="product" v-for="product in products" :key="product.id"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useIsMobile } from '~/composable/helpers';
import type { IAnyObject } from '~/types/helpers';
import AppProduct from './AppProduct.vue';

const activeFilters = ref()
const {isMobile} = useIsMobile()
const {products} = useProductStore()

function handleFilters(filters: IAnyObject[]) {
    activeFilters.value = filters
}
</script>
<style src="~/assets/stylus/components/client/appproductlist.styl"/>