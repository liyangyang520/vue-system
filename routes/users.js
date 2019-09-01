var express = require('express');
var router = express.Router();

let { add, deleted, query } = require("../dao/users/users_dao.js"); // 数据库操作
let result = require("../util/result.js") // 最终结果统一格式

/* GET users listing. */
router.get('/', function(req, res, next) { // users 相关接口说明文档页面
  res.render('users', { title: 'usersApi', 
        apiList:[
            {
                url:"users/adduser(添加用户)",
                method:"POST",
                params:{
                    headerImg:"用户头像", 
                    username:"用户名称",
                    addres:"用户地址",
                    sex:"用户性别",
                    mobile:"手机号",
                    email:"邮箱"
                },
                result:{
                    "success": true,
                    "data":``
                }
            },
            {
                url:"users/deleteuser(删除用户)",
                method:"GET",
                params:{
                    id:"用户ID"
                },
                result:{
                    "success": true,
                    "data":``
                }
            },
            {
                url:"users/deleteuser(查询用户)",
                method:"GET",
                params:{
                    id:"用户ID"
                },
                result:{
                    "success": true,
                    "data":`{
                        id: 1,
                        headerImg:"用户头像", 
                        username:"用户名称",
                        addres:"用户地址",
                        sex:"用户性别",
                        mobile:"手机号",
                        email:"邮箱"
                    }`
                }
            },
        ]
    });;
});
// 添加用户 post请求
router.post('/adduser', function(req, res, next) {
  let urlParam = req.body;
  console.log(urlParam);
  add(urlParam,function(success){
    let r =  result.createResult(success, null);
    res.json(r);
  })
});
// 删除指定用户 get请求
router.get('/deleteuser', function(req, res, next) {
  let urlParam = {
    id: req.query.id
  };
  console.log(urlParam);
  deleted(urlParam,function(success){
    let r =  result.createResult(success, null);
    res.json(r);
  })
});
// 获取指定用户信息 get请求
router.get('/queryuser', function(req, res, next) {
  let urlParam = {
    id: req.query.id
  };
  console.log(urlParam);
  query(urlParam,function(success){
    let r =  result.createResult(true, success);
    res.json(r);
  })
});

module.exports = router;
