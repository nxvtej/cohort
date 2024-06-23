const { express } = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();

app.use(express.json());
app.post("/todo", function (req, res) {
	const creatPayload = req.body;
	const parsedPAyload = createTodo.safeParse(creatPayload);
	if (!parsedPAyload.success) {
		res.status(411).json({
			msg: "you sent wrong inputs.",
		});
		return;
	}
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
	const updateTodo = req.body;
	const parsedUpdate = updateTodo.safeParse(updateTodo);

	if (!parsedUpdate.success) {
		res.status(411).json({
			msg: "you sent wrong inputs",
		});
		return;
	}
});
