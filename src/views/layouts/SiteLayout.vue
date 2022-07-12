<script setup>
import Header from "../../components/site/header/Header.vue";
import PreloaderLayouts from "./PreloaderLayouts.vue";
import {useRoute} from "vue-router";
import {watchEffect} from "vue";
import {useCitiesStore} from "../../stores/cities";
import {useMainStore} from "../../stores/main"
import CitySelect from "../../components/site/city/CitySelect.vue";

const route = useRoute();
const main = useMainStore();
const cities = useCitiesStore();

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
})
</script>

<template>
    <transition>
        <city-select v-show="main.getSelect" />
    </transition>

    <header>
        <Header />
    </header>

    <main class="container content">
        <router-view />
        <preloader-layouts v-if="main.getLoad"/>
    </main>

    <footer>
        <p>Copyright 2022</p>
    </footer>
</template>