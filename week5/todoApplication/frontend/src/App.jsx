import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
	const [todos, setTodos] = useState(0);

	return (
		<>
			<CreateTodo />
			<Todos todos={todos} />
		</>
	);
}

export default App;
