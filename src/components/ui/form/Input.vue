<script setup>

import Icon from "../icon/Icon.vue";

defineProps({
    modelValue: String,
    id: String,
    placeholder: String,
    icon: {
       type: String,
       default: ''
    },
    type: {
        type: String,
        default: 'text'
    }
});

const emit = defineEmits(['update:modelValue']);

const inputEvent = (e) => {
    emit('update:modelValue', e.target.value);
}


</script>

<template>
    <div class="form__wrapper">
        <input
            class="border border-slate-300 rounded-lg form__input form__icons"
            :id="id"
            :class="$attrs.class"
            :type="type"
            :placeholder="placeholder"
            @input="inputEvent"
        >
        <icon class="form__icon text-slate-500" v-if="icon" :name="icon" />
    </div>
</template>