<script setup>
import Rating from "../../ui/rating/Rating.vue";
import {useCitiesStore} from "../../../stores/cities";
import {computed} from "vue";

const cities = useCitiesStore();

const city = computed(() => {
    return cities.getCity;
});

const cityRating = computed(() => {
    return cities.getRating;
})
</script>

<template>
    <div v-if="city" class="ml-10">
        <p class="text-lg leading-tight">
            Доставка пиццы
            <router-link class="link_orange" to="/select-city">
                {{ city.name }}
            </router-link>
        </p>
        <rating :rating="cityRating" />
    </div>
</template>