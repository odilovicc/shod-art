<template>
    <PrimeRating :value="rating" @update:value="updateRating" :readonly="readonly"/>
</template>

<script setup lang="ts">
import PrimeRating from 'primevue/rating'

const props = defineProps<{
    readonly?: boolean;
    rating: number | undefined
}>()

const emit = defineEmits<{
    (e: 'update:rating', value: number): void
}>()

function updateRating(value: number) {
    emit('update:rating', value)
}
</script>
