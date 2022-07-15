<script setup>
import Rating from "../../ui/rating/Rating.vue";
import {useCitiesStore} from "../../../stores/cities";
import {computed} from "vue";
import {useMainStore} from "../../../stores/main";

const cities = useCitiesStore();
const main = useMainStore();

const city = computed(() => {
    return cities.getCity;
});

const cityRating = computed(() => {
    return cities.getRating;
})

const showSelect = () => {
    main.setSelect(true);
}
</script>

<template>
    <div class="ml-10">
        <p class="text-lg leading-tight">
            Доставка пиццы
            <a href="#" class="link_orange" @click.prevent="showSelect">
                {{ city.name }}
            </a>
        </p>
        <rating :rating="cityRating" />
    </div>
</template>