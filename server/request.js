var url = require("url");
var log = require("winston");

module.exports = function (req, res) {
    var urlParse = url.parse(req.url, true);

    log.info("Get request", req.method, req.url);

    log.info(urlParse);
    if(req.method == "GET" && urlParse.pathname == "/echo" && urlParse.query.message){
        var message = urlParse.query.message;
        log.debug("Echo: " + message);
        res.end(message);
        return;
    }else{
        log.error("Unknow URL");
        res.statusCode = 404;
        res.end("Page not found");
    }
}