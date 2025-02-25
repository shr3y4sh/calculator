import { operationsObject } from './elements.js';

export const history = {
	numbers: [],
	operators: [],
	inputStack: [],
	junk: []
};

class Calculator {
	constructor(operationsObject) {
		this.operators = operationsObject;
	}

	enterNumber(value) {
		return new Promise((resolve, reject) => {
			if (this.beta) {
				return reject(value);
			}

			if (this.alpha) {
				this.beta = value;
				resolve(this.beta);
			} else {
				this.alpha = value;
				resolve(this.alpha);
			}
		})
			.then(history.numbers.push)
			.catch(history.junk.push);
	}

	evaluate(callback) {
		history.inputStack = [];
		return history.numbers.push(callback(this.alpha, this.beta));
	}

	enterOperation(value) {
		return new Promise((resolve, reject) => {
			this.nextOperator = this.operators[`${value}`];

			if (history.operators.length === 0) {
				reject(this.nextOperator);
			} else {
				this.currentOperator = history.operators.pop();
				history.operators.push(this.nextOperator);
				resolve(this.currentOperator);
			}
		})
			.then(this.evaluate)
			.catch(history.operators.push);
	}

	backSpace(value) {
		history.inputStack.pop();
		history.junk.pop(value);
	}
}

export const calculator = new Calculator(operationsObject);
