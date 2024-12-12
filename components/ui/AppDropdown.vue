<template>
	<div :class="{
		hasTriangle: !hasTriangle,
		hasBorder: !hasBorder	
	}">
		<button @click="toggleDropdown($event)" class="app-dropdown">
			<slot name="dropLabel" />
			<AppIcon v-if="!!hasArrow" :icon="isOpened ? 'angle-up' : 'angle-down'" />
		</button>
		<Popover ref="dropMenu" :style="{ maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth }">
			<div class="app-dropdown-content">
				<slot name="dropContent" v-bind="{ isOpened }"/>
			</div>
		</Popover>
	</div>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		hasArrow?: boolean;
		maxWidth?: string | number;
		hasTriangle?: boolean;
		hasBorder?: boolean;
		appendTo?: string
	}>(),
	{
		hasArrow: true,
	},
);
const dropMenu = ref();
const isOpened = ref(false);

const toggleDropdown = (event: Event) => {
	isOpened.value = !isOpened.value;
	dropMenu.value.toggle(event);
};

const closeDropdown = () => {
	isOpened.value = false;
	if (dropMenu.value?.hide) dropMenu.value.hide();
};

// Добавить глобальный обработчик при изменении маршрута
const router = useRouter();
router.beforeEach(() => {
	closeDropdown();
	return true;
});
</script>
