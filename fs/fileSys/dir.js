var fs = require('fs')
//操作文件夹
//fs.mkdir(path,[mode],callback) 创建文件夹
//fs.mkdirSync(path,[mode])
fs.mkdir('./1',()=>{
	console.log(arguments)
})
//fs.readdir(path,callback)读取文件夹
//fs.readdirSync(path)
fs.readdir('./',(err,fileLst)=>{
	console.log(fileLst)
})
//fs.rmdir(path,callback)删除文件架
//fs.rmdirSync(path)
fs.rmdir('./1',()=>{
	console.log(arguments)
})
