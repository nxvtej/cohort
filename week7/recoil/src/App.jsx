import { countAtom } from "./store/atoms/count";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
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
	return (
		<div>
			hi there
			<CountRenders />
			<Buttons />
		</div>
	);
}

function CountRenders() {
	const count = useRecoilValue(countAtom);
	return <div>count {count}</div>;
}

/*
Count.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired,
};
*/

function Buttons() {
	const [count, setCount] = useRecoilState(countAtom);
	return (
		<div style={{ display: "flex", gap: "2px" }}>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increase
			</button>

			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
