const express = require("express")
const router  = express.Router()
const product = require("../models/Products")
router.post("/addproduct", async (req,res) => {
    try{
    const data = req.body
    const newProduct = new product(data)
    newProduct.save()
    }catch(error){
        co
    }
})