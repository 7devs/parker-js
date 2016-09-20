var router = require('express').Router() // 引入 Express 的路由处理
    usersModel = require('../models/users.js'); // 引入数据模型

router.route('/')  //返回全部用户
    .get(function(req, res, next) {
        res.status(200).send(usersModel)
    });

router.route('/:id')  //获取指定索引用户的全名（firstName + lastName）
    .get(function(req,res,next){
var id = req.params.id - 1;
var users = usersModel[id];
    if(users){
        res.status(200).send(users['firstName'] + users['lastName']);
     }else{
        res.status(404).send('Not Found'); //若用户不存在，返回状态码为 404 的 Not Found 信息
        };
    });

router.route('/:id')                                        //修改指定索引用户的年龄并返回结果（key为age）
    .put(function(req,res,next){
        //console.log("PUT");
var index = req.params.id - 1;
var users = usersModel[index];
    users.age = req.body.age;  //users.age = changeage;
    if(usersModel[index]) {
        if(typeof(usersModel[index].age) === "number") {
            var newAge = parseInt(req.body.age);
            usersModel[index].age = newAge;
            res.status(200).send(usersModel[index]);         //若给定的年龄不是数值型，返回错误信息；
    }else{
        res.status(404).send('Not Found');      //若用户不存在，返回状态码为 404 的 Not Found 信息
        };
    };
});


router.route('/count/:sex')  //获取指定性别的人数统计
    .get(function(req, res, next) {
var sex = req.params.sex;
var sexTotal = 0;
    for(var i = 0; i < usersModel.length; i++) {
    if(usersModel[i].sex === sex) {
        sexTotal++;}
        };
        res.status(200).send(sexTotal.toString());
    });


router.route('/ageAvg')  //返回所有用户年龄平均值
    .get(function(req, res, next) {
var ageTotal = 0;
var ageAvg = 0;
var userNum = 0;

    for(var i = 0; i < usersModel.length; i++) {
        ageTotal = usersModel[i].age + ageTotal;
        userNum ++;
    };
    ageAvg = ageTotal / userNum;
        res.status(200).send(ageAvg.toString());
    });
    //返回符合 company 搜索条件的用户列表

router.route('/search?company=xxx')
    .get(function(req, res, next) {
var companySearch = req.query.company;
var cs = new RegExp(companySearch, "i");    //将搜索 字符串 转化为 RegExP,不区分大小写
var userList = new Array();
    for(i = 0; i < userModel.length; i++) {
        if(cs.test(userModel[i].company) === true ) {
            userList.push(userModel[i]);  // 搜索，返回公司名称包含搜索字符串的用户列表
            };
        };
        if (userList.length > 0 ) {
            res.status(200).send(userList);
        } else {
            res.status(404).send('Not Found'); //如果用户不存在，返回 Not Found
        };

    });

    module.exports=router;
