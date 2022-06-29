import {describe, it, expect} from "vitest";
import {RandomGenerate} from "../../../modules/RandomGenerate";

describe('CheckBox', () => {
    const one = RandomGenerate.randomString();
    const two = RandomGenerate.randomString();

    it('test randomString generate', async () => {
        expect(one).not.equals(two);
    });

})