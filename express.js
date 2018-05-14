var express = require('express')
var app = express()
app.use(express.static('./public'))
app.get('/',(req,res) => {
	res.end('hello world')
})
app.use((req, res, next) => {
  res.status(404).send('Sorry cant find that!');
})
app.listen(1000,function afterListen(){
	console.log('express running on http://locahost:1000')
})