// express is not a default bumdeled library of node like fs \
// we need to iunstyall express 
/*
const express = require("express");
// initially here is the program
function calcualteSum(n) {
    let ans = 0
    for(let i = 1; i<n;i++){
        ans = ans+i;
    }
    return ans;
}

let ans = calcualteSum(10);
console.log(ans);



// how to expose this to other  //like :-spring boot in java

// so express is one way to do this
// create http server now

const app = express();

// this is onne fucntionality of doctor //same ideology he used
// one way yoi use
app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = calcualteSum(n);
  /*  res.send(ans.toString());   //always remember to pass string here 
                                    // cause  if its nubmer then it mioght think its status code

    // doing same after taking some time

    setTimeout(function() {
        res.send(ans.toString());
    }, 2000) //now page takes some time tpoo lapod

 })

app.listen(3000);



 */

// 2nd question 
// array of objects
// var user = [{
//     name:"navdeep",
//     metadata: {
//         profile:" ", 
//         pronounce: "he/him"
//     }
// }]


const express = require("express")
const app = express()
app.use(express.json());

const user = [{
    name: "john", 
    kidneys: [{ 
        health: false
    }, {
        health: true
    }]
}];

// question here is given with 4 request;
// get - user can check how many kidnetys they have and their health
// post - user can add a new kidney
// put - user can replace a kidney, make it healthy
// delete - user can remove a kidney

app.get("/", function(req, res) {
    // something that returns to john 
    const johnkidney = user[0].kidneys;
    // console.log(johnkidney)
    // res.send(johnkidney)
    // from above two gives direct output

    // calcilate the nubmer of kidney
    const kidney = johnkidney.length;
    let numberOfHealthyKidney =0 ;
    for(let i=0;i<johnkidney.length ; i++){
        if(johnkidney[i].health){
            numberOfHealthyKidney = numberOfHealthyKidney + 1;
        }
    }
    const numberOfUnhealthyKidneys = kidney - numberOfHealthyKidney;

    res.json({
        kidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidneys 

    })
})

// send data in body not query
// question is how to send post req. how this data is going
// remember this error
// because i didnt do this app.use(express.json());
/*
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        health: isHealthy
    })

    res.json({
        msg: "done!"
    })
    console.log(isHealthy)
})
*/

app.post("/", function(req, res) {
    console.log(req.body)
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        health: isHealthy
    })

    res.json({
        msg: "done!"
    })
    
})


// now put request
// 411 wrong input i fuess need to check status  
app.put("/", function(req, res) {
    for(let i=0;i<user[0].kidneys.length;i++){
        user[0].kidneys[i].health = true;
    }
    res.json({});
})


// now delete
// afte coding this simple lets add a check that theren exists a unhealthy kidengy


app.delete("/",  function(req, res) {
    // let atleastOneUnhealthyKidney = false;
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys=[];
        for(let i=0;i<user[0].kidneys.length;i++){
            if(user[0].kidneys[i].health) {
                newKidneys.push({
                    health: true
                })
            }
        }
    
        user[0].kidneys = newKidneys;
        res.json({
            msg: "done"
        })
    } else {
        res.status(411).json({
            msg: "you dont havae an unhealthy kidney"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].health){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}
app.listen(3000)