Database =  function() {
	

	this.connection;
}

Database.init = function() {
	this.mysql = require("mysql");

	this.connection = this.mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"root",
		database:"owntra"
	});

	this.connection.connect();
}

Database.getConnection = function() {
	return this.connection;
}
