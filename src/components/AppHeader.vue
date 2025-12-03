<script setup>
import { ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import AppButton from '@/components/AppBaseButton.vue'

const isNavOpen = ref(false)
const route = useRoute()
const navToggleLabel = ref('Open nav menu')

const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
    navToggleLabel.value = isNavOpen.value ? 'Close nav menu' : 'Open nav menu'
}

watch(
    () => route.path,
    () => {
        isNavOpen.value = false
        navToggleLabel.value = 'Open nav menu'
    },
)
</script>

<template>
    <header class="header">
        <h1 class="header__logo">
            <RouterLink to="/">
                <img src="/images/logo.svg" alt="Healthy recipe finder logo" />
            </RouterLink>
        </h1>

        <div
            class="header__nav-wrapper"
            :class="{ 'header__nav-wrapper--open': isNavOpen }"
            id="header-nav"
        >
            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <RouterLink
                            to="/"
                            class="header__nav-link"
                            :class="{ 'header__nav-link--active': $route.path === '/' }"
                            >Home</RouterLink
                        >
                    </li>
                    <li class="header__nav-item">
                        <RouterLink
                            to="/about"
                            class="header__nav-link"
                            :class="{ 'header__nav-link--active': $route.path === '/about' }"
                            >About</RouterLink
                        >
                    </li>
                    <li class="header__nav-item">
                        <RouterLink
                            to="/recipes"
                            class="header__nav-link"
                            :class="{ 'header__nav-link--active': $route.path === '/recipes' }"
                            >Recipes</RouterLink
                        >
                    </li>
                </ul>
            </nav>

            <div class="header__action">
                <AppButton
                    variant="primary"
                    size="medium"
                    :to="{ name: 'recipes', params: {} }"
                    aria-label="View Recipes"
                >
                    Browse recipes
                </AppButton>
            </div>
        </div>

        <button
            class="header__nav-toggle"
            type="button"
            aria-controls="header-nav"
            :aria-label="navToggleLabel"
            :aria-expanded="isNavOpen.toString()"
            @click="toggleNav"
        >
            <span class="header__nav-icon" aria-hidden="true"></span>
        </button>
    </header>
</template>
