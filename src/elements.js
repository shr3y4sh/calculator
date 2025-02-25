const addTwoNumbers = (alpha, beta) => alpha + beta;
const multiplyTwoNumbers = (alpha, beta) => alpha * beta;

const divide = (alpha, beta) => {
	if (beta == 0) {
		throw new Error('Division by 0');
	}

	return Math.round((alpha / beta) * 100) / 100;
};

const powerOf = (alpha, beta) => {
	return Math.round(Math.pow(alpha, beta) * 100) / 100;
};

export const operationsObject = {
	exponent: powerOf,
	addition: addTwoNumbers,
	multiplication: multiplyTwoNumbers,
	division: divide
};

export const numbers = {
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	zero: 0,
	minus: '-',
	decimal: '.'
};
