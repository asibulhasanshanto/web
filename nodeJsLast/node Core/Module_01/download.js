/*
this program downloads data from a webpage and saves them in a file

*/
const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')

const downloadPage = (url= 'http://nodeprogram.com') => {
	console.log('downloading', url)
	const fetchPage = (urlF, callback)=> {//recieves the url
		http.get(urlF,(response) =>{//reads data from web page
			let buff = ''
			response.on('data', (chunk) =>{
				buff += chunk
			})
			response.on('end', () =>{
				callback(null, buff)
			}) 
		}).on('error', (error) =>{//response on error
			console.error(`Got error: ${error.messaage}`)
			callback(error)
		})
	}
	const folderName = uuidv1()

	fs.mkdirSync(folderName)//creates unique folder name
	fetchPage(url, (error, data) =>{
		if(error) return console.log(error)//these two functions below writes data to the function
		fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
		fs.writeFileSync(path.join(__dirname,folderName, 'file.html'), data)
		console.log('downloading is done in folder ', folderName)
	})
}
downloadPage(process.argv[2])//this argv[2] is for sending url through command line interface