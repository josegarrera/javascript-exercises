const reverseString = function(string) {
    let array = string.split('');
    array = array.reverse();
    let rstring = array.join('');
    return rstring;
    
}

module.exports = reverseString
