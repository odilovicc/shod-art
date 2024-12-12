<template>
  <PrimeButton
    :class="[`app-button-${type} p-button`, {'app-button-hasBadge': !!badge}]"
    :rounded="circle"
    :disabled="disabled"
    v-if="badge"
  >
    <template #default>
      <app-icon
        v-if="prefixIcon"
        :icon="prefixIcon"
        :class="{ 'p-button-icon': true, 'p-button-icon-left': !!label }"
      />
      <app-icon
        v-if="loading"
        icon="spin pi-spinner"
        :class="{ 'p-button-icon': true, 'p-button-icon-left': !!label }"
      />
      <img
        v-if="imageIcon"
        :src="imageIcon"
        :class="{ 'p-button-icon': true, 'p-button-icon-left': !!label }"
        alt=""
      />
      <span v-if="!!label" class="p-button-label">{{ label }}</span>
      <app-icon
        v-if="!!iconRight"
        :icon="iconRight"
        :class="{
          'p-button-icon': true,
          'p-button-icon-right': !!label,
        }"
      />
      <span class="app-button-badge">{{badge}}</span>
    </template>
  </PrimeButton>
  <PrimeButton
    :class="[`app-button-${type} p-button`]"
    :rounded="circle"
    :disabled="disabled"
    v-else
  >
    <template #default>
      <app-icon
        v-if="prefixIcon"
        :icon="prefixIcon"
        :class="{ 'p-button-icon': true, 'p-button-icon-left': !!label }"
      />
      <app-icon
        v-if="loading"
        icon="spin pi-spinner"
        :class="{ 'p-button-icon': true, 'p-button-icon-left': !!label }"
      />
      <img
        v-if="imageIcon"
        :src="imageIcon"
        :class="{ 'p-button-icon': true, 'p-button-icon-left': !!label }"
        alt=""
      />
      <span v-if="!!label" class="p-button-label">{{ label }}</span>
      <app-icon
        v-if="!!iconRight"
        :icon="iconRight"
        :class="{
          'p-button-icon': true,
          'p-button-icon-right': !!label,
        }"
      />
    </template>
  </PrimeButton>
</template>
<script setup lang="ts">
const PrimeButton = defineAsyncComponent(() => import("primevue/button"));
type ButtonType = "primary" | "info" | "success" | "warning" | "danger" | "stock" | "custom";

const props = withDefaults(
  defineProps<{
    label?: string;
    iconRight?: string;
    prefixIcon?: string;
    imageIcon?: string;
    type?: ButtonType;
    circle?: boolean;
    loading?: boolean
    disabled?: boolean
    badge?: string
  }>(),
  {
    type: "primary",
  }
);
</script>
<style src="~/assets/stylus/components/ui/button.styl" />
