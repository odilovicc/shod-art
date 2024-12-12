<template>
  <UserNavigationBar/>
  <slot />
</template>
<script setup lang="ts">

const {loadCartFromLocalStorage} = useProductStore()
const isClient = typeof window !== "undefined"

onMounted(() => {
  if(isClient) {
    loadCartFromLocalStorage()
  }
})
</script>