<script setup>
import Header from "../../components/site/header/Header.vue";
import PreloaderLayouts from "./PreloaderLayouts.vue";
import { useRoute } from "vue-router";
import { computed, watchEffect } from "vue";
import { useCitiesStore } from "../../stores/cities";
import { useMainStore } from "../../stores/main";
import CitySelect from "../../components/site/city/CitySelect.vue";
import MenuMain from "../../components/site/menu/MenuMain.vue";
import MobileMainMenu from "../../components/site/menu/MobileMainMenu.vue";

const route = useRoute();
const main = useMainStore();
const cities = useCitiesStore();

/**
 * Определяем переменную city
 * для глобального условия отрисовки
 * @type {ComputedRef<*>}
 */
const city = computed(() => {
    return cities.getCity;
});

watchEffect(async () => {
    /**
     * Наблюдаем за выбранным городом
     * и обновляем данные приего изменении
     */
    const city = route.params.city;
    cities.loadCity(city);

    /**
     * Скрываем окно выбора города
     * при изменение города
     */
    main.setSelect(false);
});
</script>

<template>
    <template v-if="city">
        <transition>
            <city-select v-show="main.getSelect" />
        </transition>

        <header>
            <Header />
        </header>

        <menu-main />

        <mobile-main-menu />

        <main class="container content">
            <router-view />
            <preloader-layouts v-if="main.getLoad" />
        </main>

        <footer>
            <p>Copyright 2022</p>
        </footer>
    </template>
</template>
