import lodash from "lodash";

export class RandomGenerate {
    /**
     * Строки для рандомной генерации
     */
    static srcShortString = 'abcdefghijklmnopqrstuvwxyz';
    static srcFullString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';


    /**
     *  Функция возвращает случайную строку
     * @param type - может быть "short" или "long"
     * @param length -  длина случайной строки
     * @returns {string}
     */
    static randomString (type = 'short', length = 15) {
        let string = '';
        let srcString = '';

        switch (type) {
            case 'short':
                srcString =  this.srcShortString;
                break;
            case 'long':
                srcString =  this.srcFullString;
                break;
            default:
                srcString =  this.srcShortString;
        }

        for (let i = 0; i < length; i++) {
            string += srcString[lodash.random(0, srcString.length - 1)];
        }

        return string;
    }
}