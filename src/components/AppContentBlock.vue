<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    features: {
        type: Array,
        required: true,
        default: () => [],

        validator: (value) =>
            value.every(
                (item) => typeof item.headline === 'string' && typeof item.text === 'string',
            ),
    },
})
</script>

<template>
    <section class="content-block">
        <div class="container container__layout">
            <div class="content-block__row">
                <h3 class="content-block__title">{{ title }}</h3>

                <div class="content-block__items">
                    <div
                        class="content-block__item"
                        v-for="(feature, index) in features"
                        :key="index"
                    >
                        <div class="content-block__item-title-wrapper">
                            <svg
                                class="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="16"
                                fill="none"
                                viewBox="0 0 24 16"
                            >
                                <path
                                    fill="currentColor"
                                    d="m6.937 9.587-4.933.436A2.014 2.014 0 0 1 0 8c0-1.117.897-2.023 2.004-2.023l4.933.436c.868 0 1.572.71 1.572 1.587a1.58 1.58 0 0 1-1.572 1.588"
                                    opacity=".4"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23.5 9.507c-.078.078-.366.407-.636.68-1.578 1.71-5.699 4.509-7.855 5.365-.327.137-1.155.427-1.598.448q-.635 0-1.213-.292a2.5 2.5 0 0 1-1.078-1.206c-.135-.35-.348-1.4-.348-1.419-.21-1.147-.325-3.012-.325-5.074 0-1.962.114-3.751.288-4.917.018-.021.23-1.324.462-1.77A2.42 2.42 0 0 1 13.334 0h.077c.577.02 1.79.526 1.79.543 2.041.857 6.064 3.52 7.682 5.29 0 0 .457.454.654.738.309.408.463.913.463 1.419 0 .564-.173 1.088-.5 1.517"
                                />
                            </svg>
                            <h5 class="content-block__item-title">{{ feature.headline }}</h5>
                        </div>
                        <p class="content-block__item-text">
                            {{ feature.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
