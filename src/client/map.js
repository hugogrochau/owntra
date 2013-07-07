owntra.Map = function() {
	this.id;
	this.players = new Array();
}

owntra.Map.prototype.getPlayers = function() {
	return this.players;
}

owntra.Map.prototype.addPlayer = function(player) {
	this.players.push(player);
}
