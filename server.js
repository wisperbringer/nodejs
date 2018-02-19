var log = require("./logger")(module);
var db = require("db");
db.connect();

var User = require("./user");

function run() {
    var vasya = new User("Vasya");
    var dima = new User("Dima");

    vasya.hello(dima);

    log(db.getPhrases("Run successful"));
}

if(module.parent){
    exports.run = run;
}else {
    run();
}
