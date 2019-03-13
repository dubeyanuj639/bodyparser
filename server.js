const express = require('express');
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.listen(7000, (req, res) => {
    console.log("connected on port 7000")
})
app.post('/', async (req, res) => {
    console.log("this is your response =>", req.body)
    return res.status(200).send("OK")
})


