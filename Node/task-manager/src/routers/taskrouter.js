const express = require('express')
const Task = require('../model/task')
const auth = require('../middleware/auth')
const router = new express.Router()


//GET /tasks?completed=true
router.get('/tasks',auth,async (req,res) =>{
    const match = {}
    
    if(req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    try {
        //const tasks = await Task.find({ owner: req.user._id})
        await req.user.populate({
            path: 'tasks',
            match
        }).execPopulate()
        res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id',auth,async(req,res) =>{

    
    try {
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(404).send(e)
    }
    
})

router.post('/tasks',auth, async (req,res) =>{
    //const task = new Task(req.body)
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) { 
        res.status(400).send(e)
    }
})

router.patch('/tasks/:id',auth,async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=> allowUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!' })
    }
    try {
        //const task = await Task.findById(req.params.id)//first approch
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id})//third approch
        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})//second approch
        if(!task) {
            return res.status(404).send()
        }
        updates.forEach((update) =>{
            task[update] = req.body[update]
        })
        await task.save()
        res.send(task)
    } catch(e) {
        res.status(400).send(e)
    }
})
router.delete('/tasks/:id',auth,async (req,res)=>{
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id})

        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router