import {describe, it, expect} from "vitest";
import Logo from '../../ui/logo/Logo.vue'
import {mount} from "@vue/test-utils";

describe('Logo', () => {
    const wrapper = mount(Logo);

    it('test logo image', async () => {
        expect(wrapper.find('img').exists()).true
    });

    it('test logo text', async () => {
        expect(wrapper.find('span.logo__name').text()).equals('ДОДО ПИЦЦА');
        expect(wrapper.find('span.text-sm').text()).equals('Сеть пиццерий №1 в России');
    });
})