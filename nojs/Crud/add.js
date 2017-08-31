var mysql = require('mysql');
 var connection = mysql.createConnection({
     host :'localhost',
     user:'root',
     password:'123456',
     port:'3306',
     database:'aaaax',
 });

 connection.connect();
 //添加
 var  addSql = 'INSERT INTO user (id,name,passwd,age,phone) VALUES(0,?,?,?,?)';
 var addSqlParams = ['唐绕','1111111','66','9999999999'];
 //更新
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
//删除
//var delSql = 'DELETE FROM websites where id=6';
 connection.query(addSql,addSqlParams,function (err,result) {
     if (err){
         console.log('[INSERT ERROR]--',err.message);
         result;
     }
     console.log('INSERT ID',result);
 })s