const express = require("express");
const { createTodo, updatedTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
	const creatPayload = req.body;
	const parsedPayload = createTodo.safeParse(creatPayload);
	if (!parsedPayload.success) {
		res.status(411).json({
			msg: "you sent wrong inputs.",
		});
		return;
	}

	try {
		await todo.create({
			title: creatPayload.title,
			description: creatPayload.description,
			completed: false,
		});

		res.json({
			msg: "Todo created successfully.",
		});
	} catch (e) {
		res.status(404).json({
			msg: "db failure",
		});
	}
});

app.get("/todos", async function (req, res) {
	const todos = await todo.find();
	console.log(todos);
	res.json({
		todos,
	});
});

app.put("/completed", async function (req, res) {
	const updateTodoPayload = req.body;
	const parsedUpdate = updatedTodo.safeParse(updateTodoPayload);

	if (!parsedUpdate.success) {
		res.status(411).json({
			msg: "you sent wrong inputs",
		});
		return;
	} else {
		console.log(parsedUpdate);
	}

	try {
		const status = await todo.findByIdAndUpdate(
			{
				_id: parsedUpdate.data.id,
			},
			{
				completed: true,
			}
		);

		if (status.nmodified === 0) {
			res.status(404).json({
				msg: "not found or alreadyu completed",
			});
		} else {
			res.json({
				msg: "todo marked completed",
			});
		}
	} catch (e) {
		console.log(e);
	}
});

app.listen(3000, () => {
	console.log("app running at local host 3000");
});
