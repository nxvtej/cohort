/** @format */

import React, { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const ContextProvider = ({ children }) => {
	const [count, setCount] = useState(0);
	return (
		<CounterContext.Provider value={{ count, setCount }}>
			{children}
		</CounterContext.Provider>
	);
};
