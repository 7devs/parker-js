//引入express 包
var express = require('express')
    bodyParser = require('body-parser'),
    app = express();

// post 数据解析
app.use(bodyParser.urlencoded({
    extended false
}));

//路由表
//GET/
app.get('/',function(req,res,next){
    res.send('index');
    next();
});

//POST/test
app.post('/test',function(req,res,next){
    res.status(200).send({
        method:'POST',
        path:req.s
    })
})
