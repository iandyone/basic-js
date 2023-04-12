const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const stringValue = String(n);
    const numbers = [];

    for (let i = 0; i < stringValue.length; ++i) {
        const stash = stringValue.split('');
        stash.splice(i, 1);
        numbers.push(Number(stash.join('')));
    }

    return numbers.sort((a, b) => b - a)[0];
}

module.exports = {
    deleteDigit,
};
