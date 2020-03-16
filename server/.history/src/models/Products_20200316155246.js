const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    title :{
        required: true,
        type: mongoose.Types.String
    },
    description :{
        required: true,
        type: String
    },
    price :{
        required: true,
        type: mongoose.Types.Decimal128
    },
    title :{
        required: true,
        type: String
    },

})