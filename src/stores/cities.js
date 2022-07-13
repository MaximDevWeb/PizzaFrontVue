import {defineStore} from "pinia";
import {useMainStore} from "./main";
import lodash from "lodash";
import router from "../router";

export const useCitiesStore = defineStore({
    id: 'cities',

    state: () => ({
        city: null,
        cities: null,

        main: useMainStore()
    }),

    getters: {
        getCity: (state) => state.city,
        getCities: (state) => state.cities,
        getRating: (state) => {
            let stars = [];
            let timer = [];

            state.city.addresses.forEach(address => {
                address.ratings.forEach(rating => {
                    stars.push(rating.stars);
                    timer.push(rating.timer);
                });
            });

            return {
                stars: lodash.ceil(lodash.mean(stars), 2),
                timer: lodash.ceil(lodash.mean(timer))
            }
        }
    },

    actions: {
        async loadCity(city) {

            const url = `${ import.meta.env.VITE_DOMAIN }/cities/${ city }`;
            const response = await fetch(url);

            if (response.ok) {
                this.city = (await response.json()).data;
            } else {
                await router.push('/404');
            }
        },

        async loadCities() {

            const url = `${ import.meta.env.VITE_DOMAIN}/cities`;
            const response = await fetch(url);

            if (response.ok) {
                this.cities = await response.json();
            } else {
                await router.push('/404');
            }
        }
    }
});