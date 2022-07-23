<script setup>
import { useCitiesStore } from "../../../stores/cities";
import { computed, onMounted, onUpdated } from "vue";
import logoImage from "../../../../src/assets/images/logo.svg";
import Cart from "./MenuCart.vue";
import MenuCategory from "./MenuCategory.vue";

const citiesStore = useCitiesStore();

const city = computed(() => {
    return citiesStore.getCity;
});

const observerFunc = () => {
    const menu = document.querySelector(".main-menu");
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
            target.classList.add("main-menu_scroll");
        } else {
            target.classList.remove("main-menu_scroll");
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
    <nav class="main-menu py-3 md:block hidden">
        <div class="container overflow-hidden main-menu__wrapper">
            <ul class="main-menu__nav">
                <li>
                    <img :src="logoImage" class="main-menu__logo" />
                </li>

                <menu-category />

                <li>
                    <router-link :to="`/${city.alias}/action`"
                        >Акции</router-link
                    >
                </li>

                <li>
                    <router-link :to="`/${city.alias}/contacts`">
                        Контакты
                    </router-link>
                </li>

                <li>
                    <router-link :to="`/${city.alias}/about`">
                        О нас
                    </router-link>
                </li>

                <li>
                    <router-link :to="`/${city.alias}/works`">
                        Работа в Додо
                    </router-link>
                </li>
            </ul>

            <div class="main-menu__cart">
                <cart />
            </div>
        </div>
    </nav>
</template>
