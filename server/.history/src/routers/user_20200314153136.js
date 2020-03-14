const express = require("express")
const userModel = require("../models/User")

const router = express.Router();

router.post("/users", async (req, res) => {
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
    }catch(error){
        res.status(400).send(error)
    }
})