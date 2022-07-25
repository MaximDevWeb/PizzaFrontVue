<script setup>
import Header from "../../components/site/header/Header.vue";
import { useRoute } from "vue-router";
import { computed, onBeforeMount, onMounted, watchEffect } from "vue";
import { useCitiesStore } from "../../stores/cities";
import { useMainStore } from "../../stores/main";
import CitySelect from "../../components/site/city/CitySelect.vue";
import MenuMain from "../../components/site/menu/MenuMain.vue";
import MobileMainMenu from "../../components/site/menu/MobileMainMenu.vue";
import SecretBuyer from "../../components/site/footer/SecretBuyer.vue";
import FooterMain from "../../components/site/footer/FooterMain.vue";

const route = useRoute();
const mainStore = useMainStore();
const citiesStore = useCitiesStore();

/**
 * Определяем переменную city
 * для глобального условия отрисовки
 * @type {ComputedRef<*>}
 */
const city = computed(() => {
    return citiesStore.getCity;
});

watchEffect(async () => {
    /**
     * Наблюдаем за выбранным городом
     * и обновляем данные при его изменении
     */
    const city = route.params.city;
    citiesStore.loadCity(city);

    /**
     * Скрываем окно выбора города
     * при изменение города
     */
    mainStore.setSelect(false);
});

/**
 * Вызываем загрузчик основных
 * данных с сайта
 */
onBeforeMount(() => {
    mainStore.loadData();
});
</script>

<template>
    <template v-if="city">
        <transition>
            <city-select v-show="mainStore.getSelect" />
        </transition>

        <header>
            <Header />
        </header>

        <menu-main />

        <mobile-main-menu />

        <main class="container content">
            <router-view />
        </main>

        <footer>
            <secret-buyer />
            <footer-main />
        </footer>
    </template>
</template>
