<script setup>
import {defineAsyncComponent, markRaw, ref, watch} from 'vue';
import {useRoute} from 'vue-router'
import './assets/styles/app.scss';

import SiteLayout from './views/layouts/SiteLayout.vue';

const route = useRoute();
const layout = markRaw(SiteLayout);

watch(route, async(route) => {
    if (route.meta.layout) {
        layout.value = defineAsyncComponent(`./views/layouts/${ route.meta.layout }.vue`)
    }
});

</script>

<template>
    <component :is="layout">
        <slot />
    </component>
</template>

