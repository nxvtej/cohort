const express = require('express')
const app = express()
// console.log(app)
const port = 3000

app.post('/backend-api/conversation', (req,  res) =>{ 
    // const message = req.body.message;
})

app.get('/', (req, res) => {
   
//     { console.log("hey bitch")
//     console.log(app)
// }

// console.log(req.headers.authorization);
    setTimeout(function (){
        res.send("hey bitch again")
    }, 1000 )
    // get stucl for 1 sec
})

app.listen(port, ()=>{
    console.log(`example of app listenting on ${port}`)
})