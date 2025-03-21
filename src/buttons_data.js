export default [
	{
		name: 'clear',
		type: 'delete',
		symbol: 'AC'
	},
	{
		name: 'backspace',
		type: 'delete',
		symbol: '⏴'
	},
	{
		name: 'equals',
		symbol: '=',
		type: 'evaluation'
	},
	{
		name: 'addition',
		symbol: '🞢',
		type: 'operation',
		evaluate: (a, b) => a + b
	},
	{
		name: 'multiply',
		symbol: '⨯',
		type: 'operation',
		evaluate: (a, b) => a * b
	},
	{
		name: 'divide',
		symbol: '÷',
		type: 'operation',
		evaluate: (a, b) => a / b
	},
	{
		name: 'exponent',
		symbol: '^',
		type: 'operation',
		evaluate: (a, b) => Math.pow(a, b)
	},
	{
		name: 'negative',
		symbol: '－',
		type: 'sign',
		evaluate: (a) => -1 * a
	},

	{
		name: 'decimal',
		symbol: '.',
		type: 'sign',
		evaluate: (a) => a / 10
	},
	{
		name: 'one',
		value: 1,
		type: 'number'
	},
	{
		name: 'two',
		value: 2,
		type: 'number'
	},
	{
		name: 'three',
		value: 3,
		type: 'number'
	},
	{
		name: 'four',
		value: 4,
		type: 'number'
	},
	{
		name: 'five',
		value: 5,
		type: 'number'
	},
	{
		name: 'six',
		value: 6,
		type: 'number'
	},
	{
		name: 'seven',
		value: 7,
		type: 'number'
	},
	{
		name: 'eight',
		value: 8,
		type: 'number'
	},
	{
		name: 'nine',
		value: 9,
		type: 'number'
	},
	{
		name: 'zero',
		value: 0,
		type: 'number'
	}
];
