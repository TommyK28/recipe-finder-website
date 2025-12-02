<script setup>
import CtaSection from '@/components/AppCtaSection.vue'
import BeyondThePlate from '@/components/AppBeyondThePlate.vue'
import ContentBlock from '@/components/AppContentBlock.vue'

// Text for content block
const whyWeExistFeatures = [
    {
        headline: 'Cut through the noise.',
        text: 'The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of foot-proof recipes...',
    },
    {
        headline: 'Empower home kitchens.',
        text: 'When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour...',
    },
    {
        headline: 'Make healthy look good.',
        text: 'High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.',
    },
]

const foodPhilosophyFeatures = [
    {
        headline: 'Whole ingredients first.',
        text: 'Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.',
    },
    {
        headline: 'Flavor without compromise.',
        text: 'Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.',
    },
    {
        headline: 'Respect for time.',
        text: 'Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.',
    },
    {
        headline: 'Sustainable choices.',
        text: 'Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.',
    },
]
</script>

<template>
    <section class="about-hero">
        <div class="container container__layout">
            <div class="about-hero__row">
                <div class="about-hero__content">
                    <p class="about-hero__eyebrow">Our mission</p>
                    <h3 class="about-hero__title">
                        Help more people cook nourishing meals, more often.
                    </h3>
                    <p class="about-hero__text">
                        Healthy Recipe Finder was created to prove that healthy eating can be
                        convenient, affordable, and genuinely delicious.
                    </p>
                    <p class="about-hero__subtext">
                        We showcase quick, whole-food dishes that anyone can master—no fancy
                        equipment, no ultra-processed shortcuts—just honest ingredients and
                        straightforward steps.
                    </p>
                </div>

                <picture>
                    <source media="(min-width: 960px)" srcset="/images/about-hero-des.png" />
                    <source media="(min-width: 576px)" srcset="/images/about-hero-tab.png" />
                    <img class="about-hero__img" src="/images/about-hero-mob.png" alt="" />
                </picture>
            </div>
        </div>
    </section>

    <ContentBlock title="Why we exist" :features="whyWeExistFeatures" />
    <ContentBlock title="Our food philosophy" :features="foodPhilosophyFeatures" />

    <BeyondThePlate />

    <CtaSection />
</template>
