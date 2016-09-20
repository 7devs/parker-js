var router = require('express').Router() // 引入 Express 的路由处理
var albumsModel = require('../models/albums.js'); // 引入数据模型


router.route('/')
    .get(function(req, res, next) {
        res.status(200).send(albumsModel)
    });                                                     //返回全部唱片


router.route('/:id')
    .get(function(req, res, next) {
var id = req.params.id,
var index = id - 1;
    if(albumsModel[index]) {
        res.status(200).send(albumsModel[index]);           //返回指定索引的唱片数据
    } else {
        res.status(404).send('Not Found');     //若唱片不存在，返回状态码为 404 的 Not Found 信息
        };
    });


    .put(function(req, res, next) {
var id = req.params.id,
var index = id - 1;
    if(albumsModel[index]) {
        newLength = parseInt(req.body.length);
        newTitle = req.body.title
        albumsModel[index].length = newLength;
        albumsModel[index].title = newTitle;
        res.status(200).send(albumsModel[index]);  //修改指定索引唱片的时长和标题并返回结果
    } else {
        res.status(404).send('Not Found');       //若唱片不存在，返回状态码为 404 的 Not Found 信息
        };
    });

router.route('/longerSong')
    .get(function(req, res, next) {
var song3List = new Array();;
    for(var i = 0; i < albumsModel.length; i++) {
        if(albumsModel[i].length > 180) {
        song3List.push(albumsModel[i])};
        };
        res.status(200).send(song3List);              //返回歌曲时间大于3分钟的歌曲
    });

router.route('/singer/:name')
    .get(function(req, res, next) {
var singerSearch = req.params.name,
var ss = new RegExp(singerSearch, "g"), // attributes g 全局匹配
var titleList = new Array();
    for(i = 0; i < albumsModel.length; i++) {
        if(ss.test(albumsModel[i].singer) === true ) {
        titleList.push(albumsModel[i]);
        };
    };
    if (titleList.length > 0 ) {
        res.status(200).send(titleList); //返回指定歌手的全部歌曲
    } else {
        res.status(404).send('Not Found');//如果歌手不存在，返回Not Found
        };
    });

router.route('/search?type=xxx')
    .get(function(req, res, next) {
var typeSearch = req.query.type,
var ts = new RegExp(typeSearch),
var songList = new Array();
    for(i = 0; i < albumsModel.length; i++) {
        if(ts.test(albumsModel[i].type) === true ) {
            songList.push(albumsModel[i]);
            };
        };
        if (songList.length > 0 ) {
            res.status(200).send(songList);           //获取指定分类下的歌曲列表
        } else {
            res.status(404).send('Not Found'); //若分类不存在，返回状态码为 404 的 Not Found 信息
            };
        });
