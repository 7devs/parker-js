module.exports = function(data){
    var msgType = data.msgtype;
    var reContent;

    switch(msgType) {
        case 'text':
            reContente = require('./text-parser.js')(data.content);
        break;
        case 'voice':
            reContente = require('./vioce-parser.js')(data.recognition);
        break;
        case 'video':
            reContente = require('./video-parser.js')(data.content);
        break;
        case 'location':
            reContente = require('./location-parser.js')(data.content);
        break;
        case 'shortvideo':
            reContente = require('./shortvideo-parser.js')(data.content);
        default:
            reContent = 'I have no idea';
        break;
    }
    return reContent;
}
