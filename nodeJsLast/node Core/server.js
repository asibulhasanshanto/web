const http = require('http')// loads the core http module for the server
const port = 3000
http.createServer((req, res) =>{//creates a server with a callback function which contains the response handler code
	res.writeHead(200, {'Content-Type': 'text/plain'})//set the right header and status code
	res.end('Hello\n')//output Hello World with the line end symbol
}).listen(port)//make the server accept requests

console.log(`Server running at http://localhost:${port}/`)