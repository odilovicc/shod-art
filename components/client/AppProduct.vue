<template>
    <RouterLink :to="{name: RouterPaths.ACTIVEPRODUCT, query: {id: product.id}}" class="hover:cursor-pointer app-activeproduct-container">
        <img :src="product?.imageUrl" class="app-activeproduct-image"/>
        <div class="app-activeproduct-text">
            <h1 class="app-activeproduct-title">{{ product?.name }}</h1>
            <p class="app-activeproduct-description">{{ product?.description }}</p>
            <p class="app-activeproduct-price">
                <span v-if="!!product?.originalPrice" class="app-activeproduct-orgprice">{{ product?.originalPrice }} so'm</span>
                <span>{{ product?.price }} so'm</span>
            </p>
            <div class="app-activeproduct-review">
                <Rating :rating="product?.rating"/>
                <span>{{ product?.reviews }} izohlar</span>
            </div>
            <div class="app-activeproduct-tags">
                <div class="app-activeproduct-tag" v-for="el in product?.tags">
                    {{ el }}
                </div>
            </div>
        </div>
    </RouterLink>
</template>
<script setup lang="ts">
import type { Product } from '~/types/helpers';
import AppRating from '../ui/AppRating.vue';
import Rating from 'primevue/rating';
import { RouterPaths } from '~/types/router';

const props = defineProps<{
    product?: Product
}>()
</script>