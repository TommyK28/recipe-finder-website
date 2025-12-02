<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    label: { type: String, required: true },
    options: { type: Array, required: true }, // [{ label, value }]
    modelValue: { type: [Number, String, null], default: null },
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const selectedLabel = computed(() => {
    const opt = props.options.find((o) => o.value === props.modelValue)
    return opt ? opt.label : props.label
})

const toggle = () => (isOpen.value = !isOpen.value)
const close = () => (isOpen.value = false)

const select = (value) => emit('update:modelValue', value)
const clear = () => emit('update:modelValue', null)

const onClickOutside = (e) => {
    if (!e.target.closest('.filter-dropdown')) close()
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
    <div class="filter-dropdown">
        <button
            type="button"
            class="filter-dropdown__button"
            :class="{ open: isOpen }"
            @click="toggle"
        >
            <span>{{ selectedLabel }}</span>
            <svg
                class="icon icon--arrow-down"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M10 13.81a.95.95 0 0 1-.673-.279L3.613 7.817a.951.951 0 1 1 1.346-1.346L10 11.51l5.04-5.04a.951.951 0 1 1 1.348 1.346l-5.715 5.714a.95.95 0 0 1-.673.28"
                    clip-rule="evenodd"
                />
            </svg>
        </button>

        <div v-if="isOpen" class="filter-dropdown__menu">
            <ul class="filter-dropdown__list">
                <li v-for="option in options" :key="option.value" class="filter-dropdown__item">
                    <label
                        class="filter-dropdown__radio"
                        @keydown.enter.prevent="select(option.value)"
                    >
                        <input
                            type="radio"
                            :value="option.value"
                            :checked="option.value === modelValue"
                            @change="select(option.value)"
                        />
                        <span class="filter-dropdown__control"></span>
                        <span>{{ option.label }}</span>
                    </label>
                </li>
            </ul>

            <button type="button" class="filter-dropdown__clear" @click="clear">Clear</button>
        </div>
    </div>
</template>
