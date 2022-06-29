<script setup>
import Button from "../../../../components/ui/button/Button.vue";
import {useRouter, useRoute} from "vue-router";
import {computed} from "vue";
import {useCitiesStore} from "../../../../stores/cities";
import Head from "../../../../components/ui/head/Head.vue";
import Rating from "../../../../components/ui/rating/Rating.vue";
import ImageContact from "./components/ImageContact.vue";
import SubHead from "../../../../components/ui/head/SubHead.vue";
import OrdersContact from "./components/OrdersContact.vue";
import {useQueuesStore} from "../../../../stores/queues";

const router = useRouter();
const route = useRoute();
const cities = useCitiesStore();
const queues = useQueuesStore();

const city = computed(() => {
    return cities.getByAlias(route.params.city);
});

const address = computed(() => {
    return city.value.addresses.find(address => address.alias === route.params.address)
});

const queuesList = computed(() => {
    return queues.getByAlias(address.value.alias).list;
});

const backUrl = computed(() => {
    return `/${ city.value.alias }/contacts`;
});
</script>

<template>
    <div class="page__content">
        <div class="page__header">
            <div>
                <Button :href="backUrl" class="btn_default" icon="arrow-left">К списку пиццерий</Button>
            </div>

            <div class="mt-6 mb-5">
                <Head>{{ address.title }}</Head>
                <rating class="mt-1" :rating="address.rating" />
            </div>
        </div>

        <div class="contact__content">
            <div>
                <p class="flex items-center">
                    <span class="contact__rec mr-2"></span>
                    {{ city.name }}, {{ address.address }}
                </p>

                <image-contact :alias="address.alias" class="mt-2" />

                <div class="mt-6">
                    <router-link to="#" class="text-lg link_orange">Почему мы готовим без перчаток?</router-link>
                </div>
            </div>

            <div>
                <p>{{ address.address }}</p>

                <p class="mt-4 text-sm">Доставка и самовывоз</p>
                <p>{{ address.time.delivery.from }} — {{ address.time.delivery.to }}</p>

                <p class="mt-3 text-sm">Ресторан</p>
                <p>{{ address.time.restaurant.from }} — {{ address.time.restaurant.to }}</p>
            </div>
        </div>

        <div class="mt-8">
            <sub-head>Заказы на кухне</sub-head>

            <div class="contact__orders mt-6">
                <orders-contact type="queue" :orders="queuesList.queue" />
                <orders-contact type="rolling" :orders="queuesList.rolling" />
                <orders-contact type="filling" :orders="queuesList.filling" />
                <orders-contact type="bake" :orders="queuesList.bake" />
            </div>
        </div>
    </div>
</template>