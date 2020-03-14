const express = require("express")
const userModel = require("../models/User")

const router = express.Router();

router.post("/users", async (req, res) => {
    console.log(typeof req.body)
    try{
        const user = new userModel(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({token:token})
    }catch(error){
        res.status(400).send(error)
    }
})

router.post("/users/login",async (req,res)=>{
    //login a user
    try{
        const {email , password} = req.body;
        const user = await userModel.findByCredentials(email,password)
        if(!user){
            return res.status(401).send({
                error: 'Login failed! Check authentication credentials'
            })
        }
        const token = user.generateAuthToken()
        res.send({user, token})
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router