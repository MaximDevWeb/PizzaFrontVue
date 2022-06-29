<script setup>
import Logo from "../../ui/logo/Logo.vue";
import CityInfo from "./CityInfo.vue";
import Button from "../../ui/button/Button.vue";
import Icon from "../../ui/icon/Icon.vue";

</script>

<template>
    <div class="container flex justify-between items-center md:mt-6 md:mb-4 my-2">
        <div class="flex items-center">
            <Logo />

            <city-info class="md:block hidden"/>
        </div>

        <div class="md:block hidden">
            <Button href="/login" class="btn_default btn_small">Войти</Button>
        </div>

        <div class="md:hidden block">
            <Button class="btn_small btn__menu">
                <icon class="h-6 w-6" name="menu" />
            </Button>
        </div>
    </div>
</template>