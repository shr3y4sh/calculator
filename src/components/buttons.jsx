import buttons from '../buttons_data';

export default function ButtonPad() {
	return (
		<div className='main_button-area'>
			{buttons.map((button) => (
				<Button button={button} key={button.name} />
			))}
		</div>
	);
}

function Button({ button }) {
	const content = button.type === 'number' ? button.value : button.symbol;
	return (
		<button className='main_button' id={button.name}>
			{content}
		</button>
	);
}
