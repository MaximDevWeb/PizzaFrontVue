import {defineStore} from "pinia";

export const useConfigStore = defineStore({
    id: 'config',

    state: () => {
        return {
            domain: 'http://127.0.0.1:8000/api/v1'
        }
    },

    getters: {
        getDomain: (state) => state.domain
    },

    setters: {
        setDomain: (domain) => {
            this.domain = domain;
        }
    }
});