Player = function() {
	this.id;
	this.name;
	this.position = {
		x:0;
		y:0
	};
}

Player.prototype.getId = function() {
	return this.id;
}

Player.prototype.getName = function() {
	return this.name;
}

Player.prototype.getPosition = function() {
	return this.position;
}