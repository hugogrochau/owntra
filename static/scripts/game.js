define(["player"], function(Player) {

	var Game = Class.extend({

		init: function() {
			console.log("Game started!");
			this.name = "Owntra1";
			this.myPlayer = new Player("David");
		},

		test: function() {
			console.log(this.name);
		},

		getPlayer: function() {
			return this.myPlayer;
		}

	});

	return Game;

});