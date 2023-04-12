const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let { repeatTimes, additionRepeatTimes, addition = '', separator = '+', additionSeparator = '|' } = options;
    addition += '';

    if (additionRepeatTimes) {
        addition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
    }

    return repeatTimes ? Array(repeatTimes).fill(`${str}${addition}`).join(separator) : `${str}${addition}`

    
}
module.exports = {
    repeater,
};
