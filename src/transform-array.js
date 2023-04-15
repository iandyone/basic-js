const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a transformed array based on control sequences that are original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const transformedArr = [];
    const functions = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];

    arr.forEach((value, index) => {
        if (!functions.includes(value)) {
            transformedArr.push(value);
            return;
        }

        if (value === functions[0]) {
            arr.splice(index + 1, 1);
            return;
        }

        if (value === functions[1] && arr[index + 1]) {
            transformedArr.push(arr[index + 1]);
            return;
        }

        if (value === functions[2] && arr[index - 1] && !functions.includes(arr[index - 1])) {
            transformedArr.pop();
            return;
        }

        if (value === functions[3] && arr[index - 1] && !functions.includes(arr[index - 1])) {
            transformedArr.push(transformedArr[transformedArr.length - 1]);
            return;
        }
    });

    return transformedArr;
}

module.exports = {
    transform,
};
