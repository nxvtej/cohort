const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const port = 3000

app.get('/', (req, res) => {
    res.send('<b>hi there bhot sare rraj cchiphe hai yha<b>')
})

app.post('/', (req, res)=> {
    res.send("this is another jaring wayy!00")
})

app.use(bodyParser.json());
// simple app.use(bodyparese({})) is deprecreated


app.post('/conversationWithEx', (req, res) => {
    console.log("example of req.headers")
    console.log(req.headers)


    // middleware afrter this

    console.log(req.body) //giving tyhe undefined //even after doing from postman
    // we have differentg lubrabry to access the body

    // its body parser

    res.send({
        msg: "moye moye move onnn!!"
    });
})


// to get access frpom my mobile phone
app.get('/conversationWithEx', (req, res) => 

    res.send({
        msg: "main jest is in the post request cant do much yet with the get request buddy!!!"
    })
)
app.listen(port, () => {
    console.log(`example a pp listening on port ${port}`)
})