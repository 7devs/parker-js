var router = require('express').Router(),
    xml = require('xml'),
    xmlBodyParser = require('express-xml-bodyparser');

router.route('/')
    .post(xmlBodyParser({
        explicitArray:false
    }),function(req,res,next){
        var data = req.body.xml;
        var content = data.content;
            if(content==='1') {
                res.append('Content-Type', 'text/xml');
                res.send(xml({
                    xml:[
                        {ToUserName:{_cdata:data.fromusername}},
                        {FromUserName:{_cdata:data.tousername}},
                        {CreateTime: +new Date()}, //日期转数值+
                        {MsgType:{_cdata:'text'}},
                        {Content:{_cdata:'一帆风顺'}}
                    ]
                }));
            };
            if(content==='2') {
                res.append('Content-Type', 'text/xml');
                res.send(xml({
                    xml:[
                        {ToUserName:{_cdata:data.fromusername}},
                        {FromUserName:{_cdata:data.tousername}},
                        {CreateTime: +new Date()}, //日期转数值+
                        {MsgType:{_cdata:'text'}},
                        {Content:{_cdata:'二龙腾飞'}}
                    ]
                }));
            };
            if(content==='3') {
                    res.append('Content-Type', 'text/xml');
                    res.send(xml({
                        xml:[
                            {ToUserName:{_cdata:data.fromusername}},
                            {FromUserName:{_cdata:data.tousername}},
                            {CreateTime: +new Date()}, //日期转数值+
                            {MsgType:{_cdata:'text'}},
                            {Content:{_cdata:'三阳开泰'}}
                        ]
                    }));
                };
            if(content==='4') {
                    res.append('Content-Type', 'text/xml');
                    res.send(xml({
                        xml:[
                            {ToUserName:{_cdata:data.fromusername}},
                            {FromUserName:{_cdata:data.tousername}},
                            {CreateTime: +new Date()}, //日期转数值+
                            {MsgType:{_cdata:'text'}},
                            {Content:{_cdata:'四季平安'}}
                        ]
                    }));
                    };
            if(content==='5') {
                  res.append('Content-Type', 'text/xml');
                  res.send(xml({
                      xml:[
                            {ToUserName:{_cdata:data.fromusername}},
                            {FromUserName:{_cdata:data.tousername}},
                            {CreateTime: +new Date()}, //日期转数值+
                            {MsgType:{_cdata:'text'}},
                            {Content:{_cdata:'五福临门'}}
                       ]
                   }));
                };
            if(content==='6') {
                  res.append('Content-Type', 'text/xml');
                  res.send(xml({
                      xml:[
                            {ToUserName:{_cdata:data.fromusername}},
                            {FromUserName:{_cdata:data.tousername}},
                            {CreateTime: +new Date()}, //日期转数值+
                            {MsgType:{_cdata:'text'}},
                            {Content:{_cdata:'六六大顺'}}
                        ]
                    }));
                };
            if(content==='7') {
                  res.append('Content-Type', 'text/xml');
                  res.send(xml({
                      xml:[
                            {ToUserName:{_cdata:data.fromusername}},
                            {FromUserName:{_cdata:data.tousername}},
                            {CreateTime: +new Date()}, //日期转数值+
                            {MsgType:{_cdata:'text'}},
                            {Content:{_cdata:'七星高照'}}
                         ]
                     }));
                };
            if(content==='8') {
                  res.append('Content-Type', 'text/xml');
                  res.send(xml({
                      xml:[
                            {ToUserName:{_cdata:data.fromusername}},
                            {FromUserName:{_cdata:data.tousername}},
                            {CreateTime: +new Date()}, //日期转数值+
                            {MsgType:{_cdata:'text'}},
                            {Content:{_cdata:'八方来财'}}
                          ]
                      }));
                };
            if(content==='9') {
                  res.append('Content-Type', 'text/xml');
                  res.send(xml({
                      xml:[
                            {ToUserName:{_cdata:data.fromusername}},
                            {FromUserName:{_cdata:data.tousername}},
                            {CreateTime: +new Date()}, //日期转数值+
                            {MsgType:{_cdata:'text'}},
                            {Content:{_cdata:'九九同心'}}
                          ]
                      }))
            }

            else {
                res.append('Content-Type', 'text/xml');
                res.send(xml({
                    xml:[
                          {ToUserName:{_cdata:data.fromusername}},
                          {FromUserName:{_cdata:data.tousername}},
                          {CreateTime: +new Date()}, //日期转数值+
                          {MsgType:{_cdata:'text'}},
                          {Content:{_cdata:'呵呵哒'}}
                        ]
                    }));
                };
    });

router.route('/')
    .get(function(req,res,next){
        var str = req.query.echostr;
        res.send(str);
    });

module.exports = router;
