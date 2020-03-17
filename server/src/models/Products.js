const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: mongoose.Types.Decimal128
    },
    image: {
        required: true,
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    is_new : {
        type : Boolean,
        required: true,
        default : false
    }

})

const Products = mongoose.model("Products", Schema)
module.exports = Products