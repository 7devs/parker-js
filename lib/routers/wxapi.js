var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
        explicitArray:false
    }),function(req,res,next){
        var data = req.body.xml;
        var content = data.content;
        //TODO:xxxx
        res.append('Content-Type','text/xml');
        res.send(xml({
            xml:[
                {ToUserName:{_cdata:data.fromusername}},
                {FromUserName:{_cdata:data.tousername}},
                {CreateTime: +new Date()}, //日期转数值+
                {MsgType:{_cdata:'text'}},
                {Content:{_cdata:'Hello'}}
            ]
        }));
    })                                           //用来解析
    .get(function(req,res,next){                              //用来验证
        var str = req.query.echostr;
        res.send(str);
    });

    module.exports = router;
