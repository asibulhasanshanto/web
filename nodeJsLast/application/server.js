const mongoose = require('mongoose')
const app = require("./app");
const dotenv = require("dotenv")


dotenv.config({path: "./config.env"})
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true
})
.then(() => console.log("Successfully connected!"))
.catch(err => console.log("connection failed!"))

const port = process.env.PORT || 3000;
app.listen(port)