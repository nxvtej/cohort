const { express } = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());
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
			title: parsedPayload.title,
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
	const updateTodo = req.body;
	const parsedUpdate = updateTodo.safeParse(updateTodo);

	if (!parsedUpdate.success) {
		res.status(411).json({
			msg: "you sent wrong inputs",
		});
		return;
	}

	await todo.update(
		{
			_id: parsedUpdate.id,
		},
		{
			completed: true,
		}
	);

	res.json({
		msg: "todo marked completed",
	});
});
