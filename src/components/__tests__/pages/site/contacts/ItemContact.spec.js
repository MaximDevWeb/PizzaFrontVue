import {describe, it, expect} from 'vitest';
import ItemContact from '../../../../../views/pages/site/contacts/components/ItemContact.vue';
import {mount} from "@vue/test-utils";
import router from '../../../../../router/index.js';

describe('CityContact', () => {
    const wrapper = mount(ItemContact, {
        props: {
            address: {
                id: 131,
                title: "Чехова",
                address: "ул. Чехова, 33",
                alias: "ul-cexova-33",
                metro: "Парк Победы",
                time: {
                    delivery: {
                        to: "23:00",
                        from: "10:00"
                    },
                    restaurant: {
                        to: "23:00",
                        from: "10:00"
                    }
                },
                ratings: [
                    {
                        timer: 34,
                        stars: 3
                    },
                    {
                        timer: 41,
                        stars: 4
                    }
                ]
            }
        },
        global: {
            plugins: [router]
        }
    });


    it('test links', async () => {
        await router.push('/volgograd/contacts');
        expect(wrapper.find('a').attributes('href')).equals('/volgograd/contacts/ul-cexova-33');
    });
});