var phrases = require("../db");
phrases.connect();

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log(phrases.getPhrases("Hello") + ", " + who.name);
};

module.exports = User;