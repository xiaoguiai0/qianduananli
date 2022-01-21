 //导入fs模块，用来操作文件
const fs =require('fs')  
//导入path模块  
const path =require('path')
fs.readFile('./2.txt','utf8',function(err,dataStr){
    //读取成功，err值为null，失败err值为错误对象，dataStr值为undefined
    console.log(err);
    console.log('-----');
    //打印成功的结果
    console.log(dataStr);
})  
/* 调用函数读取文件，参数一读取文件存放路径，参数二读取文件使用编码格式一般为utf8，
参数三回调函数接受读取失败和成功的结果err dataStr */
//写入文件方法，写入成功err值为null，写入失败，err值为错误对象
fs.writeFile(path.join(__dirname,'2.txt'),'走出亚洲，走向世界',function(err){
    if(err){
        return console.log(err.message);
    }
    console.log(err);
})
