<script setup>
import {computed, reactive} from "vue";
import {useRouter} from "vue-router";
import {DateMoment} from "../../../../modules/DateMoment";
import PhoneContact from "./components/PhoneContact.vue";
import ItemContact from "./components/ItemContact.vue";
import Input from "../../../../components/ui/form/Input.vue";
import CheckBox from "../../../../components/ui/form/CheckBox.vue";
import Head from "../../../../components/ui/head/Head.vue";
import {useCitiesStore} from "../../../../stores/cities";

const router = useRouter();
const cities = useCitiesStore();

const state = reactive({
    search : '',
    fullDay: false,
    workingNow: false
});

const city = computed( () => {
    return cities.getCity;
});

const addresses = computed(() => {
    const addresses = city.value.addresses;

    let filtered = addresses.filter(address => {
        let search = RegExp(state.search, 'i');
        return search.test(address.title) || search.test(address.address) || search.test(address.metro);
    });

    if(state.fullDay) {
        filtered = filtered.filter(address => {
            const timeDelivery = address.time.delivery;

            return timeDelivery.from === '00:00' && timeDelivery.to === '00:00';
        })
    }

    if(state.workingNow) {
        filtered = filtered.filter(address => {
            const timeDelivery = address.time.delivery;

            const from = timeDelivery.from;
            const to = timeDelivery.to === "00:00" ? "23:59" : timeDelivery.to;

            return DateMoment.lessNow(from) && DateMoment.moreNow(to);
        })
    }

    return filtered;
});

const filterResultString = computed(() => {
    const filteredCount = addresses.value.length;
    const fullCount = city.value.addresses.length

    if (filteredCount !== fullCount) {
        return `Найдено ${ filteredCount } пицерий из ${ fullCount }`
    } else {
        return ''
    }
});
</script>

<template>
    <div class="page__content">
        <div class="contacts__header">
            <div>
                <Head>{{ city.name }}</Head>

                <div class="mt-2">
                    <Input
                        placeholder="Район, улица или станция метро"
                        icon="search"
                        v-model="state.search"
                    />

                    <div class="mt-2 flex">
                        <check-box class="mr-4" label="Круглосуточно" v-model="state.fullDay" />
                        <check-box label="Работает сейчас" v-model="state.workingNow"/>
                    </div>

                    <div class="mt-2 h-6">
                        {{ filterResultString }}
                    </div>
                </div>
            </div>

            <div class="md:block hidden">
                <phone-contact />
            </div>
        </div>
        <div class="contact__list md:mt-8 mt-4">
            <item-contact v-for="address in addresses" :address="address" />
        </div>
        <div class="md:hidden block mt-8">
            <phone-contact />
        </div>
    </div>
</template>