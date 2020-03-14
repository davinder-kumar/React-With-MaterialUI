const express = require("express")
const userModel = require("../models/User")

const router = express.Router();

router.post("/users", async (req, res) => {
    try{
        const user = new userModel(req.body)
        await user.save()
        const token = await user.generateAuthToken()
    }catch(error){
        res.status(400).send(error)
    }
})