//路径
console.log(__filename);
//目录
console.log(__dirname);
//延迟2秒
function printHello(){
    console.log("Hello,World!");
}
setTimeout(printHello,2000);

function printHello2(){
    console.log("Hello, World!");
}
var t = setTimeout(pringtHello,2000);
//清除定时器
clearTimeout(t);