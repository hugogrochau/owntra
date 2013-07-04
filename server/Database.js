var database;

Database = function(host,user,pass,db) {
	this.mysql = require("mysql");

	this.connection = this.mysql.createConnection({
		host:host,
		user:user,
		password:pass,
		database:db
	});

	this.connection.connect();
}

Database.prototype.getConnection = function() {
	return this.connection;
}
