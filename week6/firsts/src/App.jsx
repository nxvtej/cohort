import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Header title='navdeep'></Header>
			<Header title='singh'></Header>
		</>
	);
}

function Header({ title }) {
	return <div>{title}</div>;
}

export default App;
