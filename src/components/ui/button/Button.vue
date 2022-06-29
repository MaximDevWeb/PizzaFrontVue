<script setup>
import Icon from "../icon/Icon.vue";

defineProps({
    href: {
        type: String,
        default: '#'
    },
    icon: {
        type: String,
        default: ''
    }
});
</script>

<template>
    <router-link :to="href" class="btn">
        <span>
            <icon class="btn__icon " v-if="icon" :name="icon" />

            <slot />
        </span>
    </router-link>
</template>