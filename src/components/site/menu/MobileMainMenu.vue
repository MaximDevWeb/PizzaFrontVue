<script setup>
import logoImage from "../../../../src/assets/images/logo.svg";
import { useCitiesStore } from "../../../stores/cities";
import { computed, onMounted, onUpdated } from "vue";
import MenuCategory from "./MenuCategory.vue";

const citiesStore = useCitiesStore();

const city = computed(() => {
    return citiesStore.getCity;
});

const observerFunc = () => {
    const menu = document.querySelector(".mobile-main-menu");
    const observer = new IntersectionObserver(mainMenuAddScrollClass, {
        threshold: 1,
    });

    observer.observe(menu);
};

/**
 * Функция изменения внешниго вида
 * меню при прокрутке траницы
 * @param entries
 */
const mainMenuAddScrollClass = (entries) => {
    entries.forEach((entry) => {
        const { target, isIntersecting } = entry;
        if (!isIntersecting) {
            target.classList.add("mobile-main-menu_scroll");
        } else {
            target.classList.remove("mobile-main-menu_scroll");
        }
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
    <nav class="mobile-main-menu md:hidden block">
        <div class="container mobile-main-menu__wrapper">
            <ul class="mobile-main-menu__nav">
                <li class="mobile-main-menu__logo">
                    <img :src="logoImage" />
                </li>

                <menu-category />
            </ul>
        </div>
    </nav>
</template>
