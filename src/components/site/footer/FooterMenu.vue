<script setup>
import FooterApps from "./FooterApps.vue";
</script>

<template>
    <div class="footer-menu mb-10">
        <div>
            <ul class="footer-menu__list">
                <li>Додо Пицца</li>
                <li>
                    <router-link to="#">О нас</router-link>
                </li>
                <li>
                    <router-link to="#">Додо-книга</router-link>
                </li>
                <li>
                    <router-link to="#">Блог «Сила ума»</router-link>
                </li>
                <li>
                    <router-link to="#">Додо ИС</router-link>
                </li>
            </ul>
        </div>

        <div>
            <ul class="footer-menu__list">
                <li>Работа</li>
                <li>
                    <router-link to="#">В пицерии</router-link>
                </li>
            </ul>
        </div>

        <div>
            <ul class="footer-menu__list">
                <li>Партнерам</li>
                <li>
                    <router-link to="#">Франшиза</router-link>
                </li>
                <li>
                    <router-link to="#">Инвестиции</router-link>
                </li>
                <li>
                    <router-link to="#">Поставщикам</router-link>
                </li>
                <li>
                    <router-link to="#">Предложить помещение</router-link>
                </li>
            </ul>
        </div>

        <div>
            <ul class="footer-menu__list">
                <li>Это интересно</li>
                <li>
                    <router-link to="#">
                        Почему мы готовим без перчаток?
                    </router-link>
                </li>
                <li>
                    <router-link to="#">Экскурсии и мастер-классы</router-link>
                </li>
                <li>
                    <router-link to="#">Корпоративные заказы</router-link>
                </li>
            </ul>
        </div>

        <div>
            <footer-apps />
        </div>
    </div>
</template>
