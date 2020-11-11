function add (n1, n2) {
	return n1 + n2;
}

function subtract (n1, n2) {
	return n1 - n2;
}

function sum (array) {
	if (array.length === 0) {
		return 0;
	} else {
		let suma = 0;
		for (const key in array) {
			suma += array[key];
		}
		return suma;
	}
}

function multiply (array) {
	let multiplication = 1;
	array.forEach(element => {
		multiplication = multiplication * element;
	});
	return multiplication;
}

function power(number, power) {
	return number ** power;
}

function factorial(n) {
	if (n === 0) {
		return 1;
	} else if (n === 1) {
		return 1;
	} else {
		let fact = 1;
		for (let i = n; i > 1; i--) {
			fact = fact * i;
		}
		return fact;
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}