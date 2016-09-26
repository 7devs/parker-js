module.exports = function(content){
    var reContent;
    switch (content) {
        case '1':
            reContent = '111';
        case '2':
            reContent = '222';
        case '3':
            reContent = '333';
        case '4':
            reContent = '444';
            break;
        default:
            reContent = 'xxx';
            break;
    }
    return reContent;
}
