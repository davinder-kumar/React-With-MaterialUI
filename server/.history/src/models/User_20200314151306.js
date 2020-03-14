// var mongoose = require("../db/db");
const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

var UserSchema = mongoose.Schema(
        {
                firstname: {
                        type: String,
                        required: true,
                        trim: true
                },
                lastname: {
                        type: String,
                        required: true,
                        trim: true
                },

                username: {
                        type: String,
                        required: true,
                        trim: true
                },
                email: {
                        type: String,
                        required: true,
                        unique: true,
                        lowercase: true,
                        validate: value => {
                                if (!validator.isEmail(value)) {
                                        throw new Error("Invalid Email ID")
                                }
                        }
                },
                password: {
                        type: String,
                        required: true,
                        minLength: 6
                },
                subscription: {
                        type: Boolean,
                        required: true
                },
                tokens: [{
                        token: {
                                type: String,
                                required: true
                        }
                }]
        });

UserSchema.pre("save", async function(next){
        //HASH THE PASSWORD before saving the user model
        const user = this;
        if(user.isModified('password'){
                
        })
})

var User = mongoose.model("User", UserSchema);

module.exports = User;
