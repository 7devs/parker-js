module.exports = function(data){
    var msgType = data.msgtype;
    var reContent;

    switch(msgType) {
        case 'text':
            reContent = require('./text-parser.js')(data.content);
        break;
        case 'voice':
            reContent = require('./vioce-parser.js')(data.recognition);
        break;
        case 'video':
            reContent = require('./video-parser.js')(data.content);
        break;
        case 'location':
            reContent = require('./location-parser.js')(data.content);
        break;
        case 'shortvideo':
            reContent = require('./shortvideo-parser.js')(data.content);
        default:
            reContent = 'I have no idea';
        break;
    }
    return reContent;
}
