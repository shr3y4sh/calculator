import { useState } from 'react';

import buttons from '../buttons_data';

export default function ButtonPad({ dispatch, display }) {
	const [canEvaluate, setCanEvaluate] = useState(0);

	function handleClick(button) {
		if (button.type === 'operation') {
			setCanEvaluate(canEvaluate + 1);
			if (canEvaluate === 2) {
				return dispatch({
					type: 'equals',
					display: display
				});
			}
		}
		if (button.type === 'delete' || button.type === 'evaluation') {
			// do something
			return;
		}

		const clicked = button.type === 'number' ? button.value : button.symbol;
		console.log(clicked);
	}

	return (
		<div className='main_button-area'>
			{buttons.map((button) => (
				<Button
					button={button}
					key={button.name}
					onClick={() => {
						handleClick(button);
					}}
				/>
			))}
		</div>
	);
}

function Button({ button, onClick }) {
	const content = button.type === 'number' ? button.value : button.symbol;

	return (
		<button className='main_button' id={button.name} onClick={onClick}>
			{content}
		</button>
	);
}
