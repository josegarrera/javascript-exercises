const caesar = function(message, shift) {
    let upperCaseDecimalUnicode = [];
    let upperCode = 65;
    for (let i = 0; i <= 25; i++) {
        upperCaseDecimalUnicode[i] = upperCode;
        upperCode++;
    }
    let lowerCaseDecimalUnicode = [];
    let lowerCode = 97;
    for (let j = 0; j <= 25; j++) {
        lowerCaseDecimalUnicode[j] = lowerCode;
        lowerCode++;
    }
    let stringUnicodeArray = [];
    for (let l = 0; l < message.length; l++) {
        stringUnicodeArray[l] = message.charCodeAt(l);
    }
    shift = shift % upperCaseDecimalUnicode.length;
    for (let k = 0; k < stringUnicodeArray.length; k++) {
        if (upperCaseDecimalUnicode.includes(stringUnicodeArray[k])) {
            if (stringUnicodeArray[k] + shift > 90) {
                stringUnicodeArray[k] = stringUnicodeArray[k] + shift - 90 + 64;
            } else if (stringUnicodeArray[k] + shift < 65) {
                stringUnicodeArray[k] = stringUnicodeArray[k] - 64 + 90 + shift;
            } else {
            stringUnicodeArray[k] = stringUnicodeArray[k] + shift;
            }
        }
        if (lowerCaseDecimalUnicode.includes(stringUnicodeArray[k])) {
            if (stringUnicodeArray[k] + shift > 122) {
                stringUnicodeArray[k] = stringUnicodeArray[k] + shift - 122 + 96;
            } else if (stringUnicodeArray[k] + shift < 97) {
                stringUnicodeArray[k] = stringUnicodeArray[k] - 96 + 122 + shift;
            } else {
            stringUnicodeArray[k] = stringUnicodeArray[k] + shift;
            }
        }
    }
    for (let m = 0; m < stringUnicodeArray.length; m++) {
        stringUnicodeArray[m] = String.fromCharCode(stringUnicodeArray[m]);
    }
    return stringUnicodeArray.join('');
}

module.exports = caesar
