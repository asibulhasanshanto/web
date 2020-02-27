const eventEmitter = require('events')//imports event module

class Emmiter extends eventEmitter
{}
emitter = new Emmiter()

emitter.on('knock',function(){//emitter.on is a listener..
	console.log("Who\'s there?")
})
emitter.on('knock',function(){
	console.log("go away!")
})

emitter.emit('knock')
emitter.emit('knock')