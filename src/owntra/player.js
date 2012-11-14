goog.provide("owntra.Player");

owntra.Player = function(name) {
    name = name;
}

owntra.Player.prototype.talk = function() {
    return "My name is " + name;
}
