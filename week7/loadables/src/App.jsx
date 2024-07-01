import "./App.css";
import { RecoilRoot, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
	return (
		<RecoilRoot>
			<Todo id={1} />
			<Todo id={2} />
		</RecoilRoot>
	);
}

function Todo({ id }) {
	const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
	// const todo= useRecoilValueLoadable(todosAtomFamily(id));
	// simple get values
	/*
  here todo is not just a value insted its a object that has onstent and status 

{
  content:
  status  
}
   */

	console.log(todo.state);

	if (todo.state === "loading") {
		// rathewr than laoading show some skeleton simple bit
		return <div>loading...</div>;
	} else if (todo.state === "hasValue") {
		return (
			<>
				{todo.contents.title}
				{todo.contents.description}
				<br />
			</>
		);
	} else if (todo.state === "hasError") {
		return <div>error</div>;
	}
}

export default App;
