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

app.post("/signup", (req, res) => {
    const userData = {}
    userData.firstname = req.body.fname
    userData.lastname = req.body.lastname;
    userData.username = req.body.email;
    userData.email = req.body.email;
    userData.passworsd = req.body.password;
    userData.subscription = true;
    const userSave = new user(userData)
    userSave.save((error, user) => {
        if (error) {
            res.send(error)

        } else {
            res.send(user)

        }
    })


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))