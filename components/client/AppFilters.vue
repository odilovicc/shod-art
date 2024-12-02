<template>
    <div class="app-product-filters-container">
        <h1 class="app-product-filters-title">Filtrlar</h1>
        <div class="app-product-filters-active">
            <div class="app-product-filters-active-filter" v-for="(el, index) in activeFilters" v-if="!!activeFilters">
                <AppIcon class="hover:cursor-pointer" @click="removeActiveFilter(el)" icon="times"/>
                <span>{{ el }}</span>
            </div>
        </div>
        <PrimeAccordion value="1424365457687">
            <PrimeAccordionPanel :value="idx" v-for="(el, idx) in filterOptions">
                <PrimeAccordionHeader>{{ el.header }}</PrimeAccordionHeader>
                <PrimeAccordionContent>
                    <div class="app-product-filters-filter" v-for="fl in el.items">
                        <PrimeCheckbox 
                            :input-id="fl.value"
                            :value="fl.value"
                            v-model="activeFilters"
                        />
                        <label :for="fl.value">{{ fl.label }}</label>
                    </div>
                </PrimeAccordionContent>
            </PrimeAccordionPanel>
        </PrimeAccordion>
    </div>
</template>
<script setup lang="ts">
import PrimeAccordion from 'primevue/accordion'
import PrimeAccordionPanel from 'primevue/accordionpanel'
import PrimeAccordionHeader from 'primevue/accordionheader'
import PrimeAccordionContent from 'primevue/accordioncontent'
import PrimeCheckbox from 'primevue/checkbox'
import type { IAnyObject } from '~/types/helpers'

const activeFilters = ref([])
const emits = defineEmits(["provideActiveFilters"])

const filterOptions = ref([
    {
        header: "Filtr 1",
        items: [
            {
                label: "Filtr filtr 1",
                value: "filtr1"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr2"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr3"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr4"
            },
        ]
    },
    {
        header: "Filtr 1",
        items: [
            {
                label: "Filtr filtr 1",
                value: "filtr1"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr2"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr3"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr4"
            },
        ]
    },
    {
        header: "Filtr 1",
        items: [
            {
                label: "Filtr filtr 1",
                value: "filtr1"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr2"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr3"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr4"
            },
        ]
    },
    {
        header: "Filtr 1",
        items: [
            {
                label: "Filtr filtr 1",
                value: "filtr1"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr2"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr3"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr4"
            },
        ]
    },
    {
        header: "Filtr 1",
        items: [
            {
                label: "Filtr filtr 1",
                value: "filtr1"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr2"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr3"
            },
            {
                label: "Filtr filtr 1",
                value: "filtr4"
            },
        ]
    },
])

function removeActiveFilter(el: never) {
    const index = activeFilters.value.indexOf(el); // Находим индекс элемента
    if (index !== -1) {
        activeFilters.value.splice(index, 1); // Удаляем элемент из массива
    }
}

watch(activeFilters, (value) => {
    emits("provideActiveFilters", value)
})
</script>