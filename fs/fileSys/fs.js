let fs = require('fs');
// fs.readFile('test.txt', 'utf-8', function (err, data) {   //异步
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('读取到的文本信息是：'+data);
//         let buf = Buffer.from(data, 'utf-8');
//         console.log(buf)
//     }
// });
let readMe = fs.readFileSync('test.txt','utf-8')  //同步
console.log(readMe)


//fs模块：读取文本信息
fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('读取到的文本信息是：'+data);
        var buf = Buffer.from(data, 'utf-8');
        console.log(buf)
    }
});
//fs模块：写文件
var data = 'Hello, Node.js';
fs.writeFile('test.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
//fs模块:增加内容
fs.appendFile('test.txt', '曹静曹静曹静曹静', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
})
//fs模块：读取二进制信息
fs.readFile('cloud.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});
//删除文件
// fs.unlink('2.txt',function(err){
//     if(err){
//         console.log('删除失败')
//     }else{
//         console.log('删除成功')
//     }
// })
fs.writeFileSync('write.txt','write!!!!!!!')
//重命名
// fs.rename('write.txt','write.new.txt',()=>{
//     console.log(arguments)
// })
//查看文件状态
// fs.stat('write.txt',()=>{
//     console.log(1231313132)
//     console.log(arguments)
// })
//监听文件变化
fs.watch('write.txt',(ev,fn)=>{
    console.log(ev)
    if(fn){
        console.log(`${fn}发生了改变`)
    }else{
        console.log('....')
    }
})