const express = require("express")
const app = express()
const mongoose = require('mongoose');
const db = require('./db/db');
var user = require('./Models/user');

const port = 81


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

app.post("/signup",(req,res)=>{
    res.send('Hello')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))