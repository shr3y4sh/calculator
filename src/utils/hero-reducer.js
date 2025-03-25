export default function reducer({ state, action }) {
	console.log(state);

	switch (action.type) {
		case 'equals':
			//
			return;
		case 'backspace':
			//
			return;
		case 'clear':
			//
			return;
		case 'operation':
			//
			return;
		case 'number':
			//
			return;

		case 'sign':
			//
			return;
		default:
			throw new Error('unknown action', action.type);
	}
}
