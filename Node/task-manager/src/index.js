const express = require("express")
require('./db/mongoose')
const User = require('./model/user')
const Task = require('./model/task')
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskrouter')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port , () =>{
    console.log("server started!")
})