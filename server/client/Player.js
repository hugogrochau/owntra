Player = function(client) {
	this.client = client;

	this.id;
	this.name;
	this.money;
}

Player.prototype.loadCharacter = function(id) {

	Database.getConnection().query("SELECT id,name,money FROM characters WHERE accountid = " + id,function(err,rows,fields){
		if(rows.length != 0) {
			this.id = rows[0].id;
			this.name = rows[0].name;
			this.money = rows[0].money;

			this.getClient().getSession().send(LoginHandler.getLoginSuccess(this));

		} else {
			console.log("account " + id + " has no characters.");
		}
	}.bind(this));

}

Player.prototype.getClient = function() {
	return this.client;
}

Player.prototype.getName = function() {
	return this.name;
}