<script setup>
import Icon from "../../ui/icon/Icon.vue";

const props = defineProps({
    counter: {
        type: Number,
        default: 0,
    },
});
</script>

<template>
    <a href="#" class="btn btn_primary menu-cart__button">
        Корзина
        <template v-if="counter">
            <p class="menu-cart__counter">
                <span>{{ counter }}</span>
                <icon name="arrow-full-right" />
            </p>
        </template>
    </a>
</template>
