/*
Imagine when setting password 
you need to make sure that it contains :-

one upper case alphabate
one special symbol
one number
mini length of 6


so if you manually check these it'sgoing to be complixated 
for this we have some... lets seee

zod livrary
its a schema validation

typescript-first schema validation with static type inference
*/

const zod = require("zod");
const express = require("express");
const { emit } = require("nodemon");
const app = express();

// this is enough to tell that input should be in this format
const schema_1 = zod.array(zod.number());

app.use(express.json());
// middleware to calculate the load on server
let numberOfRequest = 0;

function loadcalculator(req, res, next) {
numberOfRequest++;
console.log("request number",numberOfRequest);
// console.log(numberOfRequest);
next();
}
// usiung zod 
function validUser(obj){
    const schema_3 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8) })

    const response = schema_3.safeParse(obj);
    console.log(response);
}

app.use(loadcalculator); //this is middle ware as it 
                        // take 3 inputs and return functions
// so i need to add load calculator every rpite instead in can  make it ion app use
// this line alwaysa execyutess for all routes aftet this line

app.post("/health-checkup",  function(req, res) {
    const kidney = req.body.kidney;
    const response = schema_1.safeParse(kidney)
    
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
    res.send({
        response
    })}
})

app.post("/health-checkup2",  function(req, res) {
    const kidney = req.body.kidney;
    const response = schema_1.safeParse(kidney)
    
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
    res.send({
        response
    })}
})

// this works nicely

// now some advance

/*
this is what user need to input 
{
    email: string =>email (having username, @, address, .com)
    passowrd: alleast 8 letters
    constry: "in", "us"
}
*/

const schema_2 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidney: zod.array(zod.number())
})

/* 
something interest on how to chcekc if array is of nuvmers only 

function validInput(arr) {
    if(typeof arr == "object" 
    && arr.length >=1 
    && typeof arr[0] == "number" 
    && arr.every((item) => typeof item == "number"))
}

insteasd of thisi  only write zod
const schema = zod.array(zod.numbers())
*/

app.use(function (error, req, res, next) {
    res.json({
        msg:"sorry somethign is hitting our server"
    });
});
app.listen(3000);