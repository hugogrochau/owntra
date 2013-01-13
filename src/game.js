goog.provide('owntra.Game');

goog.require('owntra.Player');
goog.require("goog.json")

/**
 * Game Class
 * @constructor
 */
owntra.Game = function() {
    this.name = 'Owntra';
    this.myPlayer = new owntra.Player('Hugo');
};

owntra.Game.prototype.getName = function() {
    return this.name;
};

owntra.Game.prototype.getPlayer = function() {
    return this.myPlayer;
};

var game = new owntra.Game();
owntra.staticURL = ""; //TODO: Make this a constant
console.log('Game Started');
console.log(game.getName());
console.log(game.getPlayer().talk());
console.log(goog.json.serialize({test:"something"}));
