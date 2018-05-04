var events = require('events')
var myEmitter = new events.EventEmitter()
myEmitter.on('someEvent',function(message){
	console.log(message)
})
myEmitter.emit('someEvent','the someEvent was emitted')

var util = require('util')

