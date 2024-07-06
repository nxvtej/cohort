/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function useTodo() {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
			setTodo(res.data.todos);
		});
	}, []);
	return todo;
}

function App() {
	const todos = useTodo();

	return (
		<>
			{todos.map((item, index) => (
				<Track key={index} todo={item} />
			))}
		</>
	);
}

function Track({ todo }) {
	return (
		<div>
			{todo.title}
			<br />
			<div>{todo.description}</div>
		</div>
	);
}

export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
// 	const [todos, setTodos] = useState([]);

// 	useEffect(() => {
// 		axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
// 			setTodos(res.data.todos);
// 		});
// 	}, []);

// 	return (
// 		<>
// 			{todos.map((todo) => (
// 				<Track todo={todo} />
// 			))}
// 		</>
// 	);
// }

// function Track({ todo }) {
// 	return (
// 		<div>
// 			{todo.title}
// 			<br />
// 			{todo.description}
// 		</div>
// 	);
// }

// export default App;
