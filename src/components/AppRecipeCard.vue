<script setup>
import AppButton from '@/components/AppBaseButton.vue'

defineProps({
    recipes: { type: Array, required: true },
})
</script>

<template>
    <div class="recipe-card" v-for="(recipe, index) in recipes" :key="index">
        <picture>
            <source media="(min-width: 576px)" :srcset="recipe.image.large" />
            <img :src="recipe.image.small" alt="" class="recipe-card__img" />
        </picture>
        <h6 class="recipe-card__title">{{ recipe.title }}</h6>
        <p class="recipe-card__text">
            {{ recipe.overview }}
        </p>

        <div class="recipe-card__meta">
            <div class="recipe-card__meta-item">
                <svg
                    class="recipe-card__meta-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M9.76 10.595c2.08 0 3.76-1.68 3.76-3.76.08-2.08-1.6-3.76-3.76-3.76-2.08 0-3.76 1.68-3.76 3.76s1.68 3.76 3.76 3.76M15.28 15.636c-.24-.88-.72-1.68-1.68-2.32-.8-.56-2.08-.96-3.84-.96-3.44 0-5.12 1.6-5.6 3.28-.16.48.08.96.48 1.2 1.44.96 3.2 1.44 5.12 1.44 1.84 0 3.6-.56 5.04-1.44.4-.24.64-.72.48-1.2"
                        clip-rule="evenodd"
                    />
                </svg>
                <div class="recipe-card__meta-info">
                    <span class="recipe-card__meta-label">Servirings:</span>
                    <span class="recipe-card__meta-value">{{ recipe.servings }}</span>
                </div>
            </div>

            <div class="recipe-card__meta-item">
                <svg
                    class="recipe-card__meta-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M12.802 13.088a.62.62 0 0 1-.859.216l-2.275-1.366a.62.62 0 0 1-.308-.534V8.463a.624.624 0 1 1 1.25 0v2.583l1.975 1.192c.3.175.4.558.216.85m-2.675-8.892a6.66 6.66 0 0 0-6.65 6.65 6.66 6.66 0 0 0 6.65 6.65 6.66 6.66 0 0 0 6.65-6.65 6.66 6.66 0 0 0-6.65-6.65M5.664 3.669a.624.624 0 1 0-.657-1.064A9.7 9.7 0 0 0 2.115 5.36a.625.625 0 0 0 1.033.705 8.4 8.4 0 0 1 2.516-2.396M18.148 5.36a9.6 9.6 0 0 0-2.9-2.764.626.626 0 0 0-.655 1.066 8.35 8.35 0 0 1 2.523 2.402.623.623 0 0 0 .868.164.625.625 0 0 0 .164-.868"
                        clip-rule="evenodd"
                    />
                </svg>
                <div class="recipe-card__meta-info">
                    <span class="recipe-card__meta-label">Prep:</span>
                    <span class="recipe-card__meta-value">{{ recipe.prepMinutes }}</span>
                </div>
            </div>

            <div class="recipe-card__meta-item">
                <svg
                    class="recipe-card__meta-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill="currentColor"
                        d="M7.222 2.097a.625.625 0 1 0-.884.884.37.37 0 0 1 0 .524 1.62 1.62 0 0 0 0 2.293.625.625 0 1 0 .883-.884.37.37 0 0 1 0-.525 1.62 1.62 0 0 0 0-2.292M15.461 4.906a.625.625 0 1 0-.883-.884 1.62 1.62 0 0 0 0 2.293.625.625 0 0 0 .883-.885.37.37 0 0 1 0-.524M3.503 5.43a.625.625 0 0 0-.884.884.37.37 0 0 1 0 .524.625.625 0 0 0 .884.885 1.62 1.62 0 0 0 0-2.293"
                    />
                    <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M10 5.218c-.955 0-1.727.774-1.727 1.728v.568c-3.156.669-5.525 3.129-5.347 6.095.013.22.195.392.416.392h13.316c.22 0 .403-.172.416-.392.178-2.966-2.192-5.426-5.347-6.095v-.568c0-.954-.774-1.728-1.727-1.728m.477 2.13v-.402a.478.478 0 1 0-.954 0v.401a9 9 0 0 1 .954 0"
                        clip-rule="evenodd"
                    />
                    <path
                        fill="currentColor"
                        d="M2.332 15.07a.9.9 0 0 1 .585-.188h14.166c.21 0 .417.053.585.188a.84.84 0 0 1 .29.488c.07.32-.01.684-.106.972a1.97 1.97 0 0 1-1.872 1.349H4.02a1.97 1.97 0 0 1-1.872-1.349c-.096-.288-.175-.651-.106-.972a.84.84 0 0 1 .29-.488"
                    />
                </svg>
                <div class="recipe-card__meta-info">
                    <span class="recipe-card__meta-label">Cook:</span>
                    <span class="recipe-card__meta-value">{{ recipe.cookMinutes }}</span>
                </div>
            </div>
        </div>

        <AppButton
            variant="secondary"
            size="full"
            :to="{ name: 'recipe-detail', params: { slug: recipe.slug } }"
            aria-label="View Recipe"
        >
            View Recipe
        </AppButton>
    </div>
</template>
