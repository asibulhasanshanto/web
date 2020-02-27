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

app.use((req,res,next) =>{// this is a middleware.middlewire is just an object
	console.log(`${req.method}: ${req.url}`)
	next()
})
app.use((req,res,next) =>{
	if(req.query.api_key) {//if any key passes when calling then this function works otherwise it stops
		next()				//procedure of calling with api key=> localhost:3000/accounts?api_key=123 -i
	}
	else
	{
		res.status(401).send({msg: 'not authorized'})
	}
})
app.get('/', (req, res) => {//these app.get functions are called endpoints
  res.send({msg:'hello world'})
})
app.get('/accounts', (req,res,next)=>{
	console.log('accounts in the middlewire')
	next(new Error('oops'))
},
(req, res) => {
  res.send({msg:'accounts'})
})
app.get('/transactions', (req, res) => {//these app.get functions are called endpoints
  res.send({msg:'transactions'})
})
app.use((error,req,res,next)=>{//error handaler
	res.status(500).send(error)
})
app.listen(3000)
//order of iddleware function is important..

/*
middleware creation
===================
const middleware = (request, response, next) => {
  // Modify request or response
  // Execute the callback when done
  next()
}
app.use(middleware)

*/