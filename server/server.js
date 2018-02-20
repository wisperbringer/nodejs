var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    var info;
    if(req.url == "/"){
        fs.readFile("index.html", function (err, info) {
            if(err){
                console.error(err);
                res.statusCode = 500;
                res.end("An error occurred on the server");
                return;
            }
            res.end(info);
        })
    }
}).listen(3000);