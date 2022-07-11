<script setup>
import Icon from "../../ui/icon/Icon.vue";
import logoImage from '../../../assets/images/logo.svg';
import {computed, onBeforeMount, reactive} from "vue";
import Input from "../../ui/form/Input.vue";
import {useCitiesStore} from "../../../stores/cities";
import {useMainStore} from "../../../stores/main";

const cities = useCitiesStore();
const main = useMainStore();

const state = reactive({
    search: ''
});

const citiesCollection = computed(() => {
    return cities.getCities;
});

const citiesList = computed(() => {
    return cities.getAbcList(state.search);
});

const closeSelect = () => {
    main.setSelect(false);
}

onBeforeMount(() => {
    cities.loadCities();
});

</script>

<template>
    <div class="city-selector" v-if="citiesCollection">
        <div class="w-7/12 h-5/6 bg-white rounded-2xl relative p-8">
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
                    v-model="state.search"
                />
            </div>

            <div class="mt-4 text-2xl">
                <router-link class="mr-4" to="/moskva/contacts">Москва</router-link>
                <router-link to="/sankt-peterburg/contacts">Санкт-Петербург</router-link>
            </div>

            <div class="mt-4 city-selector__wrapper">
                <div class="city-selector__list" v-if="citiesList.length">
                    <div class="city-selector__item" v-for="item in citiesList">
                        <div class="city-selector__symbol">
                            {{ item.symbol }}
                        </div>
                        <div class="city-selector__items">
                            <router-link :to="'/' + city.alias" v-for="city in item.cities">
                                {{ city.name }}
                            </router-link>
                        </div>
                    </div>
                </div>

                <div v-else class="text-xl text-gray-500">
                    Пиццерия в этом городе еще не открылась
                </div>
            </div>
        </div>
    </div>
</template>