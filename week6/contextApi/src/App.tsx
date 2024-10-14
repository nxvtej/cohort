/** @format */

import { useContext, useState } from "react";

import "./App.css";
import { CounterContext } from "./context/Context";
import Counter from "./component/Counter";

function App() {
	const contextState = useContext(CounterContext);
	console.log("contextState", contextState);
	return (
		<>
			<h1>Count is: {contextState.count}</h1>
			<Counter />
			<Counter />
			<Counter />
			<Counter />
		</>
	);
}

export default App;
