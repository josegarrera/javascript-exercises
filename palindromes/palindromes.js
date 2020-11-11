const palindromes = function(s) {
    let string = s.toLowerCase();
    string = string.replace(/[^a-z]/g, '');
    let array = string.split('');
    array = array.reverse();
    let reverseString = array.join('');
    return string === reverseString;
}

module.exports = palindromes
