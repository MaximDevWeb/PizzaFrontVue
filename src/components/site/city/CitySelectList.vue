<script setup>
import {computed} from "vue";
import ObjectGroup from "../../../modules/ObjectGroup";
import lodash from "lodash";

const props = defineProps({
    list: {
        type: Array,
        required: true
    },
    search: {
        type: String,
        default: ''
    }
});

/**
 * Сортируем список городов по алфавиту
 * @type {ComputedRef<*>}
 */
const sortList = computed(() => {
    return lodash.sortBy(props.list, 'name');
})

/**
 * Фильтрация по поисковомузапросу
 * @type {ComputedRef<*>}
 */
const searchList = computed(() => {
    return sortList.value.filter(item => {
        return RegExp(props.search, 'i').test(item.name);
    });
});

/**
 * Формируем список городов по буквам
 * и сортируем его по алфавиту
 * @type {ComputedRef<*[]>}
 */
const ABCList = computed(() => {
    let list = ObjectGroup.ABCGroup(searchList.value, 'name');
    return lodash.sortBy(list, ['symbol']);
})
</script>

<template>
    <div class="mt-4 city-selector__wrapper">
        <div class="city-selector__list" v-if="ABCList.length">
            <div class="city-selector__item" v-for="item in ABCList">
                <div class="city-selector__symbol">
                    {{ item.symbol }}
                </div>
                <div class="city-selector__items">
                    <router-link :to="'/' + city.alias" v-for="city in item.cities">
                        {{ city.name }}
                    </router-link>
                </div>
            </div>
        </div>

        <div v-else class="text-xl text-gray-500">
            Пиццерия в этом городе еще не открылась
        </div>
    </div>
</template>