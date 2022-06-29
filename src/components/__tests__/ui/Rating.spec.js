import {describe, it, expect} from "vitest";
import Rating from '../../ui/rating/Rating.vue'
import {mount} from "@vue/test-utils";

describe('Rating', () => {
    const rating = {
        timer: 40,
        stars: 4.46
    }
    const wrapper = mount(Rating, {
        props: {
            rating: rating
        }
    });

    it('test rating text', async () => {
        expect(wrapper.find('p').text()).string('40');
        expect(wrapper.find('p').text()).string('4.46');
    });
})