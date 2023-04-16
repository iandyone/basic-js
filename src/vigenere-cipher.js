const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    cipherMessage(message, key, encrypt) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }

        const messageText = message.toUpperCase();
        const keyText = key.toUpperCase();
        let keyIndex = 0;
        let result = '';

        for (let i = 0; i < messageText.length; i++) {
            const messageCharCode = messageText.charCodeAt(i);

            if (messageCharCode < 65 || messageCharCode > 90) {
                result += messageText[i];
                continue;
            }

            const keyCharCode = keyText.charCodeAt(keyIndex % keyText.length);
            const newCharCode = encrypt ? ((messageCharCode - 65 + keyCharCode - 65) % 26) + 65 : ((messageCharCode - 65 - keyCharCode + 65 + 26) % 26) + 65;

            ++keyIndex;
            result += String.fromCharCode(newCharCode);
        }

        return this.isDirect ? result : result.split('').reverse().join('');
    }

    encrypt(message, key) {
        return this.cipherMessage(message, key, true);
    }

    decrypt(encryptedMessage, key) {
        return this.cipherMessage(encryptedMessage, key, false);
    }
}

module.exports = {
    VigenereCipheringMachine,
};
