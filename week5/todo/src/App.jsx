import { useState } from "react";

/*

todo
{
    todos: [{title: "todo1", description: "first todo", compltete:false}]
}
 */

function App() {
	const [todos, setTodos] = useState([
		{
			title: "go to gym",
			description: "go to gym from 9-11",
			completed: false,
		},
		{
			title: "study dsa",
			description: "frmo 11-12",
			completed: false,
		},
	]);

	// return <>{JSON.stringify(todos)}</>;

	function onClickHandler() {
		setTodos([
			...todos,
			{
				title: "new todo",
				description: "new todo description",
			},
		]);
	}

	return (
		<div>
			<button onClick={onClickHandler}>add todos</button>
			{todos.map(function (todo) {
				return <Todo title={todo.title} description={todo.description} />;
			})}
		</div>
	);
}

function Todo(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.description}</h2>
		</div>
	);
}

export default App;
