<script setup>
import { computed } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'text',
    },
    size: {
        type: String,
        default: 'medium',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    to: {
        type: [String, Object],
        default: null,
    },
    href: {
        type: String,
        default: null,
    },
})

const elementType = computed(() => {
    if (props.to) {
        return 'RouterLink'
    }

    if (props.href) {
        return 'a'
    }

    return 'button'
})
</script>

<template>
    <component
        :is="elementType"
        :class="['button', `button-${variant}`, `button--${size}`]"
        :disabled="elementType === 'button' ? disabled : null"
        :to="to"
        :href="href"
        @click="$emit('click')"
    >
        <slot>Default button text</slot>
    </component>
</template>
