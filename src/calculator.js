import { operationsObject } from './elements.js';

export const history = {
	numbers: [],
	operators: [],
	inputStack: [],
	temporary: null,
	junk: []
};

export default class Calculator {
	constructor(numbers) {
		this.numbers = numbers;
	}

	enterNumber(value) {
		// calling this will push a number into stack
		history.inputStack(value);
	}

	enterOperator(value) {
		// enter the operator to the stack

		return new Promise((resolve, reject) => {
			////////////////////////////////////////////////////////////
			// WILL_NOT_HAVE_TO_USE_SWITCH_WHEN_USING_ACTUAL_CALCULATOR
			switch (value) {
				case '^':
					this.operator = operationsObject.exponent;
					break;

				case '/':
					this.operator = operationsObject.division;
					break;

				case '*':
					this.operator = operationsObject.multiplication;
					break;

				case '+':
					this.operator = operationsObject.addition;
					break;
				default:
					break;
			}
			//ONLY_TEMPORARY
			/////////////////////////////////////////////////////////////
			if (history.temporary.length || history.temporary === 0) {
				resolve(this.operator);
			} else {
				reject();
			}
		})
			.then((value) => {
				this.beta = Number(history.inputStack.join(''));
				this.alpha = history.temporary;
				this.operator = history.operators.pop();
				history.operators.push(value);
				return history.numbers.push(
					this.operator(this.alpha, this.beta)
				);
			})
			.catch(() =>
				console.log(
					'Previous operation unresolved Or first number not present'
				)
			);
	}

	backpace() {
		// delete from inputStack
		return history.junk.push(history.inputStack.pop());
	}

	clearAll() {
		// remove everything from stack

		history.inputStack = [];
		history.operators = [];
		history.temporary = [];
	}
}
