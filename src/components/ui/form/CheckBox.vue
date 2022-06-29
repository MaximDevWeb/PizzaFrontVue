<script setup>
import {RandomGenerate} from "../../../modules/RandomGenerate";
import {computed} from "vue";

const props = defineProps({
    modelValue: Boolean,
    id: {
        type: String
    },
    label: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:modelValue']);

const changeEvent = (e) => {
    emit('update:modelValue', e.target.checked);
}

const idGen = computed(() => {
    return props.id ? props.id : RandomGenerate.randomString()
});

</script>

<template>
    <div class="form__wrapper form__checkbox">
        <input :id="idGen" type="checkbox" @change="changeEvent">

        <label :for="idGen">{{ label }}</label>
    </div>
</template>