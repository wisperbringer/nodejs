var http = require("http");
var fs = require("fs");

var server = http.Server(function (req, res) {
    if(req.url == '/big.html'){
        var file = new fs.ReadStream('big.html');
        sendFile(file, res);
    }
}).listen(3000);

function sendFile(file, res) {
    file.pipe(res);

    file.on('error', function (err) {
        res.statusCode = 500;
        res.end("Server ERROR");
        return;
    });

    file.on('open', function () {
        console.log("open");
    }).on('close', function () {
        console.log('close');
    });

    res.on('close', function () {
        file.destroy();
    })
}