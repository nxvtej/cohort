// middleware, authentication, global catchs, zod 

// before you enter the doctor cabin some checks:
/* 
        Insurance checl
        Blood test
        BP check


        then doctor cabin

*/
// why them

// middlewares purpose is to do prechecks
// two major checks
// authentication and valid inputs
/*
const express = require("express")
const app = express();

app.get("/health-checkup", function(req, res) {

    // before you actually meet doctore 
    // some checks need to be made so lets see how 
    // to do tha using mioddlewares

    res.send("your heart is healthy");
})
*/

/*   important */
/*  how to make check of these value especially how do we get these 
how are theser send 

using query parameters  inside url /?n=30
using body as seen in postman
ans using headers

*/

// usiung normal functions
// ugly way of dpong this

const express = require("express")
const app = express();

app.get("/health-checkup", function(req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    // now making checks 
    if(username != "navdeep" && password != "123"){
        res.status(403).json({
            msg: "user doesn't exists"
        });
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "invalid inputds provided"
        });
        return;

    }
    res.send("your heart is healthy");
})

app.get("/kidney-check", function(req, res){
    
})

// if somethign went wrong then have some message
// so that we user doesnst see the actiual error status

// global catch

app.use(function(err, req, res, next) {
    res.json({
        msg: "Sorry, out servers need some break"
    })
})
app.listen(3000);

/******************************* NOW THINK ***************************/
// you are sensding query form web broweser and username and passowrd form postman as header , (sedn them together)
// just get  the local host url from broweser and hit ?kidneyId=1 from psotmamn

// why this is dummwayy beacuse for every routew ur checking again and again 
// instead have their funcitonality srtored some where in funcitons


