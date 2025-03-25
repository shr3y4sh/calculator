import { useState, useReducer } from 'react';

import reducer from '../utils/hero-reducer';

import ButtonPad from './buttons';

export default function Calculator() {
	const [hero, dispatch] = useReducer(reducer, 0);
	const [history, setHistory] = useState(null);
	return (
		<div className='main_calculator'>
			<Display
				input={{ hero, history }}
				onChange={{ dispatch, setHistory }}
			/>
			<ButtonPad dispatch={dispatch} display={hero} />
		</div>
	);
}

function Display({ input, onChange }) {
	return (
		<div className='main_display-area'>
			<Hero entry={input.hero} change={onChange.dispatch} />
			<History entry={input.history} change={onChange.setHistory} />
		</div>
	);
}

function Hero({ entry, change }) {
	return (
		<div className='main_display_hero'>
			<input
				className='main_display_hero'
				type='text'
				name='hero'
				value={entry}
				onChange={change}
				disabled
			/>
		</div>
	);
}

function History({ entry }) {
	return <div className='main_display_history'>{entry}</div>;
}
