const express = require("express")
require('./db/mongoose')
const User = require('./model/user')
const Task = require('./model/task')
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskrouter')

const app = express()
const port = process.env.PORT  || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port , () =>{
    console.log("server started!")
})

// const main = async () =>{
//     const task = await Task.findById('5e9093b26b5a203530387da2')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('5e8b438e108f892eecf271f6')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()