<script setup>
import {computed} from "vue";

const props = defineProps({
    alias: String
});

const imageUrl = computed(() => {
    return `url(https://picsum.photos/seed/${ props.alias }/900/530)`;
});

</script>

<template>
    <div
        :style="{ backgroundImage: imageUrl }"
        class="contact__image rounded-xl"
    >
    </div>
</template>