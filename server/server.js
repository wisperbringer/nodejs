var http = require("http");
var url = require("url");

var server = new http.Server(function (req, res) {
    console.log(req.method, req.url);
    var urlParse = url.parse(req.url, true);
    console.log(urlParse);
    if(req.method == "GET" && urlParse.pathname == "/echo" && urlParse.query.message){
        res.setHeader("Cache-controle", "no cache");
        res.end(urlParse.query.message);
    }else{
        res.statusCode = 404;
        res.end("Page not found");
    }
});


server.listen(1337, "127.0.0.1");
 