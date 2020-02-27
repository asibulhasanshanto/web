var Job = require('./job')

var job = new Job();

job.on('done',function(details){
	console.log('weekly email job has completed at ',details.completedOn)
	//job.removeAllListeners()
})
job.emit('start')