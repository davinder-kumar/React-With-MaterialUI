const express = require("express")
const userModel = require("../models/User")

const router = express.Router();

router.post("/users", async (req, res) => {
    try {
        const user = new userModel(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/users/login", async (req, res) => {
    //login a user

    try {
        const { email, password } = req.body;
        const user = await userModel.findByCredentials(email, password)
console.log("madrchod")
        if (!user) {
            return res.status(401).send({
                "error": 'Login failed! Check authentication credentials'
            })
        }
        const token = user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        // console.log(error)
        res.send("madrchod")
        res.status(400).send(error)
    }
})

module.exports = router