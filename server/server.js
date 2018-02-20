var http = require("http");
var fs = require("fs");

var server = http.Server(function (req, res) {
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
});

server.listen(3000);

setTimeout(function () {
    server.close();
}, 2500);

var timer = setInterval(function () {
    console.log(process.memoryUsage());
}, 1000);

timer.unref();