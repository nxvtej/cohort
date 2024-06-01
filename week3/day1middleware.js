const express = require("express")
const  app = express();
// app.use(json);

function usercheckMiddleware(req,  res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "navdeep" || password != "123"){
        res.status(403).json({
            msg: "invalid username or password"
        });  
    }
        else{
            next();
        }
}
function kidneycheckMiddleware(req, res, next) {
const kidneyId= req.query.kidneyId;
if(kidneyId != 1 && kidneyId != 2){
    res.status(411).json({
        msg: "you have given wrong kdiney input"
    });
}
else {
    next();
}
}


/*
something he told while taking doubts
*/

function middleware(req, res, next){
    fetch().then(()=>{
next()
    })
    throw new Error("this exception occured");
}

// can also be written as 
/*
app.get("/health-check", function(req, res, next) {

}, function(req, res) {

}, 
....ad soo one
)
*/
app.get("/health-check", usercheckMiddleware , kidneycheckMiddleware, function(req, res) {
    res.send("your have a good health")
    
} )





app.get("/heart-check")


app.get("/kidney-check", usercheckMiddleware, kidneycheckMiddleware, function(req, res ) {
    res.send("you have a good kidney hea;th");
    
})


app.get("/", function(req, res) {
    res.json({
        msg: "go to below url",
        healthcheck: "/health-check",
        heartcheck : "/heart-check",
        kidneycheck: "/kidney-check"
    });
});

// global catch to handle exceptions
// error hadnling middleware
app.use((error, req, res, next) =>{
    console.log(error);
    res.status(500).send("servers went down")
});

app.listen(3000);