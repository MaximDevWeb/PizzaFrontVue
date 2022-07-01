import {defineStore} from "pinia";

export const useMainStore = defineStore({
    id: 'main',

    state: () => ({
        load: false
    }),

    getters: {
        getLoad: (state) => state.load
    },

    actions: {
        setLoad(status) {
            this.load = status;
        }
    }
});