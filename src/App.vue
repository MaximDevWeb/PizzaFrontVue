<script setup>
import {defineAsyncComponent, computed} from 'vue';
import {useRoute} from 'vue-router'
import Preloader from './views/layouts/PreloaderLayouts.vue';
import './assets/styles/app.scss';

const layout = computed(() => {
    const layoutName = useRoute().meta.layout ?? 'SiteLayout';

    return defineAsyncComponent({
        loader: () => import(`./views/layouts/${ layoutName }.vue`),

        loadingComponent: Preloader,
        delay: 300
    });
});
</script>

<template>
    <component :is="layout">
        <slot />
    </component>
</template>

