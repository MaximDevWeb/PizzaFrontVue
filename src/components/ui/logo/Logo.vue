<script setup>

import logoImage from '../../../../src/assets/images/logo.svg';

</script>

<template>
    <div class="logo flex items-center">
        <div>
            <img :src="logoImage" class="logo__image mr-3">
        </div>
        <div>
            <span class="leading-tight font-black block logo__name md:text-2xl">ДОДО ПИЦЦА</span>
            <span class="text-sm hidden lg:block">Сеть пиццерий №1 в России</span>
        </div>
    </div>
</template>

<style lang="scss">
@import "/src/assets/styles/ui/logo";
</style>