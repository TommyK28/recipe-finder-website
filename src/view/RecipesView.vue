<script setup>
import { ref, computed } from 'vue'
import RecipeCard from '@/components/AppRecipeCard.vue'
import Filters from '@/components/AppFilters.vue'
import recipesData from '@/data/data.json'

const allRecipes = recipesData

const search = ref('')
const maxPrepTime = ref(null)
const maxCookTime = ref(null)

const visibleRecipes = computed(() => {
    const term = search.value.trim().toLowerCase()

    return allRecipes.filter((recipe) => {
        const name = (recipe.title || '').toLowerCase()
        const ingredients = Array.isArray(recipe.ingredients)
            ? recipe.ingredients.join(' ').toLowerCase()
            : String(recipe.ingredients || '').toLowerCase()

        // 1) textové vyhledávání – pouze když něco zadáno
        if (term) {
            const matchesText = name.includes(term) || ingredients.includes(term)

            if (!matchesText) {
                return false
            }
        }

        // 2) max prep time (prepMinutes)
        if (
            maxPrepTime.value !== null &&
            typeof recipe.prepMinutes === 'number' &&
            recipe.prepMinutes !== maxPrepTime.value
        ) {
            return false
        }

        // 3) max cook time (cookMinutes)
        if (
            maxCookTime.value !== null &&
            typeof recipe.cookMinutes === 'number' &&
            recipe.cookMinutes !== maxCookTime.value
        ) {
            return false
        }

        return true
    })
})
</script>

<template>
    <section class="recipes">
        <div class="container container__layout">
            <div class="recipes__hero">
                <h3 class="recipes__title">Explore our simple, healthy recipes</h3>
                <p class="recipes__text">
                    Discover eight quick, whole-food dishes that fit real-life schedules and taste
                    amazing. Use the search bar to find a recipe by name or ingredient, or simply
                    scroll the list and let something delicious catch your eye.
                </p>
            </div>

            <div class="filters">
                <Filters
                    v-model:search="search"
                    v-model:maxPrepTime="maxPrepTime"
                    v-model:maxCookTime="maxCookTime"
                />
            </div>

            <div class="recipe-cards">
                <RecipeCard :recipes="visibleRecipes" />
            </div>
        </div>
    </section>
</template>
