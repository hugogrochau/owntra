goog.provide('owntra.Game');

goog.require('owntra.Player');

owntra.Game = function() {
    this.name = 'Owntra';
    this.myPlayer = new owntra.Player('Hugo');
  
    this.getName = function() {
        return this.name;
    }    
			
    this.getPlayer = function() {
        return this.myPlayer;
    }
}

var game = new owntra.Game();
console.log('Game Started');
console.log(game.getName());
console.log(game.getPlayer().talk());
