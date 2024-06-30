import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { countContext } from "./context/Context";

function App() {
	const [count, setCount] = useState(0);
	console.log(setCount);

	return (
		<>
			<countContext.Provider value={count}>
				<Count setCount={setCount} />
			</countContext.Provider>
		</>
	);
}

function Count({ setCount }) {
	return (
		<div>
			<CountRenders />
			<Buttons setCount={setCount} />
		</div>
	);
}

function CountRenders() {
	const count = useContext(countContext);
	return <div>count {count}</div>;
}

/*
Count.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired,
};
*/

function Buttons({ setCount }) {
	const count = useContext(countContext);
	return (
		<div style={{ display: "flex", gap: "2px" }}>
			<button onClick={() => setCount(count + 1)}>Increase</button>

			<button onClick={() => setCount(count - 1)}>Decrease</button>
		</div>
	);
}

/*
Buttons.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired,
};
*/

export default App;
