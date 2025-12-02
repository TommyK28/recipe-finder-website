import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/view/HomeView.vue'
import AboutView from '@/view/AboutView.vue'
import RecipesView from '@/view/RecipesView.vue'
import RecipeView from '@/view/RecipeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/recipes',
            name: 'recipes',
            component: RecipesView,
        },
        {
            path: '/recipe/:slug',
            name: 'recipe-detail',
            component: RecipeView,
        },
    ],
})

export default router
