const express = require('express')
const User = require("../model/user")
const auth = require("../middleware/auth")
const authAdmin = require("../middleware/authAdmin")
const router = new express.Router()

router.get('/users',auth,async (req,res) =>{
    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/users/:id',auth,async (req,res) =>{

    try {
        const user = await User.findById(req.params.id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users',auth,  async (req, res) =>{
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/login',async(req,res) =>{
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
        console.log("logged in")
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/logout',auth,async(req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send('logged out')
    } catch(e) {
        res.status(500).send("error")
    }
})

router.patch('/users/:id',auth,async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email','password','age']
    const isValidOperation = updates.every((update)=> allowUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!' })
    }
    try {
        const user = await User.findById(req.params.id)
        updates.forEach((update) =>{
            user[update] = req.body[update]
        })
        await user.save()
       // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id',auth,async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(500).send(e)
    }
})


module.exports = router