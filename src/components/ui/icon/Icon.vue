<script setup>

defineProps({
    name: String
});

</script>

<template>
    <svg>
        <use :xlink:href="'/images/icon_sprite.svg#' + name"></use>
    </svg>
</template>