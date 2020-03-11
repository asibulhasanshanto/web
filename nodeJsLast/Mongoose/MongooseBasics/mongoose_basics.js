const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongooseTest')

let Book = mongoose.model('Book', { name: String})
let practicalNotebook = new Book({name: 'practical book'})

practicalNotebook.save((err, results)=>{
	if(err) {
		console.error(err)
		process.exit(1)
	} else {
		console.log('saved : ', results)
		process.exit(0)
	}
})