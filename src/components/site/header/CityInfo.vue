<script setup>
import Rating from "../../ui/rating/Rating.vue";
import {useCitiesStore} from "../../../stores/cities";
import {useRoute} from "vue-router";
import {computed} from "vue";
import lodash from "lodash";

const cities = useCitiesStore();
const route = useRoute();

const city = computed(() => {
    return cities.getByAlias(route.params.city);
});

const cityRating = computed(() => {
    let stars = [];
    let timer = [];

    city.value.addresses.forEach(item => {
        stars.push(item.rating.stars);
        timer.push(item.rating.timer);
    })

    return {
        stars: lodash.ceil(lodash.mean(stars), 2),
        timer:  lodash.ceil(lodash.mean(timer)),
    }
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