<script setup>
import secretBuyer from "../../../assets/images/secret-buyer.svg";
import Icon from "../../ui/icon/Icon.vue";
</script>

<template>
    <div class="secret-buyer py-3 md:py-1">
        <div class="container">
            <div class="flex items-center justify-between hidden md:flex">
                <div class="flex items-center">
                    <img
                        class="mr-5"
                        :src="secretBuyer"
                        alt="Стань тайным покупателем Додо Пиццы"
                    />
                    <p class="text-lg">
                        Стань тайным покупателем Додо Пиццы и получи пиццу в
                        подарок
                    </p>
                </div>

                <div>
                    <router-link to="/secret-buyer" class="btn btn-light">
                        Заполнить анкету
                    </router-link>
                </div>
            </div>

            <router-link
                to="/secret-buyer"
                class="flex items-center justify-between block md:hidden"
            >
                <p class="text-lg">Стань тайным покупателем</p>
                <icon name="arrow-right" class="secret-buyer__icon" />
            </router-link>
        </div>
    </div>
</template>
