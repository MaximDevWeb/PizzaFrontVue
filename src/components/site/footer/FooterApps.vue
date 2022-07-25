<script setup>
import apple from "../../../assets/images/applestore-app.svg";
import google from "../../../assets/images/googlestore-app.svg";
import huawei from "../../../assets/images/huaweistore-app.svg";
import { useMainStore } from "../../../stores/main";
import { computed } from "vue";

const mainStore = useMainStore();

const data = computed(() => mainStore.getData);
</script>

<template>
    <div class="footer-apps">
        <a
            href="https://app.appsflyer.com/id894649641?af_ad=icon&pid=dodopizza.site&af_click_lookback=7d&c=web"
        >
            <img :src="apple" alt="DodoApp in AppleStore" />
        </a>

        <a
            href="https://app.appsflyer.com/ru.dodopizza.app?af_ad=icon&pid=dodopizza.site&af_click_lookback=7d&c=web"
        >
            <img :src="google" alt="DodoApp in AppleStore" />
        </a>

        <a
            href="https://appgallery.huawei.com/app/C101170713?sharePrepath=ag&locale=ru_RU&source=website"
        >
            <img :src="huawei" alt="DodoApp in AppleStore" />
        </a>
    </div>

    <div class="footer-contact" v-if="data">
        <a class="text-lg mt-2" :href="`tel: ${data.phone}`">
            {{ data.phone }}
        </a>

        <p class="text-sm">Звонок бесплатный</p>

        <a class="mt-2" :href="`mailto: ${data.email}`">
            {{ data.email }}
        </a>
    </div>
</template>
