const express = require("express")
const userModel = require("../models/User")
const auth = require('../middleware/auth')
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
        if (!user) {
            return res.status(401).send({
                "error": 'Login failed! Check authentication credentials'
            })
        }
        const token = await user.generateAuthToken()
        res.status(201).json({ "user": user, "token": token })
    } catch (error) {
        res.status(400).send(error.toString())
    }
})

router.get("/users/profile",auth, async(req, res) => {
    // View logged in user profile
    res.send(req.user)
})

module.exports = router