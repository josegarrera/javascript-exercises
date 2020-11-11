const fibonacci = function(index) {
    if (index < 0) {
        return 'OOPS';
    } else if (index === 1 || index === 2) {
        return 1;
    } else {
        let fibonacciArray = [1, 1];
        for (let i = 2; i <= index; i++) {
            fibonacciArray.push(fibonacciArray[i-2] + fibonacciArray[i-1]);
        }
        return fibonacciArray[index - 1];
    }
}

module.exports = fibonacci
