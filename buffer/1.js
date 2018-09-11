//创建一个buffer对象,new Buffer([size])
//分配一个size长度的类数组，分配size的buffer长度是固定的；不能更改
/*var bf = new Buffer(5)  
console.log(bf) //<Buffer 00 00 00 00 00>
bf[6] = 10;
console.log(bf) //无变化：<Buffer 00 00 00 00 00>
bf[1] = 3;
console.log(bf) //有变化:<Buffer 00 03 00 00 00>*/

//new Buffer(array)
/*var bf = new Buffer([1,2,3])
console.log(bf) //<Buffer 01 02 03>
bf[10] = 10
console.log(bf) //无变化 <Buffer 01 02 03>*/

//new Buffer(string,[encoding]),encoding默认就是utf-8
/*var bf = new Buffer('qianduan','utf-8')
console.log(bf) //<Buffer 71 69 61 6e 64 75 61 6e>
for(var i=0; i<bf.length;i++){  //bf.length获取的字节数
	console.log(bf[i]) //113 105 97 110 100 117 97 110
	console.log(bf[i].toString(16)) //71 69 61 6e 64 75 61 6e
	console.log(String.fromCharCode(bf[i])) //q i a n d u a n
}*/

/*var str2 = "qianduan"
var bf2 = new Buffer("qianduan")
console.log(str2.length) //8
console.log(bf2.length) //8
var str3 = "前端"
var bf3 = new Buffer("前端")
console.log(str3.length) //2
console.log(bf3.length) //6*/

//buf.write(string,[offset],[length],[encoding])
//根据参数offset偏移量和指定的encoding编码方式，将string写入buffer
// var str = 'qianduan'
// var bf = new Buffer(8)
// console.log(new Buffer(str)) //<Buffer 71 69 61 6e 64 75 61 6e>
// bf.write(str)
// console.log(bf) //<Buffer 71 69 61 6e 64 75 61 6e>
// bf.write(str,1)
// console.log(bf) //<Buffer 00 71 69 61 6e 64 75 61>
// bf.write(str,1,3)
// console.log(bf) //<Buffer 00 71 69 61 00 00 00 00>


// //buf.toString([encoding],[start],[end])
// var bf = new Buffer('qianduan')
// console.log(bf.toString())  //qianduan
// console.log(bf.toString('utf-8',1,3)) // ia
// var bf2 = new Buffer('前端')
// console.log(bf2.toString()) //前端
// console.log(bf2.toString('utf-8',1)) //��端

// //buf.toJSON()
// var bf3 = new Buffer('qianduan')
// console.log(bf3.toJSON()) //{ type: 'Buffer',data: [ 113, 105, 97, 110, 100, 117, 97, 110 ] }

// //buf.slice(start,end) 从第start开始截取到end位置
// var bf4 = new Buffer('qianduan')
// console.log(bf4.slice(2,4))  //<Buffer 61 6e>

// //buf.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd]) 进行buffer的拷贝
// var bf5 = new Buffer(10)
// bf4.copy(bf5)
// console.log(bf5) //<Buffer 71 69 61 6e 64 75 61 6e 00 00>
// bf5[0] = 2
// console.log(bf5) //<Buffer 02 69 61 6e 64 75 61 6e 00 00> 修改并不影响bf4
// console.log(bf4) //<Buffer 71 69 61 6e 64 75 61 6e>
// 


//buffer类方法，静态方法
//buf.isEncoding(encoding)，如果给定的encoding有效返回true，否则返回true
console.log(Buffer.isEncoding('utf-8')) //true
console.log(Buffer.isEncoding('gbk')) //false
//buf.isBuffer(obj) 测试obj是否为buffer
var arr = [1,2,3];
var bf = new Buffer(10);
console.log(Buffer.isBuffer(arr)) //false
console.log(Buffer.isBuffer(bf)) //true
//buf.byteLength(string,[encoding]) 返回字符串byte(子节)长度
var str = '前端'
console.log(str.length) //2
console.log(Buffer.byteLength(str)) //6
//buf.concat(list,[totalLen]) 
//返回一个保存着将传入buffer数组中的所有bugger对象拼接在一起的buffer对象
var str1="qianduan"
var str2="前端"
var list = [new Buffer(str1),new Buffer(str2)]
console.log(list) //[ <Buffer 71 69 61 6e 64 75 61 6e>, <Buffer e5 89 8d e7 ab af> ]
var bf2 = Buffer.concat(list)
console.log(bf2) //<Buffer 71 69 61 6e 64 75 61 6e e5 89 8d e7 ab af>