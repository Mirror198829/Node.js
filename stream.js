var fs = require('fs')
var myReadStream = fs.createReadStream(__dirname + '/test.txt')
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt')
var writeData = 'hello'
myWriteStream.write(writeData,'utf8')
myWriteStream.end()
myWriteStream.on('finish',()=>{
	console.log('finished')
})
//myReadStream.setEncoding('utf8')      //编码值变成utf8，如果没有设置，则会展示二进制数据
myReadStream.on('data',(chunk) => {				//监听接受数据事件
	console.log('new chunk recevied')
	console.log(chunk)
	myWriteStream.write(chunk)
})
myReadStream.on('end',() => {					//监听接收数据结束
	console.log('数据接收结束！！！')
})