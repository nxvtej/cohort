const zod = require("zod");
/*
    {
        title: String,
        description: string,

    }

    {
        id: string,
    }
*/

const createTodo = zod.object({
	title: zod.string(),
	description: zod.string(),
});

const updatedTodo = zod.object({
	id: zod.string(),
});

module.exports = {
	createTodo,
	updatedTodo,
};
