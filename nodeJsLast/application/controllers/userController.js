const User = require("../model/userModel")

exports.getAllUser = async(req,res) =>{
    try {
        const users = await User.find()

        res.status(200).json({
            status: "ok",
            result:users.length,
            data: {
                users
            }
        })
    } catch( err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}
exports.getUser = async(req,res) =>{
    try {
        const user = await User.find({name: req.params.id})
        res.status(200).json({
            status: "ok",
            data: {
                user
            }
        })
    } catch(err) {
        res.status(404).json({
            status:"fail",
            message: err
        })
    }
}
exports.createUser = async (req, res) =>{
    try {
        const newUser = await User.create(req.body)

        res.status(201).json({
            status: "created",
            data: {
                newUser
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}
exports.updateUser = async( req, res) => {
    try {
        const user = await User.findById(req.params.stuId, req.body, {
            new: true
        })
        res.status(200).json({
            status: "ok",
            data: {
                user
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}
exports.deleteUser = async( req, res) => {
    try {
        await User.findByIdAndDelete(req.params.stuId)
        res.status(300).json({
            status: "successfully deleted",
            data: null
        })
    } catch(err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}