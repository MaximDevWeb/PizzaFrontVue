<script setup>

import logoImage from '../../assets/images/logo.svg';
import Button from "../../components/ui/button/Button.vue";
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<template>
    <div class="container h-screen errors">
        <div class="flex items-center">
            <img :src="logoImage" class="w-20 h-20 mr-4">

            <div>
                <p class="text-3xl">
                    Что-то пошло <strong>не так!</strong>
                </p>
                <p class="text-lg">
                    <slot />
                </p>
            </div>
        </div>

        <div class="mt-6">
            <Button
                href="/"
                class="btn_primary mr-2"
            >
                Главная
            </Button>

            <Button
                href=""
                class="btn_default"
                @click="router.back()"
            >
                Вернуться назад
            </Button>
        </div>
    </div>
</template>