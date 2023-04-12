const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const s1Chars = s1.split('').sort();
    const s2Chars = s2.split('').sort();
    let counter = 0;

    s1Chars.forEach((charToRemove) => {
        if (s2Chars.includes(charToRemove)) {
            const doubledChar = s2Chars.findIndex((char) => char === charToRemove);
            s2Chars.splice(doubledChar, 1);
            ++counter;
        }
    });

    return counter;
}

module.exports = {
    getCommonCharacterCount,
};
