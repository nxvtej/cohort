const express = require("express")
const app = express()
const zod = require("zod")

function validInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

app.get("/", function(req, res) {
    const inputs = req.body;
    const response = validInput(inputs);
    if(!response.success){
        
        res.json({
            msg: "ur inputs are invalid"
        })
        return ;
    }
})