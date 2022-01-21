//导入http模块
const http = require('http')
//创建web服务器实例
const server = http.createServer()
//为服务器实例绑定request事件监听客户端请求
/* server.on('request',function(req,res){
    console.log('someone visit our web server');
}) */
server.on('request', (req,res) => {
    const url =req.url
    const method=req.method
    const str =`your request url is ${url},and rquest method is ${method},测试中文乱码问题`
    res.setHeader('Content-Type','text/html;charset=utf-8')//解决中文乱码
    console.log(str);
    //调用res.en()方法向客户端响应一些内容
    res.end(str)
})
//启动服务器
/* server.listen(8080,function(){
    console.log('server running at http://127.0.0.1:8080');
}) */
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})