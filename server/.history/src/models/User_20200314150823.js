// var mongoose = require("../db/db");
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

var UserSchema = mongoose.Schema(
        {
                firstname: {
                        type: String,
                        required: true
                },
                lastname: {
                        type: String,
                        required: true
                },

                username: {
                        type: String,
                        required: true
                },
                email: {
                        type: String,
                        required: true
                },
                password: {
                        type: String,
                        required: true
                },
                subscription: {
                        type: Boolean,
                        required: true
                }
        });

var User = mongoose.model("User", UserSchema);

module.exports = User;
