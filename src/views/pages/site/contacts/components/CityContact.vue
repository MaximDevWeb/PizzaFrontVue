<script setup>

defineProps({
    name: String
});

</script>

<template>
    <p class="md:text-4xl text-2xl font-semibold">{{ name }}</p>
</template>