<script setup>

import {computed} from "vue";

const maxOrder = 5;

const props = defineProps({
    orders: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        validator(value) {
            return ['queue', 'rolling', 'filling', 'bake'].includes(value);
        }
    }
});

const queueTitle = computed(() => {
    let titleList = {
        queue: 'В очереди',
        rolling: 'На раскатке',
        filling: 'На начинении',
        bake: 'В печи'
    };

    return titleList[props.type];
});

</script>

<template>
    <div>
        <p class="text-lg font-semibold mb-2">{{ queueTitle }}</p>

        <div v-if="orders.length">
            <p v-for="order in orders.slice(0, maxOrder)" class="pt-1">
                <strong>№ {{ order.number }}</strong> {{ order.title }}
            </p>

            <p v-if="orders.length > maxOrder" class="text-gray-500 pt-2">
                + еще {{ orders.length - maxOrder }}
            </p>
        </div>

        <div v-else class="text-gray-500 mb-1">Zzz...</div>
    </div>
</template>