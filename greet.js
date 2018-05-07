//进程模块
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
let greet =  require('./hello')
greet('曹静')
setTimeout(()=>{
	console.log('我是es6语法')
	let arr = [1,3,4]
	let arr2 = [9.9,0,...arr]
	console.log(arr2)
},2000)

