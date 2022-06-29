<script setup>

import Icon from "../icon/Icon.vue";

defineProps({
    rating: Object
});

</script>

<template>
    <p class="font-semibold flex items-center">
        {{ rating.timer }} мин
        <span class="font-black mx-1">·</span>
        {{ rating.stars }}
        <icon class="rating__star ml-1" name="star-full" />
    </p>
</template>