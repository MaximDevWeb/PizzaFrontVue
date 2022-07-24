<script setup>
import Icon from "../../ui/icon/Icon.vue";
</script>

<template>
    <div class="footer-main__copyright pt-6 mt-6">
        <div class="footer-main__copyright-menu">
            <p class="md:mt-0 mt-4">
                <span class="uppercase font-bold">Додо Пицца</span> © 2022
            </p>

            <p class="md:block flex flex-col">
                <router-link class="md:ml-3 mx-0" to="/article">
                    Правовая информация
                </router-link>

                <router-link class="md:ml-3 mx-0" to="/article">
                    Калорийность и состав
                </router-link>

                <router-link class="md:ml-3 mx-0" to="/article">
                    Помощь
                </router-link>
            </p>
        </div>

        <div class="md:mb-0 mb-4">
            <a
                href="#"
                target="_blank"
                class="footer-main__social btn btn-social"
            >
                <icon name="ok" />
            </a>

            <a
                href="#"
                target="_blank"
                class="footer-main__social btn btn-social"
            >
                <icon name="vk" />
            </a>

            <a
                href="#"
                target="_blank"
                class="footer-main__social btn btn-social"
            >
                <icon name="youtube" />
            </a>
        </div>
    </div>
</template>
