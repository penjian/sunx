var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',//url
    user     : 'root',//用户名
    password : '123456',//密码
    port: '3306',//端口
    database: 'aaaax',//数据库名
});

connection.connect();

var  sql = 'SELECT * FROM user';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }
    console.log(result);
});

connection.end();