const express = require("express")
const app = express()
const mongoose = require('mongoose');
const db = require('./db/db');
var user = require('./Models/user');
var bodyParser = require('body-parser')
const port = 8180
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
// app.post("/register", (req, res) => {
//     let d = {}
//     d.name = "SHubham";
//     d.username = "ofshubham";
//     d.email = "ofshubham@gmail.com";
//     d.password = "ofshubham"
//     userSave = new user(d);
//     userSave.save((err, res) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("saved");
//         }

//     })
//     res.send('Hello')
// })

app.post("/signup", (req, res) => {
    const userData = {}
    userData.firstname = req.body.fname
    userData.lastname = req.body.lastname,
    userData.username = req.body.email,
    userData.email = req.body.email,
    userData.password = req.body.password,
    userData.subscription = true
    const userSave = user
    //res.send(req.body)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))