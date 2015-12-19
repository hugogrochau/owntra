goog.provide("owntra.Player");

/**
 * Player Class
 * @constructor
 */
owntra.Player = function(name) {
    this.name = name;
};

owntra.Player.prototype.talk = function() {
    return "My name is " + this.name;
};
