const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())
leaderRouter.route('/')
.all((req,res,next) =>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) =>{
    res.end("will send all the leaders to you!")
})
.post((req,res,next) =>{
    res.end("Will be add the leader: "+ req.body.name + " With details: "+req.body.description)
})
.put((req,res,next) =>{
    res.statusCode = 403
    res.end("Put operation is not supported on /leader")
})
.delete((req,res,next) =>{
    res.end("deleting all leaders!")
})

leaderRouter.route('/:leaderId')
.get((req,res,next) =>{
    res.end("will send details of the Leader: "+ req.params.leaderId + " to you")
})
.post((req,res,next) =>{
    res.statusCode = 403
    res.end("Post operation is not supported on /leader/"+ req.params.leaderId+"\n")
})
.put((req,res,next) =>{
    res.write("Updating the leader: "+req.params.leaderId)
    res.end("Will update the leader: "+ req.body.name + " with details: "+req.body.description)
})
.delete((req,res,next) =>{
    res.end("deleting leader: "+req.body.leaderId)
})

module.exports = leaderRouter