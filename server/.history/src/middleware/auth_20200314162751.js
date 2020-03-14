const jwt = require("jsonwebtoken")
const userModel = require("../models/User")


const auth = async(req, res,next) =>{
    const token = req.header("Authorization").replace("Bearer ",'')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try{

    }catch(error){
        res.status(401).send({ error: 'Not authorized to access this resource' })

    }
}