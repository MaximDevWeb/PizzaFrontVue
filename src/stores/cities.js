import {defineStore} from "pinia";
import {useConfigStore} from "./config";
import {useMainStore} from "./main";
import lodash from "lodash";
import router from "../router";

export const useCitiesStore = defineStore({
    id: 'cities',

    state: () => ({
        city: null,

        config: useConfigStore(),
        main: useMainStore()
    }),

    getters: {
        getCity: (state) => state.city,
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
            this.main.setLoad(true);

            const url = `${ this.config.getDomain }/cities/${ city }`;
            const response = await fetch(url);

            this.main.setLoad(false);

            if (response.ok) {
                this.city = (await response.json()).data;
            } else {
                router.push('/404');
            }
        }
    }
});