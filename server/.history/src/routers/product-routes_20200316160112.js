const express = require("express")
const router  = express.Router()
const product = require("../models/Products")
router.post("/addproduct", (req,res) => {
    const data = req.body
    const newproduct = 
})