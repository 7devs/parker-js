var app = require('express')(),
    conf = require('./lib/config'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/wxapi', require('./lib/routers/wxapi.js'));

app.listen(8012, function(err) {
    console.log('listenning at 8012...');
})
