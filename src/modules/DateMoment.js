export class DateMoment {

    /**
     * Метод возвращает дату текущего дня,
     * если задан параметр time, то с
     * установкой указанного времени
     *
     * @param time - формат "hh:mm"
     * @returns {Date}
     */
    static getToday(time = null) {
        if (time) {
            const [hours, minutes] = time.split(':');
            const date =  new Date();

            date.setHours(hours);
            date.setMinutes(minutes);
            return date;
        } else {
            return new Date();
        }
    }

    /**
     * Метод возвращает сравнение
     * указанного времени текущей даты
     * с текущем временем, возращает положительный
     * результат если указанное время больше
     * текущего
     *
     * @param testTime - формат "hh:mm"
     * @returns {boolean}
     */
    static moreNow(testTime) {
        const now = this.getToday();
        const test = this.getToday(testTime);

        return test > now;
    }

    /**
     * Метод возвращает сравнение
     * указанного времени текущей даты
     * с текущем временем, возращает положительный
     * результат если указанное время меньше
     * текущего
     *
     * @param testTime - формат "hh:mm"
     * @returns {boolean}
     */
    static lessNow(testTime) {
        const now = this.getToday();
        const test = this.getToday(testTime);

        return test < now;
    }
}