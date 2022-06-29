import {describe, it, expect} from "vitest";
import Input from '../../ui/form/Input.vue';
import {mount} from "@vue/test-utils";

describe('Input', () => {
    const input = mount(Input, {
        props: {
            id: 'search',
            placeholder: 'search',
            type: 'text',
        }
    });

    const input_icon = mount(Input, {
        props: {
            icon: 'search'
        }
    })

    it('test input attributes', async () => {
        const wr = input.find('input');
        expect(wr.attributes('id')).equals('search');
        expect(wr.attributes('placeholder')).equals('search');
        expect(wr.attributes('type')).equals('text');
    });

    it('test input icon', async () => {
        const wr = input_icon.find('use');
        expect(wr.attributes('href')).equals('/images/icon_sprite.svg#search');
    });

})