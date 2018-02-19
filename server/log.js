var winstone = require("winston");

module.exports = function (module) {
    return makeLogger(module.filename);
}

function makeLogger(path) {
    if(path.match(/request.js$/)){
        var transports = [
            new winstone.transports.Console({
                timestamp: true,
                colorize: true,
                level: "info"
            }),
            new winstone.transports.File({filename: "debug.log", level: "debug"})
        ];
        return new winstone.Logger({transports: transports});
    }else{
        return new winstone.Logger({
            transports: []
        });
    }
}