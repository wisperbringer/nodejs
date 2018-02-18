var User = require("./user");

function run() {
    var vasya = new User("Vasya");
    var dima = new User("Dima");

    vasya.hello(dima);
}

if(module.parent){
    exports.run = run;
}else {
    run();
}
