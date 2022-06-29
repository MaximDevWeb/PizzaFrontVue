import {describe, it, expect} from "vitest";
import Icon from '../../ui/icon/Icon.vue'
import {mount} from "@vue/test-utils";

describe('Icon', () => {
    const wrapper = mount(Icon, {
        props: {
            name: 'star-full'
        }
    });

    it('test icon', async () => {
        expect(wrapper.find('svg').exists()).true;
        expect(wrapper.find('use').attributes('href')).equals('/images/icon_sprite.svg#star-full');
    });

})