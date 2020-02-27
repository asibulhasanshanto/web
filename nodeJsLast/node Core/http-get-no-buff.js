//this file readin data from a webpage and showing it without storing to any buffer variable.

const http = require('http')
const url = 'http://nodeprogram.com'

http.get(url,(response) =>{
	response.on('data',(chunk) =>{
		console.log(chunk.toString('utf8'))
	})
	response.on('end',() =>{
		console.log('response has ended')
	})
}).on('error',(error)=>{
	console.error(`Got error: ${error message}`)
})