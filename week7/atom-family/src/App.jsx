import "./App.css";
import {
	RecoilRoot,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";

function App() {
	return (
		<RecoilRoot>
			<UpdateComponent />
			<Todo id={1} />
			<Todo id={2} />
			<Todo id={2} />
			<Todo id={2} />
			<Todo id={2} />
		</RecoilRoot>
	);
}

function UpdateComponent() {
	const updateTodo = useSetRecoilState(todosAtomFamily(2));
	useEffect(() => {
		setTimeout(() => {
			updateTodo({
				id: "2",
				title: "New Title",
				description: "updated todo after 5sec",
			});
		}, 5000);
	});

	return <div></div>;
}

function Todo({ id }) {
	const todo = useRecoilValue(todosAtomFamily(id));
	return (
		<>
			{todo.title}
			{todo.description}
			<br />
		</>
	);
}

export default App;
