/*
express project structure
=========================
app.js: main file, houses the embedded server and application logic
/public: contains static files to be served by the embedded server
/routes: houses custom routing for the REST API servers (not needed for a web app)
/routes/users.js: endpoint/routes for resources such as users
/views: contains templates that can be processed by a template engine (not needed for REST APIs)
/package.json: project manifest
/www: boot up script folder


express app structure
=====================
Imports
Instantiations
Configurations
Middleware
Routes
Error handlers
Server bootup or server export

*/
const express = require('express') 
const app = express() 

app.use((req,res,next) =>{// this is a middleware
	console.log(`${req.method}: ${req.url}`)
	next()
})
app.get('/', (req, res) => {//these app.get functions are called endpoints
  res.send({msg:'hello world'})
})
app.get('/accounts', (req, res) => {//these app.get functions are called endpoints
  res.send({msg:'hello world'})
})

app.listen(3000)
