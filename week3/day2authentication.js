/*
earlier methods were dumb
cant be sending inputs to every route so 
lets have something more real life
*/
/*
hashing
encryption
json web tokens
local storages

*/
/*
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
    {
        username: "navdeep@gmail.com",
        password: "123",
        name: "navdeep"
    }, 
    {
        username: "navtej@gamil.com",
        password: "1234",
        name: "navtej"
    }, 
    {
        username: "nav@gamil.com",
        password: "12345",
        name: "nav"
    },

];

function userExists(username, password) {
    const size = ALL_USERS.length;
    let userExists = false;
    for(let i=0;i<size;i++){
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password) userExists = true;
        
    } 
    return userExists;
}

app.use(express.json())
app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "user doesnt exists"
        });
    }

    var token = jwt.sign({ username: username}, jwtPassword);
    return res.json({
        token,
    });
});


// tw fucntions used in jwt here
// sign 
// verify
app.get("/users", function(req, res) {
    const token = req.header.Authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        res.json({
            users: ALL_USERS.filter(function(value) {
                if(value.username == username){ return false;}
                else return true;
            })
        })

    } catch {
        throw new Error()
    }
});

app.use((error, req, res, next) =>{
    res.json({
        msg: "somethign is up wiht our server"
    })
})

app.listen((3000), ()=> {
console.log(`app is up and runnign on ${3000}`)
})
*/

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];


function userExists(username, password) {
    const size = ALL_USERS.length;
    let userExists = false;
    for(let i=0;i<size;i++){
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password) userExists = true;
        
    } 
    return userExists;
}
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({

        user: ALL_USERS.filter(function(value) {
                if(username == value.username) return false;
                return true;
        })
    });

  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)