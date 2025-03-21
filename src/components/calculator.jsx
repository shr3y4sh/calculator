import ButtonPad from './buttons';

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
