const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,"Please enter name"]
    },
    stuId: {
        type: String,
        required: [true,"please enter student id"]
    },
    classId: {
        type: String,
        required: [true,"please enter class id"]
    },
})
const User = mongoose.model("User",userSchema)
module.exports = User