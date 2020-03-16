const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    title :{
        required: true,
        type: mongoose.Types.String
    },
    description :{
        required: true,
        type: mongoose.Types.String
    },
    price :{
        required: true,
        type: mongoose.Types.Decimal128
    },
    image :{
        required: true,
        type: String
    },

})

const Products = 