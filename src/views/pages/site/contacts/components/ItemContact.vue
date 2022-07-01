<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import Rating from "../../../../../components/ui/rating/Rating.vue";
import Icon from "../../../../../components/ui/icon/Icon.vue";
import lodash from "lodash";

const route = useRoute();

const props = defineProps({
    address: Object
});

const link = computed(() => {
    const currentLink = route.path;
    return `${ currentLink }/${ props.address.alias }`;
});

const rating = computed(() => {
    const stars = [];
    const timer = [];

    props.address.ratings.forEach(rating => {
        stars.push(rating.stars);
        timer.push(rating.timer);
    })

    return {
        stars: lodash.ceil(lodash.mean(stars), 2),
        timer: lodash.ceil(lodash.mean(timer))
    }
})

</script>

<template>
    <div class="contact__item">
        <router-link :to="link" class="text-xl font-semibold flex justify-between">
            {{ address.title }}
            <icon class="md:hidden block h-6 w-6" name="arrow-right" />
        </router-link>

        <rating class="md:mt-0 mt-4 md:text-base text-lg" :rating="rating" />

        <p class="mt-4" v-if="address.metro">
            <span class="text-red-500 font-bold">
                М
            </span>
            {{ address.metro }}
        </p>

        <p class="mt-4">{{ address.address }}</p>

        <p class="mt-4 text-sm">Доставка и самовывоз</p>
        <p>{{ address.time.delivery.from }} — {{ address.time.delivery.to }}</p>

        <p class="mt-3 text-sm">Ресторан</p>
        <p>{{ address.time.restaurant.from }} — {{ address.time.restaurant.to }}</p>
    </div>
</template>