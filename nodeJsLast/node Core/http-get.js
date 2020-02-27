//this file can get data from a web page and store it in a variable called raw data..

const http = require('http')
const url = 'http://nodeprogram.com'
http.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => { //this listener is responsing to data
    rawData += chunk
  })
  response.on('end', () => {//this listener will response when the read operation is finished
    console.log(rawData)
  })
}).on('error', (error) => {//listens on occurance of error
  console.error(`Got error: ${error.message}`)
})