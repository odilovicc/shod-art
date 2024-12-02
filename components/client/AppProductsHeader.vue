<template>
    <div class="app-product-header-container">
        <div class="app-product-header-title">{{products.length}} mahsulotlar</div>
    </div>
</template>
<script setup lang="ts">

const {products} = useProductStore()
</script>