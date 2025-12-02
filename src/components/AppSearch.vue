<script setup>
const props = defineProps({
    modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <form class="search" @submit.prevent>
        <label class="search__field">
            <span class="visually-hidden">Search recipes</span>

            <svg
                class="icon search__icon"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
            >
                <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1.667 7.532a5.872 5.872 0 0 1 5.865-5.865 5.872 5.872 0 0 1 5.866 5.865 5.873 5.873 0 0 1-5.866 5.866 5.873 5.873 0 0 1-5.865-5.866Zm15.412 8.715-3.832-3.822a7.492 7.492 0 0 0 1.817-4.893C15.064 3.379 11.685 0 7.532 0 3.38 0 0 3.38 0 7.532c0 4.153 3.38 7.532 7.532 7.532a7.477 7.477 0 0 0 4.494-1.502l3.877 3.865 1.176-1.18Z"
                    clip-rule="evenodd"
                />
            </svg>

            <input
                class="search__input"
                type="search"
                :value="modelValue"
                @input="onInput"
                placeholder="Search by name or ingredient…"
            />
        </label>
    </form>
</template>
