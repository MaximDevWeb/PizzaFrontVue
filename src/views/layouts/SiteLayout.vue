<script setup>
import Header from "../../components/site/header/Header.vue";
import PreloaderLayouts from "./PreloaderLayouts.vue";
import {useMainStore} from "../../stores/main";
import {useRoute} from "vue-router";
import {onBeforeMount, watch, watchEffect} from "vue";
import {useCitiesStore} from "../../stores/cities";
import CitySelect from "../../components/site/city/CitySelect.vue";

const route = useRoute();
const main = useMainStore();
const cities = useCitiesStore();

watchEffect(async () => {
    const city = route.params.city;
    cities.loadCity(city);
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