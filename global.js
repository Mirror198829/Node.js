console.log(__dirname) //获取当前文件所在文件夹的路径
console.log(__filename)//获取当前文件的路径
let timer = setInterval(() => {console.log('我是谁？我在哪儿')} , 500)
setTimeout(()=>{
	clearInterval(timer)
},5000)


//回调函数
function showName(fun,name){
	fun(name)
}
function callName(name){
	console.log('my name is '+name)
}
showName(callName,'nodejs')

function sum(a,b){
	console.log(`总数是：${a+b}`)
}
sum(10,30)