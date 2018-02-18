function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    console.log("Hello, " + who.name);
};

var vasya = new User("Vasya");
var dima = new User("Dima");

vasya.hello(dima);