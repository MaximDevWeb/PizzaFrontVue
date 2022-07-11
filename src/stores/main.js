import {defineStore} from "pinia";

export const useMainStore = defineStore({
    id: 'main',

    state: () => ({
        load: false,
        select: false
    }),

    getters: {
        getLoad: (state) => state.load,
        getSelect: (state) => state.select
    },

    actions: {
        setLoad(status) {
            this.load = status;
        },
        setSelect(select) {
            this.select = select;
        }
    }
});