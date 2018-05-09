var http = require('http');
var fs = require('fs')
var onRequest = (req, res) => {
    /*
    Content-type:text/json
     */
    
    /*res.writeHead(200,{"Content-Type":"text/json"})
    let jsonData = {name:'ccc',age:18}
    let jsonStr = JSON.stringify(jsonData)
    res.write(jsonStr)
    res.end()*/
    
    /*
    Content-type:text/html
     */
    // res.writeHead(200,{'Content-Type':'text/html'})
    // var myReadStream = fs.createReadStream(__dirname + '/index.html')
    // myReadStream.pipe(res)
     console.log("Request received.")
    // 主页
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('Welcome')
        res.end("<h3 style='color:yellow'>Welcome to the homepage!</h3>");
    }

    // About页面
    else if (req.url == "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1 style='color:red'>Welcome to the about page!</h1>");
    }

    // 404错误
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 error! File not found.");
    }

}
var server = http.createServer(onRequest)
server.listen(3000, "127.0.0.1");
console.log('Server running on port 127.0.0.1:3000');