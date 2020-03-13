const express = require("express")
const userRouter = require("./routes/userRoute")

const app = express()
app.use(express.json())
app.use("/application/user", userRouter)

module.exports = app