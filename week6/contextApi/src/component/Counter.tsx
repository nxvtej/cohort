/** @format */

import React, { useContext } from "react";
import { CounterContext } from "../context/Context";

const Counter = () => {
	const counterState = useContext(CounterContext);
	return (
		<div className='flex'>
			<button
				onClick={() => {
					counterState.setCount(counterState.count + 1);
				}}>
				Increment
			</button>
			<button
				onClick={() => {
					counterState.setCount(counterState.count - 1);
				}}>
				Decrement
			</button>
		</div>
	);
};

export default Counter;
