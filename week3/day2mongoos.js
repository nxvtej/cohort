const express = require("express");
const mongoose = require("mongoose");
const zod = require("zod");
mongoose.connect("mongodb+srv://nxvtej:-eGL9nHHqHfu.2c@cluster0.0y3lts4.mongodb.net/Users")

const user = mongoose.model('users',  {name: String, email:String, password: String});


const app = express();
app.use(express.json());

app.post("/signup",  async function(req, res) {

    
    // now just get data from user and then che\ck
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await user.findOne({ email : username});
    // CRUD 
    if(existingUser) {
        return res.status(400).send("user already exists");
    }
    const User = new user({
    name: name,
    email: username,
    password: password
});

    
    User.save();
    res.json({
        msg: "try done"
    });
        
})


app.use((error, req, res, next) => {
    res.json({
        msg: "something up with servers"
    })
})
app.listen(3000, ()=>{
    console.log("app is running at ")
})

