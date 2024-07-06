import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [timer, setTimer] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			console.log("from inside useEffect");
			setTimer((timer) => !timer);
		}, 1000);
	}, []);

	return <>{timer ? <Mycomponent /> : null}</>;
}

function Mycomponent() {
	useEffect(() => {
		console.error("component mounted");

		return () => {
			console.log("component unmounted");
		};
	});

	return <div>from inside Mycomponent</div>;
}

export default App;
