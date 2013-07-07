Client = function(session) {

	this.session = session;

	this.id;
	this.player = new Player(this);
}


Client.prototype.login = function(username,passwd) {


	Database.getConnection().query("SELECT * FROM accounts WHERE username = \"" + username +"\"",function(err,rows,fields) {
		if(rows.length != 0) {
			if(passwd == rows[0].password) {
				this.player.loadCharacter(rows[0].id);
			} else {
				this.getSession().send(LoginHandler.getLoginError());
			}
		} else {
			this.getSession().send(LoginHandler.getLoginError());
		}

	}.bind(this));



}

Client.prototype.getId = function() {
	return this.id;
}

Client.prototype.getPlayer = function() {
	return this.player;
}

Client.prototype.getSession = function() {
	return this.session;
}