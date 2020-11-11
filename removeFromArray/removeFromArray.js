const removeFromArray = function(array, ...args) {
    let filtered = array;
    for (let i = 0; i < args.length; i++) {
        filtered = filtered.filter(function(value, index, arr) {
            return value !== args[i];
        });

    }
    return filtered;    
}

module.exports = removeFromArray
