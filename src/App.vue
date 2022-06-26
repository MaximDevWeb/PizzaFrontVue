<script setup>
import {defineAsyncComponent, computed} from 'vue';
import {useRoute} from 'vue-router'

const layout = computed(() => {
    const layoutName = useRoute().meta.layout ?? 'SiteLayout';

    return defineAsyncComponent(() => import(`./views/layouts/${ layoutName }.vue`));
});

</script>

<template>
    <component :is="layout">
        <slot />
    </component>
</template>

