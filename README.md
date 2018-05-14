💥
# Node.js
## 特点
* 事件驱动
* 非阻塞I/O
![avatar](https://mirror198829.github.io/Node.js/img/module.png)
## Nodejs的web服务器
* 可以直接作为web服务器，不像php或者java这种有另外如apache、nginx、iis
* nodejs处理请求的逻辑
* 负责web服务器各种'配置'（配置通过代码完成，并不像php中有配置文件来完成）
## 基本模块
#### 全局对象 
##### global
在浏览器里：全局对象为`window`。  
在nodejs环境里：全局对象为`global`
``` javascript
> global.console
Console {
  log: [Function: bound ],
  info: [Function: bound ],
  warn: [Function: bound ],
  error: [Function: bound ],
  dir: [Function: bound ],
  time: [Function: bound ],
  timeEnd: [Function: bound ],
  trace: [Function: bound trace],
  assert: [Function: bound ],
  Console: [Function: Console] }
```
##### __dirname  __filename
``` javascript
console.log(__dirname) //获取当前文件所在文件夹的路径  E：\code\Node.js
console.log(__filename)//获取当前文件的路径   E：\code\Node.js\global.js 
```
##### setInterval setTimeout clearInterval clearTimeout
#### process
process代表当前Node.js进程,通过process可以拿到很多有用信息
``` javascript
> process === global.process;
true
> process.version;
'v5.2.0'
> process.platform;
'darwin'
> process.arch;
'x64'
> process.cwd(); //返回当前工作目录
'/Users/michael'
> process.chdir('/private/tmp'); // 切换当前工作目录
undefined
> process.cwd();
'/private/tmp'

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
```
## fs
文件系统模块，负责`读写`文件
#### 读文件
``` javascript
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
```
#### 写文件
``` javascript
var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
```
#### stat
获取文件大小，创建时间等信息，可以使用fs.stat()，它返回一个Stat对象，能告诉我们文件或目录的详细信息。
``` javascript
fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile: ' + stat.isFile()); // 是否是文件:  isFile: true
        console.log('isDirectory: ' + stat.isDirectory());// 是否是目录:isDirectory: false
        if (stat.isFile()) { 
            console.log('size: ' + stat.size);// 文件大小: size: 181
            console.log('birth time: ' + stat.birthtime);// 创建时间, Date对象:birth time: Fri Dec 11 2015 09:43:41 GMT+0800 (CST)
            console.log('modified time: ' + stat.mtime);// 修改时间, Date对象:modified time: Fri Dec 11 2015 12:09:00 GMT+0800 (CST)
        }
    }
}
```
#### 流和管道
流的作用：1.提高性能 2.处理数据
## 参考文档
* 廖雪峰：https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501497361a4e77c055f5c4a8da2d5a1868df36ad1000
* 官方文档：
http://nodejs.cn/api/timers.html#timers_clearimmediate_immediate
# Express框架
