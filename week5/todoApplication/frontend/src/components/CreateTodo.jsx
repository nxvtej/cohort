import React from "react";
import { useState } from "react";

export const CreateTodo = () => {
	const [title, setTitle] = useState("");
	const [description, setDescrition] = useState("");
	return (
		<div>
			<input
				type='text'
				placeholder='title'
				onChange={function (e) {
					const value = e.target.value;
					setTitle(e.target.value);
				}}
			/>
			<input type='text' placeholder='description' />

			<button
				onClick={() => {
					fetch("http://localhost:3000/todo", {
						method: "POST",
						body: JSON.stringify({
							title: title,
							description: description,
						}),
						headers: {
							"Content-Type": "application/json",
						},
					}).then(async function (res) {
						const json = await res.json();
						console.log(json);

						console.log("Todo created!");
					});
				}}
			>
				Add a todo
			</button>
		</div>
	);
};
