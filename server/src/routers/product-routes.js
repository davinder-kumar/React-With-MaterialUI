const express = require("express")
const router = express.Router()
const product = require("../models/Products")
const auth = require('../middleware/auth')
router.post("/addproduct", async (req, res) => {
    try {
        // console.log(req.body)
        const data = req.body
        const newProduct = new product(data)
        await newProduct.save()
        res.status(200).json({ status: 1 })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/get-latest", (req, res) => {
    const products = product.find({ is_new: true });
    products.exec(function (err, docs) {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(docs)
        }
    });



})

module.exports = router