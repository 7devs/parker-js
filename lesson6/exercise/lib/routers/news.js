var router = require('express').Router() // 引入 Express 的路由处理
    newsModel = require('../models/news.js'); // 引入数据模型

router.route('/')
    .get(function(req, res, next) {
        res.status(200).send(newsModel)
    });

    router.route('/:id')
        .get(function(req,res,next){
          var id=req.params.id-1;
          var news=newsModel[id];
          if(news){
            res.status(200).send(news);
          }else{
            res.status(404).send('Not Exist');
          }

        });

    router.route('/:id')
        .delete(function(req,res,next){
          var id=req.params.id-1;
          var news=newsModel[id];
          if(news){
            newsModel.splice(id,1);
            console.log('delete successfully');
            console.log('删除后的数据为：',newsModel);
            res.status(200).end();
          }else{
            res.status(404).send('error, data not found');
          }
        });

    module.exports=router;
