<script setup>
import { useCitiesStore } from "../../../stores/cities";
import { computed, onMounted, onUpdated } from "vue";

const citiesStore = useCitiesStore();

const city = computed(() => {
    return citiesStore.getCity;
});

const categories = [
    { name: "Пицца", alias: "pizza" },
    { name: "Комбо", alias: "combo" },
    { name: "Закуски", alias: "snacks" },
    { name: "Десерты", alias: "desserts" },
    { name: "Напитки", alias: "drinks" },
    { name: "Другие товары", alias: "other" },
];

const observerFunc = () => {
    const productList = document.querySelectorAll(".product__list");
    const observer = new IntersectionObserver(itemMenuSelect, {
        threshold: 0.5,
    });

    productList.forEach((elem) => observer.observe(elem));
};

/**
 * Функция подсветки пункта
 * меню при прокрутке траницы
 * @param entries
 */
const itemMenuSelect = (entries) => {
    entries.forEach((entry) => {
        const { target, isIntersecting, intersectionRatio } = entry;

        const menuItems = document.querySelectorAll(
            `[data-link="${target.id}"]`
        );

        menuItems.forEach((item) => {
            if (isIntersecting && intersectionRatio >= 0.5) {
                item.classList.add("router-link-exact-active");
            } else {
                item.classList.remove("router-link-exact-active");
            }
        });
    });
};

onMounted(() => {
    observerFunc();
});

onUpdated(() => {
    observerFunc();
});
</script>

<template>
    <li v-for="category in categories">
        <router-link
            :data-link="category.alias"
            :to="`/${city.alias}#${category.alias}`"
        >
            {{ category.name }}
        </router-link>
    </li>
</template>
