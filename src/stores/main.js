import { defineStore } from "pinia";
import router from "../router";

export const useMainStore = defineStore({
    id: "main",

    state: () => ({
        load: false,
        select: false,
        data: false,
    }),

    getters: {
        getLoad: (state) => state.load,
        getSelect: (state) => state.select,
        getData: (state) => state.data,
    },

    actions: {
        setLoad(status) {
            this.load = status;
        },

        setSelect(select) {
            this.select = select;
        },

        async loadData() {
            const url = `${import.meta.env.VITE_DOMAIN}/data`;
            const response = await fetch(url);

            if (response.ok) {
                this.data = (await response.json()).data;
            } else {
                await router.push("/404");
            }
        },
    },
});
