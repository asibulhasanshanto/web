const express = require('express')
const User = require("../model/user")
const auth = require("../middleware/auth")
const authAdmin = require("../middleware/authAdmin")
const router = new express.Router()
const multer = require('multer')

router.get('/users',auth,async (req,res) =>{
    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/user/me', auth ,async(req,res) =>{
     res.send(req.user)
})

router.post('/users',  async (req, res) =>{
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
        res.send({ user, token})
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
router.post('/users/logoutAll',auth, async(req,res) =>{
    try{
        req.user.tokens ={}
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/users/me',auth,async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowUpdates = ['name', 'email','password','age']
    const isValidOperation = updates.every((update)=> allowUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!' })
    }
    try {
        updates.forEach((update) =>{
            req.user[update] = req.body[update]
        })
        await req.user.save()
        res.send(req.user)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me',auth,async (req,res)=>{
    try {
        await req.user.remove()
        res.send(req.user)
    } catch(e) {
        res.status(500).send(e)
    }
})

const upload = multer({
    dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req,file,cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('please upload an image'))
        }
        cb(undefined, true)
    }
})

router.post('/users/me/avater', upload.single('avatar'), (req,res) =>{
    res.send()
},(error, req, res, next) =>{
    res.status(400).send({error: error.message})
})
module.exports = router