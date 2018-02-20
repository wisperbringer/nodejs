var fs = require("fs");

fs.readFile(__filename, function (err, info) {
    if(err){
        console.error(info);
    }else{
        console.log(info.toString());
    }
});