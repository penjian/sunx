//回调函数
var fs = require("fs");

//异步
fs.readFile('C:/Users/Administrator/WebstormProjects/NoJS/sun.txt',function (err,data) {
    if(err){
        console.log(err.message);
    }

    console.log(data.toString());
    console.log("程序借宿")
})

///同步
 var suns=fs.readFileSync('C:/Users/Administrator/WebstormProjects/NoJS/sun.txt');

console.log(suns.toString()+"dsdsd");