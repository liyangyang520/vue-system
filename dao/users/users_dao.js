let { pool } = require("../../conf/mysqlConf.js")
let {addUser, deleteUser, queryUser } = require('./users_sql.js')

module.exports = {
    add: function (user, callback) { // users表中增加user操作
        let sqlparam = [
            user.headerImg?user.headerImg:"",
            user.username?user.username:"",
            user.password?user.password:"",
            user.addres?user.addres:"",
            user.sex?user.sex:1,
            user.mobile?user.mobile:"",
            user.email?user.email:"",
        ]
        pool.query(addUser, sqlparam, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    deleted: function(params, callback) { // users表中删除指定user操作
        let {id} = params
        let sqlparam = [id]
        pool.query(deleteUser, sqlparam, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    query: function(params, callback) { // users表中查询指定user操作
        let {id} = params
        let sqlparam = [id]
        pool.query(queryUser, sqlparam, function (error, result) {
            if (error) throw error;
            callback(result[0]);
        });
    },
}