import {describe, it, expect} from 'vitest';
import CityContacts from '../../../../../views/pages/site/contacts/components/CityContact.vue';
import {mount} from "@vue/test-utils";

describe('CityContact', () => {
    const wrapper = mount(CityContacts, {
        props: {
            name: 'Анапа'
        }
    });

    it('test city-contacts component params', async () => {
        expect(wrapper.find('p').text()).equals('Анапа');
    });
});