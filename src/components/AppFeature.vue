<script setup>
import { computed } from 'vue'

const props = defineProps({
    title: { type: String, required: true },
    text: { type: String, required: true },
    subtext: { type: String, default: '' },
    highlight: { type: String, default: '' },
    imageAlt: { type: String, required: true },
    imageSrc: { type: String, required: true },
    imageSources: {
        type: Array,
        required: true,
    },
})

const textHtml = computed(() =>
    (props.text || '').replace(
        '{highlight}',
        `<span class="feature__content-text--highlight">${props.highlight ?? ''}</span>`,
    ),
)
</script>

<template>
    <section class="feature">
        <div class="container container__layout">
            <div class="feature__row">
                <div class="feature__content">
                    <h3 class="feature__content-title">{{ title }}</h3>
                    <p class="feature__content-text" v-html="textHtml"></p>
                    <p class="feature__content-text">
                        {{ subtext }}
                    </p>
                </div>

                <picture class="feature__img">
                    <source
                        v-for="source in imageSources"
                        :key="source.media"
                        :media="source.media"
                        :srcset="source.srcset"
                    />
                    <img :src="imageSrc" :alt="imageAlt" />
                </picture>
            </div>
        </div>
    </section>
</template>
