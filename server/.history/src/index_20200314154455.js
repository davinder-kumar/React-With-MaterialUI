const express = require("express")
const userRouter = require('./routers/user')
const port = process.env.PORT
const db = require('./db/db');
const cors = require('cors');
app.use(cors());

const app = express()
app.use(express.json());
app.use(userRouter)



// const mongoose = require('mongoose');

// var user = require('./models/User');
// var bodyParser = require('body-parser')



// app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//     extended: true
// }));
// app.post("/signup", (req, res) => {
//     const userData = {}
//     userData.firstname = req.body.fname
//     userData.lastname = req.body.lastname;
//     userData.username = req.body.email;
//     userData.email = req.body.email;
//     userData.password = req.body.password;
//     userData.subscription = true;
//     const userSave = new user(userData)
//     userSave.save((error, user) => {
//         if (error) {
//             throw new Error(error);

//         } else {
//             res.send(user)

//         }
//     })
// })

app.get("/",(req,res)=>{
    res.end("Hi");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))