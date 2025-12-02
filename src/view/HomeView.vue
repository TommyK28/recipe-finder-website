<script setup>
import AppButton from '@/components/AppBaseButton.vue'
import BenefitsView from '@/components/AppBenefits.vue'
import Feature from '@/components/AppFeature.vue'
import CtaSection from '@/components/AppCtaSection.vue'
</script>

<template>
    <section class="hero">
        <div class="container container__layout">
            <svg
                class="icon icon--hero-shape"
                xmlns="http://www.w3.org/2000/svg"
                width="1440"
                height="950"
                fill="none"
                viewBox="0 0 1440 950"
            >
                <path
                    fill="currentColor"
                    d="M-132.333 926.888c-33.909-110.403-67.008-229.564-38.542-345.161C-135.855 439.401-21.87 362.47 122.45 368.795c212.829 9.351 383.197 173.418 582.749 231.651 414.671 121.039 698.261-201.37 783.701-576.93 5.26-23.105-30.21-33.775-35.51-10.489-53.05 233.245-174.62 474.699-416.85 555.018-256.308 84.971-473.205-77.176-694.696-177.899-136.599-62.132-316.78-96.086-443.616 7.114-163.319 132.877-120.221 364.579-66.462 538.731 7.027 22.712 42.909 13.699 35.901-9.103"
                    opacity=".4"
                />
            </svg>
            <div class="hero__content">
                <h2 class="hero__title">
                    <span class="hero__title--highlight">Healthy</span> meals, zero fuss
                </h2>
                <p class="hero__text">
                    Discover eight quick, whole-food recipes that you can cook tonight—no processed
                    junk, no guesswork.
                </p>

                <AppButton
                    variant="primary"
                    size="medium"
                    :to="{ name: 'recipes', params: {} }"
                    aria-label="View Recipes"
                >
                    Start exploring
                </AppButton>
            </div>

            <picture>
                <source media="(min-width: 960px)" srcset="/images/hp-bg-img-des.png" />
                <source media="(min-width: 576px)" srcset="/images/hp-bg-img-tab.png" />
                <img class="hero__img" src="/images/hp-bg-img-mob.png" alt="" />
            </picture>
        </div>
    </section>

    <BenefitsView />

    <Feature
        title="Built for real life"
        text="Cooking shouldn’t be complicated. These recipes come in under {highlight} of active time, fit busy schedules, and taste good enough to repeat."
        highlight="30 minutes"
        subtext="Whether you’re new to the kitchen or just need fresh ideas, we’ve got you
                        covered."
        :imageSources="[
            { media: '(min-width: 960px)', srcset: '/images/preparing-food-des.png' },
            { media: '(min-width: 576px)', srcset: '/images/preparing-food-tab.png' },
        ]"
        imageSrc="/images/preparing-food-mob.png"
        imageAlt="Chef preparing food"
    />

    <CtaSection />
</template>
