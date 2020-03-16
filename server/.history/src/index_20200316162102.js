const express = require("express")
const userRouter = require('./routers/user-routes')
const productRouter = require("./models/Products")
const port = process.env.PORT
const db = require('./db/db');
const cors = require('cors');
const app = express()

//allow cross origin
app.use(cors());
app.use(express.json());
//register routes and thier working
// app.use(userRouter)
// app.use(productRouter)



app.get("/",(req,res)=>{
    res.end("Hi");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))