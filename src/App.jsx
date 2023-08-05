import React, { useState } from 'react';

import Slider from "rc-slider";

import 'rc-slider/assets/index.css';
import './App.css';

function App() {
	const [standartCount, setStandartCount] = useState(1)
	return (
		<div className='range'>
			<Slider
				handle={(props) => {
					return (
						<div className='rc-slider-handle' style={{ left: `${props.offset}%` }}>
							<div className='custom-tooltipe'>
								<span style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>{props.value}</span>
							</div>
						</div>
					);
				}}
				marks={{
					1: '1',
					10: '10',
					50: '50',
					150: '150+',
				}}
				min={1}
				max={150}
				value={standartCount > 150 ? [150] : [standartCount]}
				onChange={(value) => setStandartCount(value)}
			></Slider>

		</div>
	);
}

export default App;
