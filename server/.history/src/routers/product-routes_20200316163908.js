const express = require("express")
const router = express.Router()
const product = require("../models/Products")
router.post("/addproduct", async (req, res) => {
    try {
        console.log(req.body)
        const data = req.body
        const newProduct = new product(data)
        await newProduct.save()
        res.status(200).json({status: 1})
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = 