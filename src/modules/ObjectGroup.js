export default class ObjectGroup {

    /**
     * Функция формирует массив сгруппированных по
     * первой букве указанного в fieldName поля
     * @param list - исходный массив объектов
     * @param fieldName - поле по которому идет группировка
     * @returns {*[]} - возвращает массив объектов с полями symbol, elements
     */
    static ABCGroup(list, fieldName) {
        const abcList = [];
        const abcMap = {};

        list.forEach(elem => {
            const firstSymbol = elem[fieldName][0];

            if (firstSymbol in abcMap) {
                abcList[abcMap[firstSymbol]].cities.push(elem);
            } else {
                abcMap[firstSymbol] = abcList.length;
                abcList.push({
                    symbol: firstSymbol,
                    cities: [elem]
                })
            }
        });

        return abcList;
    }
}