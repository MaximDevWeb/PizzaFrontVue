<script setup>
import Rating from "../../ui/rating/Rating.vue";
import { useCitiesStore } from "../../../stores/cities";
import { computed } from "vue";
import { useMainStore } from "../../../stores/main";

const citiesStore = useCitiesStore();
const mainStore = useMainStore();

const city = computed(() => {
    return citiesStore.getCity;
});

const cityRating = computed(() => {
    return citiesStore.getRating;
});

const showSelect = () => {
    mainStore.setSelect(true);
};
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
