import buttons from '../buttons_data';

export default function Calculator() {
	return (
		<div className='main_calculator'>
			<Display />
			<ButtonPad />
		</div>
	);
}

function Display() {
	return (
		<div className='main_display-area'>
			<div className='main_display_hero'>245</div>
			<div className='main_display_history'>90</div>
		</div>
	);
}

function ButtonPad() {
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
		<button className='main_button' key={button.name} id={button.name}>
			{content}
		</button>
	);
}
