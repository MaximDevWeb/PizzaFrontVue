<script setup>
import Header from "../../components/site/header/Header.vue";
import PreloaderLayouts from "./PreloaderLayouts.vue";
import {useMainStore} from "../../stores/main";
import {useRoute} from "vue-router";
import {onBeforeMount} from "vue";
import {useCitiesStore} from "../../stores/cities";

const route = useRoute();
const main = useMainStore();
const cities = useCitiesStore();

onBeforeMount(() => {
    cities.loadCity(route.params.city);
})

</script>

<template>
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