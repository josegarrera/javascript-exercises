const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR';        
    } else {
        let stringTotal = '';
        for (let i = n; i > 0; i--) {
            stringTotal += string;            
        }
        return stringTotal;
    }
};

module.exports = repeatString
