# Node.js
## 特点
* 事件驱动
* 非阻塞I/O
![avatar](https://mirror198829.github.io/Node.js/img/module.png)
## Nodejs的web服务器
* 可以直接作为web服务器，不像php或者java这种有另外如apache、nginx、iis
* nodejs处理请求的逻辑
* 负责web服务器各种'配置'（配置通过代码完成，并不像php中有配置文件来完成）
## 模块概念
#### 什么叫模块
一个文件就是一个模块，每个模块都有自己的作用域  
使用`var`声明的一个变量，并不是全局的，而是属于当前模块下  
声明全局变量可以如下：
``` javascript
var a =100;
global.a = 200;
console.log(a); //100
console.log(global.a);//200
```
#### 模块加载机制
`require(模块)`
> 路径
``` javascript
require('./moduleA.js') //相对路径
require('moduleA.js') //错误！！！如果不加./就代表加载nodejs核心模块或者node_modules
require('E:/code/Node.js/moduleA.js') //绝对路径
```
> 路径查找步骤
`require('./module')`  
1.先按照加载的模块的文件名进行查找   
2.如果没有找到，则会在模块名称后面加上.js后缀，进行查找，这也是为什么有时会省略.js的原因  
3.如果还没有，则会在文件名后面加上.json后缀，进行查找  
4.如果还没有，则会在文件名后面加上.node后缀，进行查找  
文件名称 -> .js -> .json -> .node
#### 模块暴露exports
module对象：保存提供和当前模块有关的一些信息  
``` javascript
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'E:\\code\\Node.js\\moduleDemo.js',
  loaded: false,
  children:
   [ Module {
       id: 'E:\\code\\Node.js\\moduleA.js',
       exports: {},
       parent: [Circular],
       filename: 'E:\\code\\Node.js\\moduleA.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths:
   [ 'E:\\code\\Node.js\\node_modules',
     'E:\\code\\node_modules',
     'E:\\node_modules' ] }
```
其中，有一个子对象：exports对象  
``` javascript
//moduleA.js 子模块
var a = 100;
module.exports.a = a; //写成exports.a = a ,但切记不要修改exports对象的引用地址

//moduleDemo.js 父模块
var data = require('./moduleA.js');//这个方法的返回值，就是被加载模块中的module.exports
console.log(data)   //{a:100}
```
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
console.log(__filename)//获取当前文件的绝对路径   E：\code\Node.js\global.js , __filename不属于全局的，只属于当前模块下的
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
## Buffer类
一个用于更好的操作二进制数据的类（全局类）  
  -我们操作的文件或者网络数据，其实操作的是二进制数据流。Nodejs提供了一个Buffer更加方便的去操作数据流。  
  -类数组
* new Buffer([size])
``` javascript
//创建一个buffer对象,new Buffer([size])
//分配一个size长度的类数组，分配size的buffer长度是固定的；不能更改
var bf = new Buffer(5)  
console.log(bf) //<Buffer 00 00 00 00 00>
bf[6] = 10;
console.log(bf) //无变化：<Buffer 00 00 00 00 00>
bf[1] = 3;
console.log(bf) //有变化:<Buffer 00 03 00 00 00>
```
* new Buffer(array)
``` javascript
//new Buffer(array)
var bf = new Buffer([1,2,3])
console.log(bf) //<Buffer 01 02 03>
bf[10] = 10
console.log(bf) //无变化 <Buffer 01 02 03>
```
* new Buffer(string,[encoding])
``` javascript
//new Buffer(string,[encoding]),encoding默认就是utf-8
var bf = new Buffer('qianduan','utf-8')
console.log(bf) //<Buffer 71 69 61 6e 64 75 61 6e>
for(var i=0; i<bf.length;i++){  //bf.length获取的字节数
	console.log(bf[i]) //113 105 97 110 100 117 97 110
	console.log(bf[i].toString(16)) //71 69 61 6e 64 75 61 6e
	console.log(String.fromCharCode(bf[i])) //q i a n d u a n
}
```
* buf.length 
buffer的子节大小
``` javascript
var str2 = "qianduan"
var bf2 = new Buffer("qianduan")
console.log(str2.length) //8
console.log(bf2.length) //8
var str3 = "前端"
var bf3 = new Buffer("前端")
console.log(str3.length) //2
console.log(bf3.length) //6
```
* buf.write(string,[offset],[length],[encoding])
``` javascript
//buf.write(string,[offset],[length],[encoding])
//根据参数offset偏移量和指定的encoding编码方式，将string写入buffer
var str = 'qianduan'
var bf = new Buffer(8)
console.log(new Buffer(str)) //<Buffer 71 69 61 6e 64 75 61 6e>
bf.write(str)
console.log(bf) //<Buffer 71 69 61 6e 64 75 61 6e>
bf.write(str,1)
console.log(bf) //<Buffer 00 71 69 61 6e 64 75 61>
bf.write(str,1,3)
console.log(bf) //<Buffer 00 71 69 61 00 00 00 00>
```
## 参考文档
* 廖雪峰：https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501497361a4e77c055f5c4a8da2d5a1868df36ad1000
* 官方文档：
http://nodejs.cn/api/timers.html#timers_clearimmediate_immediate
# Express框架
