<script setup>
import {useCitiesStore} from "../../../stores/cities";
import {computed, onMounted, onUpdated} from "vue";
import logoImage from '../../../../src/assets/images/logo.svg';
import Cart from "./MenuCart.vue";

const citiesStore = useCitiesStore();

const city = computed(() => {
    return citiesStore.getCity;
});

/**
 * Функция изменения внешниго вида
 * меню при прокрутке траницы
 * @param entries
 */
const mainMenuAddScrollClass = entries => {
    entries.forEach(entry => {
        const {target, isIntersecting} = entry;
        if (!isIntersecting) {
            target.classList.add('main-menu_scroll');
        } else {
            target.classList.remove('main-menu_scroll');
        }
    });
}

/**
 * Функция изменения внешнего вида
 * пунктов меню при прокрутке страницы
 * @param entries
 */
const mainMenuItemAddActiveClass = entries => {
    entries.forEach(entry => {
        const {target, isIntersecting, intersectionRatio} = entry;
        const menuItem = document.querySelector(`[data-link="${ target.id }"]`);

        if (isIntersecting && intersectionRatio >= 0.5) {
            menuItem.classList.add('router-link-exact-active');
        } else {
            menuItem.classList.remove('router-link-exact-active');
        }
    });
}

const observerFunc = () => {
    /**
     * Обработчик прокрутки страница
     * для самого меню
     */
    const menu = document.querySelector('.main-menu');
    const observerScroll = new IntersectionObserver(mainMenuAddScrollClass, { threshold: 1 });
    observerScroll.observe(menu);

    /**
     * Обработчик прокрутки страниц
     * для пунктов меню
     */
    const productList = document.querySelectorAll('.product__list');
    const observerProduct = new IntersectionObserver(mainMenuItemAddActiveClass, { threshold: 0.5 });
    productList.forEach(elem => observerProduct.observe(elem));
}

onMounted(() => {
    observerFunc();
});

onUpdated(() => {
    observerFunc();
})

</script>

<template>
    <nav class="main-menu py-3 md:block hidden">
        <div class="container overflow-hidden main-menu__wrapper">
            <ul class="main-menu__nav">
                <li>
                    <router-link :to="`/${ city.alias }`">
                        <img :src="logoImage" class="main-menu__logo">
                    </router-link>
                </li>
                <li>
                    <router-link data-link="pizza" :to="`/${ city.alias }`">
                        Пицца
                    </router-link>
                </li>
                <li>
                    <router-link data-link="combo" :to="`/${ city.alias }#combo`">
                        Комбо
                    </router-link>
                </li>
                <li>
                    <router-link data-link="snacks" :to="`/${ city.alias }#snacks`">
                        Закуски
                    </router-link>
                </li>
                <li>
                    <router-link data-link="desserts" :to="`/${ city.alias }#desserts`">
                        Десерты
                    </router-link>
                </li>
                <li>
                    <router-link data-link="drinks" :to="`/${ city.alias }#drinks`">
                        Напитки
                    </router-link>
                </li>
                <li>
                    <router-link data-link="other" :to="`/${ city.alias }#other`">
                        Другие товары
                    </router-link>
                </li>
                <li>
                    <router-link :to="`/${ city.alias }/action`">Акции</router-link>
                </li>
                <li>
                    <router-link :to="`/${ city.alias }/contacts`">
                        Контакты
                    </router-link>
                </li>
                <li>
                    <router-link :to="`/${ city.alias }/about`">
                        О нас
                    </router-link>
                </li>
                <li>
                    <router-link :to="`/${ city.alias }/works`">
                        Работа в Додо
                    </router-link>
                </li>
            </ul>

            <div class="main-menu__cart">
                <cart/>
            </div>
        </div>
    </nav>
</template>