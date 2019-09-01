let mysql = require("mysql")
let mysql_config = {
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"root",
    database:"exam"
}//数据库连接配置

let pool = mysql.createPool(mysql_config); //创建连接池

module.exports = {
    pool
}