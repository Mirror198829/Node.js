var express = require('express')
var app = express()
app.use(express.static('./public'))
app.get('/',(req,res) => {
	res.send('hello world')
})
//动态路由
app.get('/newscontent/:aid',(req,res) => {
	//req.params获取动态路由的传值
	let params = req.params.aid
	res.send('newscontent模块，参数是：' + params)
})
//获取get传值 http://localhost:3000/product?aid=123
app.get('/product',(req,res) => {
	//通过query获取参数
	let params = req.query
	console.log(params)
	res.send('product模块，参数是：' + params)
})
app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!');
})
app.listen(1000,function afterListen(){
	console.log('express running on http://locahost:1000')
})