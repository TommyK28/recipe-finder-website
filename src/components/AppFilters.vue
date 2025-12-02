<script setup>
import { defineProps, defineEmits } from 'vue'
import SearchBar from '@/components/AppSearch.vue'
import FilterDropdown from '@/components/AppFilterDropdown.vue'

const props = defineProps({
    search: { type: String, default: '' },
    maxPrepTime: { type: Number, default: null },
    maxCookTime: { type: Number, default: null },
})

const emit = defineEmits(['update:search', 'update:maxPrepTime', 'update:maxCookTime'])

const prepOptions = [
    { label: '0 minutes', value: 0 },
    { label: '5 minutes', value: 5 },
    { label: '10 minutes', value: 10 },
]

const cookOptions = [
    { label: '0', value: 0 },
    { label: '5', value: 5 },
    { label: '10', value: 10 },
    { label: '15', value: 15 },
    { label: '20', value: 20 },
]
</script>

<template>
    <div class="filters__sort">
        <FilterDropdown
            label="Max Prep Time"
            :options="prepOptions"
            :model-value="maxPrepTime"
            @update:model-value="emit('update:maxPrepTime', $event)"
        />

        <FilterDropdown
            label="Max Cook Time"
            :options="cookOptions"
            :model-value="maxCookTime"
            @update:model-value="emit('update:maxCookTime', $event)"
        />
    </div>

    <SearchBar :model-value="search" @update:model-value="emit('update:search', $event)" />
</template>
