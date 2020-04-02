const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: { 
        type: String,
        required: true,
        trim:true,
        validate(value) {
            if(value.toLowerCase().includes("password")){
                throw new Error("password cacnnot be a password")
            }
            else if(value.length <=7) {
                throw new Error("enter at least 7 items")
            }
        }
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email  is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(val) {
            if(val< 0) {
                throw new Error('Invalid age')
            }
        }        
    }
})

userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)
    }

    next()
})

const User = mongoose.model('User', userSchema )

module.exports = User