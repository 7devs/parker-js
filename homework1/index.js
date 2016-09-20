// 引入 express 包
var express = require('express')
    bodyParser = require('body-parser'),
    app = express();

// post 数据解析
app.use(bodyParser.urlencoded({
    extended: false
}));

// 路由表
app.use('/user', require('./lib/routers/users'));
app.use('/album', require('./lib/routers/albums'));
app.use('/*', function(request, response, next) {
    response.status(400).send('Not Found');
});


app.listen(3000, function() {
    console.log('homework1 is running...');
});
