<script setup>
import Icon from "../../ui/icon/Icon.vue";
import logoImage from '../../../assets/images/logo.svg';
import {computed, onBeforeMount, ref} from "vue";
import Input from "../../ui/form/Input.vue";
import {useCitiesStore} from "../../../stores/cities";
import {useMainStore} from "../../../stores/main";
import CitySelectList from "./CitySelectList.vue";

const cities = useCitiesStore();
const main = useMainStore();

let search = ref('');

/**
 * Получаем список городов из
 * хранилища stores/cities.js
 * @type {ComputedRef<*>}
 */
const citiesCollection = computed(() => {
    return cities.getCities;
});

const closeSelect = () => {
    main.setSelect(false);
}

/**
 * Вызываем загрузчик списка
 * городов перед отрисовкой компонента
 */
onBeforeMount(() => {
    cities.loadCities();
});

</script>

<template>
    <div class="city-selector" v-if="citiesCollection">
        <div class="w-7/12 h-5/6 bg-white rounded-2xl relative p-8 flex flex-col">
            <div class="city-selector__close" @click.prevent="closeSelect">
                <icon name="close"></icon>
            </div>

            <div class="flex items-center">
                <img :src="logoImage" alt="Dodo pizza" class="city-selector__logo mr-4">

                <p class="text-4xl">
                    {{ citiesCollection.addresses_count }}
                    пиццерий в
                    {{ citiesCollection.cities_count }}
                    городах
                </p>
            </div>

            <div class="mt-4">
                <Input
                    placeholder="поиск"
                    icon="search"
                    v-model="search"
                />
            </div>

            <div class="mt-4 text-2xl">
                <router-link class="mr-4" to="/moskva">Москва</router-link>
                <router-link to="/sankt-peterburg">Санкт-Петербург</router-link>
            </div>

            <CitySelectList :list="citiesCollection.data" :search="search" />
        </div>
    </div>
</template>