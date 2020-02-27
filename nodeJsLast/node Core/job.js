 const eventEmitter = require('events')
 class job extends eventEmitter
 {
 	constructor(ops)//this constructor calls a listener 
 	{
 		super(ops)
 		this.on('start',()=>{
 			this.process()//listener is calling the process function
 		})
 	}
 	process()
 	{
 		setTimeout(()=>{//here "()=>" is a function with no parameter
 			//emulate the delay of the job
 			this.emit('done',{completedOn: new Date() })//.emit is creating an event
 		}, 700)
 	}
 }
 module.exports = job