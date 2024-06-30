import { useMemo } from "react";
import { countAtom, evenSelector } from "./store/atoms/count";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";

function App() {
	return (
		<>
			<RecoilRoot>
				<Count />
			</RecoilRoot>
		</>
	);
}

function Count() {
	console.log("inside count");
	return (
		<div>
			<CountRenders />
			<Buttons />
		</div>
	);
}

function CountRenders() {
	// console.log("inside  count rendetrs");
	const count = useRecoilValue(countAtom);
	return (
		<div>
			count {count}
			<EvenRender />
		</div>
	);
}

/*
Count.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired,
};
*/

/*
// good enough way
function EvenRender() {
	const count = useRecoilValue(countAtom);
	const isEven = useMemo(() => {
		return count % 2 === 0;
	}, [count]);

	return <div>{isEven ? <p>even</p> : <p>odd</p>} </div>;
}
*/

// better way
function EvenRender() {
	const isEven = useRecoilValue(evenSelector);
	return <div>{isEven ? <p>even</p> : <p>odd, </p>} </div>;
}
function Buttons() {
	/*
  when done this way this component rerenders again and again
  to stop that  from happening only call setCount and that will stop rerenders

	const [count, setCount] = useRecoilState(countAtom);
*/

	const setCount = useSetRecoilState(countAtom);
	// console.log("insdie the  buttons");
	return (
		<div style={{ display: "flex", gap: "2px" }}>
			<button
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Increase
			</button>

			<button
				onClick={() => {
					setCount((count) => count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
