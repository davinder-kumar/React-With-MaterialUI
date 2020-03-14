const express = require("express")
const userRouter = require('./routers/user')
const port = process.env.PORT
const db = require('./db/db');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());
//register routes and thier working
app.use(userRouter)



app.get("/",(req,res)=>{
    res.end("Hi");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))