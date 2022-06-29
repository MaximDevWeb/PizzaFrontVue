import {describe, it, expect} from 'vitest';
import ItemContact from '../../../../../views/pages/site/contacts/components/ItemContact.vue';
import {mount} from "@vue/test-utils";
import router from '../../../../../router/index.js';

describe('CityContact', () => {
    const wrapper = mount(ItemContact, {
        props: {
            address: {
                title: 'Адлер',
                address: 'ул. Кирова, 23',
                alias: 'kirova-23',
                time: {
                    delivery: {from: '10:00', to: '23:00'},
                    restaurant: {from: '10:00', to: '23:00'}
                },
                rating: {
                    timer: 33,
                    stars: 4.67
                }
            }
        },
        global: {
            plugins: [router]
        }
    });

    it('test text link', async () => {
        expect(wrapper.find('a').text()).equals('Адлер');
    });

    it('test links', async () => {
        await router.push('/volgograd/contacts');
        expect(wrapper.find('a').attributes('href')).equals('/volgograd/contacts/kirova-23');
    });
});