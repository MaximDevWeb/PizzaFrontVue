import {describe, it, expect} from "vitest";
import CheckBox from '../../ui/form/CheckBox.vue';
import {mount} from "@vue/test-utils";

describe('CheckBox', () => {
    const checkBoxOneId = mount(CheckBox, {
        props: {
            label: 'Тестовая строка'
        }
    });

    const checkBoxOneIdTwo = mount(CheckBox, {
        props: {
            label: 'Тестовая строка 2'
        }
    });

    it('test id checkbox one id', async () => {
        const labelFor = checkBoxOneId.find('label').attributes('for');
        const inputId = checkBoxOneId.find('input').attributes('id');

        expect(labelFor).equals(inputId);
    });

    it('test label checkbox', async () => {
        const labelText = checkBoxOneId.find('label').text();

        expect(labelText).equals('Тестовая строка');
    });

    it('test id two checkbox one id', async () => {
        const inputId = checkBoxOneId.find('input').attributes('id');
        const inputTwoId = checkBoxOneIdTwo.find('input').attributes('id');

        console.log(inputId);
        console.log(inputTwoId);

        expect(inputId).not.equals(inputTwoId);
    });

})