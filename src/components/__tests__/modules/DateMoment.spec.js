import {describe, it, expect} from "vitest";
import {DateMoment} from "../../../modules/DateMoment.js";

describe('DateMoment', () => {
    const dateOne = DateMoment.getToday();
    const dateTwo = DateMoment.getToday('22:00');

    it('test generate date', async () => {
        expect(dateOne).not.equals(dateTwo);
    });

    // it('test moreNow function ', async () => {
    //     expect(DateMoment.moreNow('23:59')).true;
    // });

})