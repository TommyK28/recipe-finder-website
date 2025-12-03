<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import { getPublicImagePath } from '@/utils/imagePath'
import RecipeCard from '../components/AppRecipeCard.vue'
import allRecipes from '@/data/data.json'

const route = useRoute()
const recipe = ref(null)
const error = ref(false)

const fetchRecipe = () => {
    const recipeId = route.params.slug

    const foundRecipe = allRecipes.find((recipe) => String(recipe.slug) === String(recipeId))

    if (foundRecipe) {
        recipe.value = foundRecipe
        error.value = false
    } else {
        recipe.value = null
        error.value = true
    }
}
onMounted(fetchRecipe)

watch(() => route.params.slug, fetchRecipe)
</script>

<template>
    <section class="recipe-detail">
        <div class="container container__layout">
            <div v-if="error" class="error-message">
                <p>Recept s ID "{{ route.params.slug }}" nebyl nalezen.</p>
            </div>

            <div v-else-if="recipe">
                <div class="recipe-detail__row">
                    <picture class="recipe-detail__img-wrapper">
                        <source
                            media="(min-width: 960px)"
                            :srcset="getPublicImagePath(`${recipe.image.large}`)"
                        />
                        <img
                            class="recipe-detail__img"
                            :src="getPublicImagePath(`${recipe.image.small}`)"
                            alt=""
                        />
                    </picture>
                    <div class="recipe-detail__content">
                        <h3 class="recipe-detail__title">{{ recipe.title }}</h3>
                        <p class="recipe-detail__text">{{ recipe.overview }}</p>

                        <div class="recipe-detail__meta">
                            <div class="recipe-detail__meta-item">
                                <svg
                                    class="recipe-detail__meta-icon"
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
                                <div class="recipe-detail__meta-info">
                                    <span class="recipe-detail__meta-label">Servirings:</span>
                                    <span class="recipe-detail__meta-value">
                                        &nbsp;{{ recipe.servings }}
                                    </span>
                                </div>
                            </div>

                            <div class="recipe-detail__meta-item">
                                <svg
                                    class="recipe-detail__meta-icon"
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
                                <div class="recipe-detail__meta-info">
                                    <span class="recipe-detail__meta-label">Prep:</span>
                                    <span class="recipe-detail__meta-value">
                                        &nbsp;{{ recipe.prepMinutes }}
                                    </span>
                                </div>
                            </div>

                            <div class="recipe-detail__meta-item">
                                <svg
                                    class="recipe-detail__meta-icon"
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
                                <div class="recipe-detail__meta-info">
                                    <span class="recipe-detail__meta-label">Cook:</span>
                                    <span class="recipe-detail__meta-value">
                                        &nbsp;{{ recipe.cookMinutes }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="recipe-detail__lists">
                            <h5 class="recipe-detail__lists-title">Ingredients:</h5>

                            <div
                                v-for="(ingredient, index) in recipe.ingredients"
                                :key="index"
                                class="recipe-detail__list-wrapper"
                            >
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
                                <p class="recipe-detail__list-text">
                                    {{ ingredient }}
                                </p>
                            </div>
                        </div>

                        <div class="recipe-detail__lists">
                            <h5 class="recipe-detail__lists-title">Instructions:</h5>
                            <div
                                v-for="(instruction, index) in recipe.instructions"
                                :key="index"
                                class="recipe-detail__list-wrapper"
                            >
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
                                <p class="recipe-detail__list-text">
                                    {{ instruction }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else class="loading-state">Načítám recept...</div>
        </div>
    </section>

    <section class="related-products">
        <div class="container container__layout">
            <h4 class="related-products__title">More recipes</h4>

            <div class="recipe-cards">
                <RecipeCard :recipes="allRecipes.slice(0, 3)" />
            </div>
        </div>
    </section>
</template>
