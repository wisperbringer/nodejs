var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var ROOT = path.normalize(__dirname);

var server = http.Server(function (req, res) {
    if(!checkAccess(req)){
        res.statusCode = 403;
        res.end("Access denied");
        return;
    }
    sendFileSave(url.parse(req.url).pathname, res);
}).listen(3000);

function checkAccess(req) {
    return url.parse(req.url, true).query.secret == "o_O";
}

function sendFileSave(filePath, res ) {
    try{
        filePath = decodeURIComponent(filePath);
    }catch (e){
        res.statusCode = 400;
        res.end("Bad request");
        return;
    }
    if(~filePath.indexOf("\0")){
        res.statusCode = 400;
        res.end("Bad request");
        return;
    }
    filePath = path.normalize(path.join(ROOT, filePath));

    if(filePath.indexOf(ROOT) != 0){
        res.statusCode = 404;
        res.end("File Not Found");
        return;
    }

    fs.stat(filePath, function (err, stats) {
        if(err || !stats.isFile()){
            res.statusCode = 404;
            res.end("File Not Found");
            return;
        }
    });
    sendFile(filePath, res);
}

function sendFile(filePath, res) {
    fs.readFile(filePath, function (err, content) {
        if(err) throw err;

        var mime = require("mime").getType(filePath);
        res.setHeader("Content-type", mime + "; charset=utf-8");
        res.end(content);
    })
}
