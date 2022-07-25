<script setup>
import { useMainStore } from "../../../stores/main";
import { computed } from "vue";

const mainStore = useMainStore();

const data = computed(() => mainStore.getData);
</script>

<template>
    <div class="md:grid hidden grid-cols-4 gap-20" v-if="data">
        <div>
            <p class="text-2xl mb-2 text-white">{{ data.revenue.now }} ₽</p>
            <p>
                Выручка российской сети в этом месяце. В прошлом — <br />
                {{ data.revenue.then }} ₽
            </p>
        </div>

        <div>
            <p class="text-2xl mb-2 text-white">
                {{ data.location.pizzerias }} пиццерий
            </p>
            <p>
                в {{ data.location.cities }} городах в
                {{ data.location.countries }} странах, от Великобритании до
                Нигерии
            </p>
        </div>
    </div>
</template>
