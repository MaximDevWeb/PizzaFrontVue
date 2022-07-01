import {defineStore} from "pinia";
import {useConfigStore} from "./config";
import {useMainStore} from "./main";
import lodash from 'lodash';
import router from "../router";

export const useAddressStore = defineStore({
    id: 'address',

    state: () => ({
        address: null,

        config: useConfigStore(),
        main: useMainStore()
    }),

    getters: {
        getAddress: (state) => state.address,
        getRating: (state) => {
            let stars = [];
            let timer = [];

            state.address.ratings.forEach(rating => {
                stars.push(rating.stars);
                timer.push(rating.timer);
            })

            return {
                stars: lodash.ceil(lodash.mean(stars), 2),
                timer: lodash.ceil(lodash.mean(timer))
            }
        },
        getQueues: (state) => {
            return lodash.groupBy(state.address.queues, (queue) => queue.type);
        }
    },

    actions: {
       async load(city, address) {
           this.main.setLoad(true);

           const url = `${ this.config.getDomain }/${ city }/addresses/${ address }`;
           const response = await fetch(url);

           this.main.setLoad(false);

           if (response.ok) {
               this.address = (await response.json()).data;
           } else {
               router.push('/404');
           }
       }
    }
});